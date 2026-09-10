<template>
  <div class="detalle-libro">
    <h2>Detalle del Libro</h2>
    
    <div v-if="libro" class="info-detalle">
      <h3>{{ libro.titulo }}</h3>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <p><strong>Descripción:</strong> {{ libro.descripcion || 'Sin descripción disponible.' }}</p>
    </div>
    
    <div v-else class="error">
      <p>El libro solicitado no existe o fue eliminado.</p>
    </div>

    <router-link to="/libros" class="btn-volver">← Volver al Listado</router-link>
  </div>
</template>

<script>
export default {
  name: 'DetalleLibro',
  props: ['id'],
  data() {
    return {
      libro: null
    }  
  },
  mounted() {
    const raw = localStorage.getItem('libros') || localStorage.getItem('booklist_data') || '[]';
    const libros = JSON.parse(raw);
    const idParam = this.id || this.$route.params.id;
    this.libro = libros.find(l => l.id == idParam) || libros[idParam] || null;
  }
}
</script>

<style scoped>
.info-detalle h3, .info-detalle p {
  color: #000000 !important;
} 
.info-detalle { 
  background: #f4f6f8;
  color: #000000;
  padding: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
}
.error {
  color: red;
  margin-bottom: 20px;
}
.btn-volver {
  display: inline-block;
  color: #35495e;
  text-decoration: none;
  font-weight: bold;
}
</style>