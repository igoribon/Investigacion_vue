<template>

    <h1 v-bind:style="miColor">
      Contador de números
    </h1>
  
    <button @click="decremento">-</button>
    <!-- Ponemos v-bind:class para que el color cambie según el valor de la variable contColor -->
    <span v-bind:class="contColor">{{ contador }}</span>
    <button @click="incremento">+</button>
  
  <!-- Hemos creado un div y al poner v-if="contador<0" hacemos que solo se muestre si el contador es menor que 0. -->
  <div v-if="contador<0">Escribe una cantidad mayor que 0</div>
  
  <!-- Si usamos un v-else, se mostrará si la condición del v-if no se cumple. Tiene que ir siempre después de un v-if. -->
  <div v-else-if="contador>=5">Cantidad menor que cinco</div>
  
  <div v-show="comprobacion">No está permitido el número 0</div>
  </template>


<script setup>
// Contador
import { computed, ref } from "vue";

const contador = ref(0);

//Funciones para incrementar y decrementar el contador que luego llamamos desde los votones con @click. También le hemos añadido un color al contador según si es positivo o negativo con un if
const decremento = () => {
  contador.value--;
  if (contador.value < 0) {
    contColor.value = "rojo";
  }
};
const incremento = () => {
  contador.value++;
  if (contador.value > 0) {
    contColor.value = "verde";
  }
};
//Creamos una constante con un color de base para que el contador sea de ese color. Luego llamamos a esta constante en el v-bind:class del span.
const contColor = ref("azul");

//Esto es una propiedad computada. Hace que se revise si el contador es 0 y si lo es, devuelve true. Luego en el v-show del div se pone comprobacion. 
const comprobacion=computed(()=>{
  return contador.value===0;
})
</script>


<style scoped>
.rojo {
  color: red;
}
.verde {
  color: green;
}
.azul {
  color: blue;
}
</style>