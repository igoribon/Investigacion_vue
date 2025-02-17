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
        /*Alejandro*/
            font-size: 1.5rem;
            background-color: rgba(137, 43, 226, 0.699);
            border: none;
            border-radius: 0.5rem;
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
        img{
            width: 8rem;
        }
        #cartas li{
            display: flex;   
            flex-wrap: wrap;
        }
        #cartas h3{
            width: 33%;   
        }
        #cartas img{
            margin: 0 1.8rem;
            transition: 1s;
        }

        .carta-container img {
            width: 8rem;
            transition: transform 0.6s;
            cursor: pointer;
        }
        .carta-container img:hover {
            transform: scale(1.1);
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
                        <div class="carta-container">
                            <h3>Pasado:</h3>
                            <img 
                                :src="cartasVolteadas.pasado ? cartaSeleccionada.pasado.imagen : '/cartaDorso.jpg'"
                                :alt="cartaSeleccionada.pasado.nombre"
                                :style="estilosCarta.pasado"
                                @click="voltear('pasado')"
                            >
                        </div>
                        <div class="carta-container">
                            <h3>Presente:</h3>
                            <img 
                                :src="cartasVolteadas.presente ? cartaSeleccionada.presente.imagen : '/cartaDorso.jpg'"
                                :alt="cartaSeleccionada.presente.nombre"
                                :style="estilosCarta.presente"
                                @click="voltear('presente')"
                            >
                        </div>
                        <div class="carta-container">
                            <h3>Futuro:</h3>
                            <img 
                                :src="cartasVolteadas.futuro ? cartaSeleccionada.futuro.imagen : '/cartaDorso.jpg'"
                                :alt="cartaSeleccionada.futuro.nombre"
                                :style="estilosCarta.futuro"
                                @click="voltear('futuro')"
                            >
                        </div>
                    </li>
                </ul>
            </article>
        </div>
    </template>

    <script setup>
    import { ref, onMounted, computed } from 'vue'  

    const horoscopo = ref({})
    const arcanos = ref([])
    const signoInput = ref('')
    const signoFiltrado = ref(null)
    const cartaSeleccionada = ref(null)


    const filtrarSigno = () => {
        cartasVolteadas.value = {
        pasado: false,
        presente: false,
        futuro: false
    }

        if (!horoscopo.value.signos || !signoInput.value) {
            signoFiltrado.value = null
            return
        }
        // .find busca una coincidencia en el .json con el valor del select
        // ? (opcional chaining) asegura que no se produzca un error si signo es null o undefined.
        const signoEncontrado = horoscopo.value.signos.find(item => 
            item.signo?.toLowerCase() === signoInput.value.toLowerCase()
        )
        
        signoFiltrado.value = signoEncontrado
        seleccionarCartaAleatoria()
    }
    const seleccionarCartaAleatoria = () => {
        if (arcanos.value.arcanos_mayores) {
            // Crea un array vacío
            const tresCartas = [];
            // Selecciona el total de los elementos arcanos_mayores del .json
            const totalCartas = arcanos.value.arcanos_mayores.length;
            // new Set() evita duplicados porque es un objeto de valores únicos
            const numerosUsados = new Set();

            //Establece la longitud máxima del array en 3
            while (tresCartas.length < 3) {
                // Math.random genera un número 0 =< 1;
                // Se multiplica * totalCartas
                // Math.floor redondea al N entero menor
                const indiceAleatorio = Math.floor(Math.random() * totalCartas);
                if (!numerosUsados.has(indiceAleatorio)) {
                    numerosUsados.add(indiceAleatorio);
                    // Mete en el array los 3 números concordados al .json
                    tresCartas.push(arcanos.value.arcanos_mayores[indiceAleatorio]);
                }
            }
            // Aquí se asigna cada número del array a una posición
            cartaSeleccionada.value = {
                pasado: tresCartas[0],
                presente: tresCartas[1],
                futuro: tresCartas[2]
            };
        }
    }

    // Estados iniciales de las cartas
    const cartasVolteadas = ref({
        pasado: false,
        presente: false,
        futuro: false
    })
    const rotaciones = ref({
        pasado: 0,
        presente: 0,
        futuro: 0
    })

    //  Define propiedades derivadas reactivas
    const estilosCarta = computed(() => ({
        pasado: {
            transform: `rotateY(${rotaciones.value.pasado}deg)`,
        },
        presente: {
            transform: `rotateY(${rotaciones.value.presente}deg)`,
        },
        futuro: {
            transform: `rotateY(${rotaciones.value.futuro}deg)`,    
        }
    }))


    // Alterna los valores para manejar las cartas
    const voltear = (tipo) => {
        rotaciones.value[tipo] = rotaciones.value[tipo] === 0 ? 360 : 0;
        cartasVolteadas.value[tipo] = !cartasVolteadas.value[tipo];
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

    onMounted(() => {
    fetchCarta()
    fetchHoroscopo()
})
    </script>

