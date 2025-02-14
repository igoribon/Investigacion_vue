<template>
  <h1 class="titulo">Contador de números</h1>

  <button class="boton" @click="decremento">-</button>
  <span v-bind:class="contColor" >{{ contador }}</span>
  <button class="boton" @click="incremento">+</button>

  <!-- Hemos creado un div y al poner v-if="contador<0" hacemos que solo se muestre si el contador es menor que 0. -->
  <div v-if="contador < 0">Escribe una cantidad mayor que 0</div>

  <!-- Si usamos un v-else, se mostrará si la condición del v-if no se cumple. Tiene que ir siempre después de un v-if. -->
  <div v-else-if="contador >= 5">Cantidad mayor que cinco</div>

  <div v-show="comprobacion">No está permitido el número 0</div>

  <!-- <div>Total de clicks: {{ totalClicks }}</div>
  <div>Suma de valores: {{ sumValores }}</div> -->

  <!-- Aquí tenemos el botón que mostrará los valores: El número de veces que se pulsan los botones y la suma de todos los valores que se muestran. El evento on-click hace que mostrarvalores se cambie a true o false según si está activo o no. -->
  <button class="boton" @click="mostrarValores = !mostrarValores">
    {{ mostrarValores ? 'Ocultar valores' : 'Mostrar valores' }}
  </button>
  <!-- Aquí mostramos el complemento hijo de la suma de los valores: {{ sumValores }} -->
  <ValoresDisplay v-if="mostrarValores" :totalClicks="totalClicks" :sumValores="sumValores" />
</template>

<script setup>
// Contador
import { computed, ref } from "vue";
//Importamos el complemento hijo para que pueda capturar los valores de este componente
import ValoresDisplay from "./valores.vue";

const contador = ref(0);
//Aquí definimos las variables de totalClicks y sumValores que se usarán en el componente hijo. También definimos mostrarValores que se usará para mostrar u ocultar los valores.
const totalClicks = ref(0);
const sumValores = ref(0);
const mostrarValores = ref(false);

//Funciones para incrementar y decrementar el contador que luego llamamos desde los votones con @click. También le hemos añadido un color al contador según si es positivo o negativo con un if
const decremento = () => {
  contador.value--;
  //Sumamos 1 al valor totalClicks y sumamos el valor del contador al sumValores. 
  totalClicks.value++;
  sumValores.value += contador.value;
  if (contador.value < 0) {
    contColor.value = "rojo";
  }
};
const incremento = () => {
  contador.value++;
   //Sumamos 1 al valor totalClicks y sumamos el valor del contador al sumValores. 
  totalClicks.value++;
  sumValores.value += contador.value;
  if (contador.value > 0) {
    contColor.value = "verde";
  }
};
//Creamos una constante con un color de base para que el contador sea de ese color. Luego llamamos a esta constante en el v-bind:class del span.
const contColor = ref("azul");

//Esto es una propiedad computada. Hace que se revise si el contador es 0 y si lo es, devuelve true. Luego en el v-show del div se pone comprobacion.
const comprobacion = computed(() => {
  return contador.value === 0;
});
</script>

<style scoped>
.titulo {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.size {
  font-size: 2rem;
  margin: 1rem;
}

.boton {
  font-size: 2rem;
  margin: 0 1rem;
}

.rojo {
  color: red;
  font-size: 2rem;
}
.verde {
  color: green;
  font-size: 2rem;
}
.azul {
  color: blue;
  font-size: 2rem;
}
</style>

