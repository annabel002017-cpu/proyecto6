import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '../views/InicioView.vue';
import ListaLibros from '../views/ListaLibros.vue';
import DetalleLibro from '../views/DetalleLibro.vue';

const routes = [
  { path: '/', name: 'Inicio', component: InicioView },
  { path: '/libros', name: 'ListaLibros', component: ListaLibros },
  { path: '/libros/:id', name: 'DetalleLibro', component: DetalleLibro, props: true }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
