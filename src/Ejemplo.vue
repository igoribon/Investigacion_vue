<template>
  <!-- Dentro de las etiquetas podemos poner atributos como variables usando v-bind: -->
  <h1 v-bind:style="miColor">
    <!-- Las variables dentro del contenido de html se ponen entre dobles llaves {{}}. -->
    Hola {{ miNombre }} y tengo {{ miEdad + 1 }}
  </h1>

  <!-- v-on: sirve lo mismo que para ejecutar un evento (onclick) en html. -->
  <button v-on:click="saludar(miNombre)">Aceptar</button>

  <button @click="decremento">-</button>
  <!-- Ponemos v-bind:class para que el color cambie según el valor de la variable contColor -->
  <span v-bind:class="contColor">{{ contador }}</span>
  <button @click="incremento">+</button>

<!-- Hemos creado un div y al poner v-if="contador<0" hacemos que solo se muestre si el contador es menor que 0. -->
<div v-if="contador<0">Escribe una cantidad mayor que 0</div>

<!-- Si usamos un v-else, se mostrará si la condición del v-if no se cumple. Tiene que ir siempre después de un v-if. -->
<div v-else-if="contador>=5">Cantidad menor que cinco</div>

<div v-show="comprobacion">No está permitido el número 0</div>

<!-- Para poner una imagen, se pone v-bind:src y se le pasa la variable con la ruta de la imagen. -->
<img v-bind:src="imagen1" alt=""/>
<img v-bind:src="imagen2"/>
</template>

<!-- v-bind se puede sustituir por : y v-on por @ -->






<script setup>
// Aquí creamos las variables que queremos usar en el template.
const miNombre = "Igor";
const miEdad = 25;
const miColor = "color:green; font-size: 3em";

// Función para que al pulsar el botón salga un alert con el nombre. ATENCION: Para que salga bien la cadena tiene que estar entre las comillas inversas (las que están al lado de la p)
const saludar = (nombre) => {
  alert(`Hola ${nombre}`);
};

// Contador
// La línea import { ref } from 'vue' está importando la función ref desde el paquete principal de Vue. Esta función es crucial en la creación de referencias reactivas, que son una de las características fundamentales de la composición de la API de Vue 3. Si también necesitas usar computed, importa computed en lugar de ref.
import { computed, ref } from "vue";

// Estamos importando un archivo js que está en la misma carpeta que este archivo. Para ello, en el archivo que queremos importar, hay que poner export antes de la constante que queremos importar.
import {valores} from "./datos.js";
const imagen2="valores[0].web"

//Para que la variable sepa que es reactiva hay que poner que lo que cambie sea el visualViewport. Por eso ponemos contador.value en vez de contador.
const contador = ref(0);

//Para poner una imagen, se pone la ruta de la imagen en una constante. Luego en el v-bind:src de la imagen se pone la constante. Si están en assets habría que importarla con un "import imagen1 from '../assets/logo.svg';". Si la ponemos en public, no haría falta importarla. Todo lo que hay en la carpeta public se puede llamar directamente porque no hay que compilarlo ni importarlo..
const imagen1 = "logo.svg";

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
/*Aquí se pone todo el css que queramos usar en el componente.
Si ponemos la palabra scoped, el css solo afectará a este componente.
*/

span {
  padding: 0 5px;
}
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
