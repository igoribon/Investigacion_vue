<template>
    <div class="cuerpo">
        <h2>Hola</h2>
        <!-- <input type="text" class="cuadrito" placeholder="Escribe tu nombre"> -->
            <!-- <input type="date" class="cuadrito" v-model="birthdate" placeholder="Elige tu fecha de nacimiento"> -->
        <ul id="aztro">
            <li v-for="signo in horoscopo" v-bind:key="signo.signo">
                {{ signo.signo }}: {{ signo.horoscopo }}
            </li>
            <li v-for="horoscopo in horoscopo" v-bind:key="horoscopo.horoscopo">
               {{ horoscopo.horoscopo }}: {{ horoscopo.horoscopo }}
            </li>
            <li v-for="dia_de_la_suerte in horoscopo" v-bind:key="dia_de_la_suerte.dia_de_la_suerte">
               {{ dia_de_la_suerte.dia_de_la_suerte }}: {{ dia_de_la_suerte.horoscopo }}
            </li>
            <li v-for="dia_del_amor in horoscopo" git v-bind:key="dia_del_amor.dia_del_amor">
                {{ dia_del_amor.dia_del_amor }}: {{ dia_del_amor.horoscopo }}
            </li>
            <li v-for="amistad in horoscopo" v-bind:key="amistad.amistad">
                {{ amistad.amistad }}: {{ amistad.horoscopo }}
            </li>
            <li v-for="trabajo in horoscopo" v-bind:key="trabajo.trabajo">
                {{ trabajo.trabajo }}: {{ trabajo.horoscopo }}
            </li>
            <li v-for="numero_de_la_suerte in horoscopo" v-bind:key="numero_de_la_suerte.numero_de_la_suerte">
                {{ numero_de_la_suerte.numero_de_la_suerte }}: {{ numero_de_la_suerte.horoscopo }}
            </li>
        
        </ul>

    </div>
</template>

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
    }

    #aztro {
        text-align: center;
        color: white;
        list-style: none;
        margin-top: 3rem;
        margin-left: -2rem;
    }

    .texto {
        background-color:blueviolet;
        color: black;
        text-align: center;
        padding: 1rem;
        border-radius: 1rem;
    }
</style>

<script setup>
    import {ref, onMounted} from 'vue';

    const horoscopo = ref([])

    const fetchHoroscopo = async () => {
        try {
            const response = await fetch ('/horoscopo.json')
            if (!response.ok) {
                throw new Error('Error al cargar los datos')
            }
            const datos = await response.json()
            horoscopo.value = data
        } catch (error) {
            console.error('Error al cargar los datos', error)
        }
    } //La función onMounted asegura que fetchProducts se ejecute después 
    onMounted(fetchHoroscopo); // de que el componente se haya montado.

</script>

