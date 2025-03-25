import  {defineStore} from 'pinia';
import {ref} from 'vue';

export const useWheatherStore = defineStore('weather', () =>{
    const temperatura = ref(0);
    const setTemperatura = (temp) =>{
       tempeatura.value = temp;
    }
    return{temperatura, setTemperatura};





})