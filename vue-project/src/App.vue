<template>
  <!-- el componente llamada-->
  <MainView></MainView>
  <Contador></Contador>
  <ListaDeTareas></ListaDeTareas>
</template>

<script setup>
import MainView from './views/MainView.vue';
import Contador from './modules/contador/components/Contador.vue';
import ListaDeTareas from './modules/listaDeTareas/components/ListaDeTareas.vue';


</script>

<style scoped></style>
