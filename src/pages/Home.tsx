import { getWeather, type WeatherDataTypes } from '@/api/weatherService';
import { PageDisplay } from '@/components/layout/PageDisplay'
import { Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const Home = () => {

  const [weatherData, setWeatherData] = useState<WeatherDataTypes>();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const data = await getWeather('London');
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching weather: ", error);
      }
    }

    fetchCurrentWeather();
  
  }, [])
  

  return (
    <PageDisplay>
      <div className='flex justify-between bg-card border rounded w-full h-52 p-5'>
        <div className='flex flex-col justify-center gap-2'>
          <span className='text-2xl'>{weatherData?.name}</span>
          <span className='text-7xl'>{Math.round((weatherData?.main.temp?? - 32) / 1.8)}</span>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <Sun size={90} />
          <span className='text-2xl'>{weatherData?.weather[0].main}</span>
        </div>
      </div>
      
      <div className='flex flex-col sm:flex-row border rounded h-64 w-full gap-3'>
        <div className='flex sm:flex-1 bg-card border rounded p-2 h-full min-w-52'>

        </div>
        <div className='flex sm:flex-2 bg-card border rounded p-2 h-full min-w-52'>
          
        </div>
        <div className='flex sm:flex-2 bg-card border rounded p-2 h-full min-w-52'>
          
        </div>
      </div>
    </PageDisplay>
  )
}
