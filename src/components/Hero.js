import React from 'react'
import Typing from "./TypingAnimation";
import Button from "./Button"
import {logo} from "../assets/index"
import MatrixRainingCode from './MatrixRainingCode';


const Hero = () => {
  return (
    <div className='min-h-screen w-full '>
        <div className='max-container min-h-screen flex xl:flex-row flex-col-reverse  justify-center items-center  xl:gap-4'>
       
          {/* <div className='w-full'>

              <MatrixRainingCode className="absolute inset-0" /> 
           </div> */}
            <div className='text-white p-20'>
                <h2 className='flex gap-1  xl:text-[3rem] text-[1.5rem] max-xl:block font-serif'>Hi there My name is <span className="text-fLetter inline-block"><Typing/> </span></h2>
                <p className='xl:text-2xl text-[0.9rem] text-primary font-serif'>
                I am currently pursuing a bachelor's Degree in Electronics and Telecommunication, from the Pune Institute of Computer Technology. I love to share my knowledge and experience with others.
                </p>
              
                <br />
                <div className='flex xl:justify-start justify-center'>
                <Button label="View Resume" href="/resume" />

                </div>
            </div>

            <div className=' flex justify-center items-center max-xl:pt-[6rem] xl:h-[34rem] xl:w-[62rem]'>
                  <img 
                  src={logo} 
                  // width={250}
                  // height={250}
                  className="xl:w-[100%]  w-[70%] "
                  />

            </div>


        </div>
    </div>
  )
}

export default Hero