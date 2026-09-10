<template>
  <div class="lista-libros">
    <h2>Gestión de Catálogo de Libros</h2>

    <!-- Formulario para Añadir Libros -->
    <form @submit.prevent="agregarLibro" class="formulario">
      <h3>Registrar Nuevo Libro</h3>
      
      <div class="campo">
        <label>Título:</label>
        <input v-model="nuevoLibro.titulo" type="text" placeholder="Ej: Don Quijote" required />
      </div>

      <div class="campo">
        <label>Autor:</label>
        <input v-model="nuevoLibro.autor" type="text" placeholder="Ej: Miguel de Cervantes" required />
      </div>

      <div class="campo">
        <label>Categoría:</label>
        <select v-model="nuevoLibro.categoria" required>
          <option value="" disabled>Seleccione una categoría</option>
          <option value="Ficción">Ficción</option>
          <option value="No Ficción">No Ficción</option>
          <option value="Ciencia">Ciencia</option>
          <option value="Historia">Historia</option>
        </select>
      </div>

      <div class="campo">
        <label>Descripción:</label>
        <textarea v-model="nuevoLibro.descripcion" placeholder="Breve reseña del libro..."></textarea>
      </div>

      <button type="submit">Guardar Libro (o Presiona Enter)</button>
    </form>

    <!-- Vista previa en tiempo real -->
    <div class="vista-previa" v-if="nuevoLibro.titulo || nuevoLibro.autor">
      <h4>Vista previa en tiempo real:</h4>
      <p><strong>{{ nuevoLibro.titulo || '(Sin título)' }}</strong> - {{ nuevoLibro.autor || '(Sin autor)' }}</p>
    </div>

    <!-- Listado Reactivo -->
    <div class="listado">
      <h3>Libros Registrados</h3>
      
      <!-- Mensaje condicional si no hay libros -->
      <p v-if="libros.length === 0" class="mensaje-vacio">
        No hay libros disponibles en el catálogo en este momento.
      </p>

      <!-- Lista iterada usando el componente reutilizable -->
      <div v-else>
        <LibroComponent 
          v-for="libro in libros" 
          :key="libro.id" 
          :libro="libro" 
          @eliminar="eliminarLibro"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LibroComponent from '../components/Libro.vue';

export default {
  name: 'ListaLibros',
  components: {
    LibroComponent
  },
  data() {
    return {
      libros: JSON.parse(localStorage.getItem('booklist_data')) || [
        { id: 1, titulo: 'El Aleph', autor: 'Jorge Luis Borges', categoria: 'Ficción', descripcion: 'Colección de cuentos cortos.' }
      ],
      nuevoLibro: {
        titulo: '',
        autor: '',
        categoria: '',
        descripcion: ''
      }
    };
  },
  methods: {
    agregarLibro() {
      if (!this.nuevoLibro.titulo || !this.nuevoLibro.autor || !this.nuevoLibro.categoria) return;
      
      const nuevo = {
        id: Date.now(),
        ...this.nuevoLibro
      };
      
      this.libros.push(nuevo);
      this.guardarEnLocalStorage();
      
      // Limpiar formulario
      this.nuevoLibro = { titulo: '', autor: '', categoria: '', descripcion: '' };
    },
    eliminarLibro(id) {
      this.libros = this.libros.filter(libro => libro.id !== id);
      this.guardarEnLocalStorage();
    },
    guardarEnLocalStorage() {
      localStorage.setItem('booklist_data', JSON.stringify(this.libros));
    }
  }
};
</script>

<style scoped>
.formulario {
  background: #f9f9f9;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
}
.campo {
  margin-bottom: 12px;
}
.campo label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
.campo input, .campo select, .campo textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.vista-previa {
  font-style: italic;
  color: #666;
  background: #fff3cd;
  padding: 10px;
  border-left: 4px solid #ffc107;
  margin-bottom: 20px;
}
.mensaje-vacio {
  color: #e06c75;
  font-weight: bold;
}
form button {
  background-color: #0d6efd;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
}
.libro-item {
  background: white !important;
  color: black !important;
  border: 1px solid #000;
}
h3, p, span, strong, label {
  color: #000000 !important;
}
* {
  color: #000 !important;
}
</style>