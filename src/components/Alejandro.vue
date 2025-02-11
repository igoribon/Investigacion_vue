<template>
    <div>
        <input type="text" placeholder="Escribe tu nombre aqui!!" v-model="nombre">
        <h2> {{ saludo }} {{ nombre }}!!</h2>
        <h3>Son las {{ horaActual }} {{ meridiano }}</h3>
    </div>
</template>

<style scoped>
div {
    padding: 20px;
    text-align: center;
}
input {
    padding: 8px;
    margin-bottom: 10px;
}
h2 {
    color: #276cb1;
}
</style>

<script setup>
import {ref, computed} from 'vue';

const nombre = ref(' ');
const horaActual = new Date().getHours();

const saludo = computed(() => {

    if (horaActual >= 5 && horaActual <  12){
        return 'Buenos días';
    } else if (horaActual >= 12 && horaActual < 20){
        return 'Buenas tardes';
    } else {
        return 'Buenas noches Zzz';
    }
});

const meridiano = computed(() => {

    if (horaActual < 12){
        return 'am'
    } else {
        return 'pm'
    }
});





</script>