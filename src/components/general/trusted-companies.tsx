'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay";
import companies from "../../utils/data.json"
import Image from 'next/image';



const TrustedCompanies = () => {
  return (
    <div className=' py-18'>
          <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <Image
                width={150}
                height={150}
                src={path}
                alt={name}
                className="h-9 sm:h-14 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
    </div>
  )
}

export default TrustedCompanies
