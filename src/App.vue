<template>
  <div class="app">
    <nav class="navbar">
      <h1>📚 BookList SPA</h1>
      <div class="links">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/libros">Lista de Libros</RouterLink>
      </div>
    </nav>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style>
body, #app, html {
  background: white !important;
  background-color: white !important;
}
h1 {
  color: black !important;
  display: block !important;
  font-size: 28px !important;
  font-weight: bold !important;
  text-align: center !important;
  margin: 20px !important;
}
form button {
  background-color: #0d6efd !important;
  color: white !important;
  padding: 10px !important;
  border: none !important;
  width: 100% !important;
}
button {
  color: white !important;
  padding: 8px 15px !important;
  border: none !important;
  cursor: pointer !important;
  width: auto !important;
  border-radius: 5px !important;
}
</style>