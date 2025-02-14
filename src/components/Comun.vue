<style scoped>
    .cuerpo {
        width: 100%;
        height: 100vh;
        background-image: url('/public/fondoCielo.jpg');
        background-size: cover;
        background-position: center;
    }

    h2 {
        text-align: center;
        color: white;
    }

    .cuadrito {
        margin-top: 5rem;
        display: block;
        margin:  auto;
        width: 12rem;
    }

    #aztro {
        text-align: center;
        color: white;
        list-style: none;
        margin-top: 3rem;
        margin-left: -2rem;
    }

    .texto {
        background-color: rgba(138, 43, 226, 0.8);
        color: white;
        text-align: center;
        padding: 1rem;
        border-radius: 1rem;
        margin: 2rem auto;
        max-width: 600px;
    }

    h3 {
        color: #ffd700;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
</style>

<template>
    <div class="cuerpo">
        <h2>Horóscopo del día</h2>
        <!-- Añadimos v-model al input y un evento @input -->
        <select class="cuadrito" v-model="signoInput" v-on:change="filtrarSigno">
            <option value="Aries">Aries</option>
            <option value="Tauro">Tauro</option>
            <option value="Géminis">Géminis</option>
            <option value="Cáncer">Cáncer</option>
            <option value="Leo">Leo</option>
            <option value="Virgo">Virgo</option>
            <option value="Libra">Libra</option>
            <option value="Escorpio">Escorpio</option>
            <option value="Sagitario">Sagitario</option>
            <option value="Capricornio">Capricornio</option>
            <option value="Acuario">Acuario</option>
            <option value="Piscis">Piscis</option>
        </select>
        <article>
            <!-- Modificamos para mostrar solo el signo filtrado -->
            <ul id="aztro" v-if="signoFiltrado">
                <li class="texto">
                    <h3>{{ signoFiltrado.signo }}</h3>
                    <p>Predicción: {{ signoFiltrado.horoscopo }}</p>
                    <p>Día de la suerte: {{ signoFiltrado.dia_de_la_suerte }}</p>
                    <p>Día del amor: {{ signoFiltrado.dia_del_amor }}</p>
                    <p>Amistad compatible: {{ signoFiltrado.amistad }}</p>
                    <p>Trabajo: {{ signoFiltrado.trabajo }}</p>
                    <p>Número de la suerte: {{ signoFiltrado.numero_de_la_suerte }}</p>
                </li>
            </ul>
            <!-- Mensaje cuando no se encuentra el signo -->
            <p v-else-if="signoInput" class="texto">
                No se encontró el signo zodiacal
            </p>
        </article>
        <article>
            <ul id="cartas" v-if="cartaSeleccionada">
                <li>
                    <h3>Presente:</h3>
                    <img v-bind:src="cartaSeleccionada.imagen" v-bind:alt="cartaSeleccionada.nombre">
                </li>        
            </ul>
        </article>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'  

const horoscopo = ref({})
const arcanos = ref([])
const signoInput = ref('')
const signoFiltrado = ref(null)
const cartaSeleccionada = ref(null)

const filtrarSigno = () => {
    if (!horoscopo.value.signos || !signoInput.value) {
        signoFiltrado.value = null
        return
    }
    
    const signoEncontrado = horoscopo.value.signos.find(signo => 
        signo.signo?.toLowerCase() === signoInput.value.toLowerCase()
    )
    
    signoFiltrado.value = signoEncontrado
    seleccionarCartaAleatoria()
}
const seleccionarCartaAleatoria = () => {
    if (arcanos.value.arcanos_mayores) {
        const indiceAleatorio = Math.floor(Math.random() * arcanos.value.arcanos_mayores.length)
        cartaSeleccionada.value = arcanos.value.arcanos_mayores[indiceAleatorio]
    }
}   
const fetchCarta = async () => {
    try {
        const response = await fetch ('/arcanos.json')
        if (!response.ok) {
            throw new Error('Error al cargar los datos')
        }
        const datos = await response.json()
        arcanos.value = datos
    } catch (error) {
        console.error('Error al cargar los datos:', error)
    }
}
onMounted(fetchCarta)

const fetchHoroscopo = async () => {
    try {
        const response = await fetch('/horoscopo.json')
        if (!response.ok) {
            throw new Error('Error al cargar los datos')
        }
        const datos = await response.json()
        horoscopo.value = datos
    } catch (error) {
        console.error('Error al cargar los datos:', error)
    }
}

onMounted(fetchHoroscopo)
</script>

