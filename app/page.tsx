import Hero from '@/components/home/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const HomeRoot = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default HomeRoot