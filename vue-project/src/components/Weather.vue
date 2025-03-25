<template>
   
    <h3>La temperatura actual es: {{weatherStore.temperatura}} Grados</h3>
   


</template>

<script setup>

import { useWheather } from '../composables/useWeather';
import { onMounted } from 'vue';
import { useWheatherStore } from '../stores/weatherStore';

 const weatherStore = useWheatherStore();
onMounted(() =>{
    useWheather();
})

</script>


<style scoped></style>