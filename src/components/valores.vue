<template>
    <!-- Tenemos el div con los datos que queremos mostrar -->
    <div>
      <p>Total de clicks: {{ totalClicks }}</p>
      <p>Suma de valores: {{ sumValores }}</p>
    </div>
  </template>
  
  <script setup>
  //Importamos el módulo para las propiedades reactivas. En el hijo debe ser toRefs porque estamos trayendo coonstantes reactivas de otro sitio
  import { toRefs } from "vue";
  
  // Recibimos las propiedades desde el componente padre a través de un prop. 
  const props = defineProps({
    totalClicks: Number,
    sumValores: Number,
  });
  </script>
  
  <style scoped>
  p {
    font-size: 1.5rem;
  }
  </style>