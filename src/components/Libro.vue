<template>
  <div class="tarjeta-libro">
    <h4>{{ libro.titulo }}</h4>
    <p><strong>Autor:</strong> {{ libro.autor }}</p>
    <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
    
    <div class="acciones">
      <!-- Enlace dinámico con Vue Router -->
      <router-link :to="'/libros/' + libro.id" class="btn-detalle">Ver Detalle</router-link>
      <button @click="$emit('eliminar', libro.id)" class="btn-eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibroComponent',
  props: {
    libro: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.tarjeta-libro {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  background: white;
}
.acciones {
  margin-top: 10px;
  display: flex;
  gap: 10px;
}
.btn-detalle {
  background-color: #42b983;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 3px;
  font-size: 14px;
}
.btn-eliminar {
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}
</style>