<template>
    <div :style="{ backgroundColor: color }" class="fondo">
      <button @click="cambiarColor">Cambiar color</button>
    </div>
  </template>
<!--Hay un <div> que ocupa toda la pantalla.
Dentro hay un botón que, al hacer clic, cambia el color de fondo.-->

<style scoped>
.fondo {
  height: 100vh; /* Ocupa toda la pantalla */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.5s;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: rgb(114, 104, 104);
  border-radius: 5px;
}
</style>
<!--Usas <style scoped> para que los estilos solo se apliquen al componente actual y no afecten a otros componentes.
.fondo: Define cómo se ve el fondo (que ocupa toda la pantalla y tiene un cambio de color suave).
button: Estiliza el botón (como el tamaño y el color del fondo).-->


  
<script setup>
import { ref } from 'vue';

const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const color = ref('white');

const cambiarColor = () => {
  color.value = colores[Math.floor(Math.random() * colores.length)];
};
</script>
<!--<script setup> hace que el código sea más fácil de escribir y entender en Vue.
const colores = [...]: Esta es una lista de colores que el fondo puede tomar.
const color = ref('white');: Define una variable reactiva color con valor inicial 'white'.
const cambiarColor = () => { ... };: Define una función que cambia color a un color aleatorio de la lista colores.
color.value = ... → Cambia el color del fondo.
colores[...] → Toma un color de la lista.
Math.floor(...) → Redondea hacia abajo para obtener un índice.
Math.random() → Genera un número entre 0 y 1.
* colores.length → Lo multiplica por la cantidad de colores.-->