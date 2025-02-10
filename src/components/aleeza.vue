<template>
  <div :style="{ backgroundColor: color }" class="fondo">
    <button @click="cambiarColor">Cambiar color</button>
  </div>
</template>
<!--<div>: Este es el contenedor donde se cambiará el color de fondo.
:style="{ backgroundColor: color }": Aplica el color de fondo dinámicamente, usando la variable color de Vue. Esta variable cambia con cada clic en el botón.
<button @click="cambiarColor">: El botón ejecuta la función cambiarColor -->



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
  background: white;
  border-radius: 5px;
}
</style>
<!--.fondo: Hace que el div ocupe toda la pantalla, centra el contenido y suaviza el cambio de color de fondo.
button: Estiliza el botón con tamaño, cursor de mano, fondo blanco y bordes redondeados.-->




<script setup>
import { ref } from 'vue';

const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const color = ref('white');

const cambiarColor = () => {
  color.value = colores[Math.floor(Math.random() * colores.length)];
};
</script>
<!--import { ref } from 'vue';: Importa la función ref de Vue, que permite crear variables reactivas.
const colores = [...]: Lista de colores posibles para el fondo.
const color = ref('white');: Define la variable color, que es reactiva. Su valor inicial es 'white' (blanco).
const cambiarColor = () => { ... }: Función que cambia el color de fondo. Usa Math.random() para seleccionar un color aleatorio de la lista colores y lo asigna a color.value.-->