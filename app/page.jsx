import Navbar from '@/components/common/Navbar'
import Hero from '@/components/landingpage/Hero'
import AboutUs from '@/components/landingpage/AboutUs'
import Services from '@/components/landingpage/Services'
import React from 'react'
import Gallery from '@/components/landingpage/Gallery'
import TestimonialSection from '@/components/landingpage/TestimonialSection'
import Contact from '@/components/landingpage/Contact'
import Footer from '@/components/common/Footer'

import decor1 from '@/public/assets/decors/decor.webp'
import decor2 from '@/public/assets/decors/leaf3.webp'
import decor3 from '@/public/assets/decors/leaf2.webp'
import decor4 from '@/public/assets/decors/leaf1.webp'
import Image from 'next/image'

const page = () => {
  return (
    <div className='mainPage' style={{width:'99vw',overflow:'hidden'}}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <div className='divider'></div>
      <Gallery />
      <TestimonialSection />
      <Contact />
      <Footer />
      
      
      <Image src={decor1} alt='decor1 ' className='decor1 decor' />
      <Image src={decor2} alt='decor1' className='decor2 decor' />
    </div>
  )
}

export default page
