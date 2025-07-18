import { PageDisplay } from '@/components/layout/PageDisplay'
import { Sun } from 'lucide-react'
import React from 'react'

export const Home = () => {
  return (
    <PageDisplay>
      <div className='flex justify-between bg-card border rounded w-full h-52 p-5'>
        <div className='flex flex-col justify-center gap-2'>
          <span className='text-2xl'>Barranquilla</span>
          <span className='text-7xl'>38</span>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <Sun size={90} />
          <span className='text-2xl'>Sunny</span>
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
