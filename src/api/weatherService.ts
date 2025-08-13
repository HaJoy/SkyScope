import api from "./axios";

export interface WeatherDataTypes {
  name: string;
  main: {
    temp: number;
    [key: string]: number;
  };
  weather: Array<{
    main: string;
    [key: string]: string | number;
  }>;
  [key: string]: unknown;
}

export const getWeather = async (cityName: string): Promise<WeatherDataTypes> => {
    const response = await api.post(`${import.meta.env.VITE_WEATHER_URL}`, {
        "cityName": cityName
    });
    return response.data;
};