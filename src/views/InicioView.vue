<template>
  <div class="inicio">
    <h1>Bienvenido a BookList SPA</h1>
    <p class="usuario">Usuario Activo: <strong>Annabel Canela</strong></p>

    <div class="contador-seccion">
      <h3>Contador de Visitas / Clics</h3>
      <p>Valor actual: <span class="numero">{{ contador }}</span></p>
      <button @click="incrementarContador">Incrementar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InicioView',
  data() {
    return {
      nombreUsuario: 'Annabel Canela',
      contador: 0
    }
  },
  methods: {
    incrementarContador() {
      this.contador++
    }
  }
}
</script>

<style scoped>
.inicio {
  text-align: center;
  background: white !important;
}

.inicio h1 {
  color: #0f172a !important;
  font-size: 28px;
  margin-bottom: 10px;
}

.usuario {
  color: #475569 !important;
  font-size: 16px;
}

.contador-seccion {
  margin-top: 30px;
  background: #f8fafc !important;
  border: 1px solid #e2e8f0;
  padding: 25px;
  border-radius: 12px;
}

.contador-seccion h3 {
  color: #0f172a !important;
  margin-top: 0;
}

.numero {
  font-weight: bold;
  font-size: 24px;
  color: #0ea5e9 !important;
}

button {
  margin-top: 15px;
  background: #0ea5e9 !important;
  color: white !important;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}

button:hover {
  background: #0284c7 !important;
}
</style>