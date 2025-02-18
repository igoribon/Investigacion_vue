<template>
    <div :style="{ backgroundColor: color }" class="fondo">
      <button @click="cambiarColor">Cambiar color</button>
    </div>
  </template>
<!-- El div ocupa toda la pantalla, y al hacer clic en el botón, el color de fondo cambia.
:style="{ backgroundColor: color }", que aplica el color guardado en la variable color.-->

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
El div tiene un cambio de fondo suave y está centrado. El botón tiene un estilo básico.-->


  
<script setup>
import { ref } from 'vue';

const colores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];//lista de colores

const color = ref('white');//Define una variable reactiva color con valor inicial 'white'

const cambiarColor = () => { //Define una función que cambia color a un color aleatorio de la lista colores
  color.value = colores[Math.floor(Math.random() * colores.length)];
};
</script>
<!--<script setup> hace que el código sea más fácil de escribir y entender en Vue.
color.value = ... → Cambia el color del fondo.
colores[...] → Toma un color de la lista.
Math.floor(...) → Redondea hacia abajo para obtener un índice.
Math.random() → Genera un número entre 0 y 1.
* colores.length → Lo multiplica por la cantidad de colores.-->