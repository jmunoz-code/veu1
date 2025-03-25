import { useWheatherStore } from "../stores/weatherStore";
import { getTemperatura } from "../helpers/getWeather";

export const useWheather = async () => {
  try {
    const temperatura = await getTemperatura(); // Espera a que la promesa se resuelva
    const weatherStore = useWheatherStore();
    weatherStore.temperatura = temperatura;
  } catch (error) {
    console.error("Error al obtener la temperatura:", error);
    // Maneja el error aquí, por ejemplo, asignando un valor predeterminado al store
    // o mostrando un mensaje al usuario.
    const weatherStore = useWheatherStore();
    weatherStore.temperatura = null;
  }
};