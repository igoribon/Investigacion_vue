<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
<h1>Proyecto de investigación sobre Vue</h1>
<p></p>
<div class="contenido">
<div class="participantes">
<h2>Participantes</h2>
<ul>
<li>Aleeza</li>
<li>Alejandro</li>
<li>Erika</li>
<li>Igor</li>
</ul>
</div>
<p></p>
<div class=temario>
<h2>Temas que se han investigado:</h2>
<ol>
<li>Instalacion y configuracion</li>
<li>Estructura del directorio raiz (Funcionalidad de carpetas y archivos)</li>
<li>Estructura interna de .vue</li>
<li>Sintaxis</li>
<li>Importacion e Exportacion de librerías y archivos</li>
<li>Directivas</li>
<li>CSS</li>
<li>Composition API /Options API</li>
<li>Routers y vistas</li>
<li>Componentes</li>
<li>Comunicación entre componentes y App.vue</li>
<li>Reactividad y Estado</li>
<li>Propiedades computadas</li>
<li>Deploy o despliegue de la aplicación</li>
<li>Especial: Ciclo de vida</li>
</ol>
</div>
 </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  color: green;
}
h2 {
  font-size: 1.5rem;
}

.contenido {
display: flex;
justify-content: space-around;
gap: 2rem;
}
</style>
