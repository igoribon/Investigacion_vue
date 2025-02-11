<template>
    <div :style="{ backgroundColor: color }" class="fondo">
      <button @click="cambiarColor">Cambiar color</button>
    </div>
  </template>


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


  
<script setup>
import { ref } from 'vue'; // Importa 'ref' desde Vue para crear una propiedad reactiva

// Lista de colores posibles para el fondo
const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

// Variable reactiva 'color', inicializada con 'white'
const color = ref('white');

// Función para cambiar el color al azar cuando se hace clic en el botón
const cambiarColor = () => {
  color.value = colores[Math.floor(Math.random() * colores.length)];
};
</script>