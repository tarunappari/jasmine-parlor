import Navbar from '@/components/common/Navbar'
import About from '@/components/landingpage/About'
import Hero from '@/components/landingpage/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default page
