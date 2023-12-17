import React from 'react'
import TestimonialCard from '../components/TestimonialCard'
import { testimonial } from '../data'
import {Carousel} from '3d-react-carousal';

const Testimonial = () => {
    const testimonialCards = testimonial.map((data, index) => (
        <TestimonialCard key={index} message={data.message} by={data.by} post={data.post} />
      ));
  return (
    <div className='w-full'>
        <div className='max-container py-8 flex justify-center items-center'>
            <div className='w-full '>
                <Carousel slides={testimonialCards} autoplay={true} interval={5000} />
            </div>
      </div>

    </div>
  )
}

export default Testimonial