<template>
    <div :style="{ backgroundColor: color }" class="fondo">
      <button @click="cambiarColor">Cambiar color</button>
    </div>
  </template>
  <!--<div>: Es un contenedor que ocupa toda la pantalla y cuyo color de fondo cambia.

    :style="{ backgroundColor: color }": Aquí se dice que el color de fondo del div será el valor de la variable color.

<button>: Es un botón que, cuando se hace clic, ejecuta la función cambiarColor() para cambiar el color de fondo.-->



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
<!--.fondo: Define cómo se ve el fondo (que ocupa toda la pantalla y tiene un cambio de color suave).
button: Estiliza el botón (como el tamaño y el color del fondo).-->



  
  <script setup>
  import {ref} from 'vue';
  
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
Math.random() * colores.length → Lo multiplica por la cantidad de colores.
Math.floor(...) → Redondea hacia abajo para obtener un índice válido.
colores[...] → Obtiene un color de la lista.
color.value = ... → Cambia el color y actualiza la vista.-->