import api from "./axios";

export const getWeather = async (cityName: string): Promise<unknown> => {
    const response = await api.post(`${import.meta.env.VITE_WEATHER_URL}`, {
        "cityName": cityName
    });
    return response.data;
};