import FeaturedSection from '@/components/general/featured-section'
import TestimonialsSection from '@/components/general/feedback'
import Footer from '@/components/general/footer'
import Hero from '@/components/general/hero-section'
import HeroVideoDialogDemoRightWithParallax from '@/components/general/hero-video'
import ShowcaseAI from '@/components/general/showcase-ai'
import TestimonialsSectionFeedback from '@/components/general/testmonial-section'
import TopModelsSection from '@/components/general/top-model'
import TrustedCompanies from '@/components/general/trusted-companies'
import HowItWorks from '@/components/general/working'
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <Hero/>
      <FeaturedSection/>
      <TrustedCompanies/>
      <HeroVideoDialogDemoRightWithParallax/>
      <TopModelsSection/>
      <TestimonialsSection/>
      <TestimonialsSectionFeedback/>
      <Footer/>
      
      {/* <HowItWorks/> */}
      {/* <ShowcaseAI/> */}
      {/* <TestimonialsSection/> */}
  
     
    </div>
  )
}

export default HomePage
