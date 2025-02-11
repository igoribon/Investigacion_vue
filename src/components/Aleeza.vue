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
<!--.fondo: Define cómo se ve el fondo (que ocupa toda la pantalla y tiene un cambio de color suave).
button: Estiliza el botón (como el tamaño y el color del fondo).-->


  
<script setup>
import { ref } from 'vue';

const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const color = ref('white');

const cambiarColor = () => {
  color.value = colores[Math.floor(Math.random() * colores.length)];
};
</script>
<!--const colores = [...]: Esta es una lista de colores que el fondo puede tomar.
const color = ref('white'): Define una variable llamada color, que inicialmente es white (blanco). El valor de color es el que se usa para cambiar el fondo.
cambiarColor(): Es una función que cambia el valor de color a un color aleatorio de la lista colores cuando el usuario hace clic en el botón.
Math.random() → Genera un número entre 0 y 1.
* colores.length → Lo multiplica por la cantidad de colores.
Math.floor(...) → Redondea hacia abajo para obtener un índice.
colores[...] → Toma un color de la lista.
color.value = ... → Cambia el color del fondo.-->