import api from "./axios";

export interface weatherDataTypes {
  name: string;
  main: object;
  weather: [object];
  [key: string]: unknown;
}

export const getWeather = async (cityName: string): Promise<weatherDataTypes> => {
    const response = await api.post(`${import.meta.env.VITE_WEATHER_URL}`, {
        "cityName": cityName
    });
    return response.data;
};