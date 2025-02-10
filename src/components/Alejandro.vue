<template>
    <div>
        <input type="text" placeholder="Escribe tu nombre aqui!!" v-model="nombre">
        <h2> {{ saludo }} {{ nombre }}!!</h2>
    </div>
</template>

<style scoped>

</style>

<script setup>
import {ref, computed} from 'vue'

const nombre 

// const saludo = [ mañana, tarde, noche]
// const mañana = "Buenos días"
// const tarde = "Buenas tardes"
// const noche = "Buenas Noches Zzz"

</script>