import About from '@/components/home/About'
import Hero from '@/components/home/Hero'
import Menu from '@/components/home/Menu'
import ReservationCTA from '@/components/home/ReservationCTA'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const HomeRoot = () => {
  return (
    <div className='min-h-screen bg-background text-foreground'>
        <Navbar/>
        <Hero/>
        <About/>
        <Menu/>
        <ReservationCTA/>
        <Footer/>
    </div>
  )
}

export default HomeRoot