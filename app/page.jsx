import Navbar from '@/components/common/Navbar'
import Hero from '@/components/landingpage/Hero'
import AboutUs from '@/components/landingpage/AboutUs'
import Services from '@/components/landingpage/Services'
import React from 'react'
import Gallery from '@/components/landingpage/Gallery'
import TestimonialSection from '@/components/landingpage/TestimonialSection'
import Contact from '@/components/landingpage/Contact'
import Footer from '@/components/common/Footer'

const page = () => {
  return (
    <div style={{width:'99vw',overflow:'hidden'}}>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <div className='divider'></div>
      <Gallery />
      <TestimonialSection />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
