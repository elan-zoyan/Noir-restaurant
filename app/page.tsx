import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Menu from '@/components/home/Menu'
import ReservationCTA from '@/components/home/ReservationCTA'
import Navbar from '@/components/Navbar'
import React from 'react'

const HomeRoot = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
        <Navbar/>
        <Hero/>
        <About/>
        <Menu/>
        <ReservationCTA/>
    </div>
  )
}

export default HomeRoot