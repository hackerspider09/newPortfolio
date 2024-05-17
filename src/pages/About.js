import React from 'react'
import Contact from '../components/Contact'

import Testimonial from './Testimonial'
import Skills from "./Skills"
import Title from '../components/Title'

import HorizontalLine from '../components/HorizontalLine'

const About = () => {
  return (
    <div className='w-full ' id='skills'>
        <div className='min-h-screen pt-32'>
            <div className='m-6'>
            <Title title="Skills" />
        {/* <h1 className="title-font text-center mb-4 text-2xl font-medium text-fLetter sm:text-3xl font-airstrike">Skills</h1> */}
        <Skills />
            </div>
            <HorizontalLine />
            <div className='m-6' id='testimonial'>
            <Title title="Testimonial" />
        {/* <h1 className="title-font text-center mb-4 text-2xl font-medium text-fLetter sm:text-3xl font-airstrike">Testimonial</h1> */}
        <Testimonial />
            </div>
            <HorizontalLine />
            <div className='m-6' id='contact'>

                <Contact />
            </div>
        </div>
    </div>
  )
}

export default About