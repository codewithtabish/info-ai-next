// 'use client'
import FeaturedSection from '@/components/general/featured-section'
import TestimonialsSection from '@/components/general/feedback'
import Footer from '@/components/general/footer'
import Hero from '@/components/general/hero-section'
import HeroVideoDialogDemoRightWithParallax from '@/components/general/hero-video'
import HowToUse from '@/components/general/steps'
import TestimonialsSectionFeedback from '@/components/general/testmonial-section'
import TopModelsSection from '@/components/general/top-model'
import TrustedCompanies from '@/components/general/trusted-companies'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <Hero/>
      <FeaturedSection/>
      <TrustedCompanies/>
      <HeroVideoDialogDemoRightWithParallax/>
      <TopModelsSection/>
      <HowToUse/>
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
