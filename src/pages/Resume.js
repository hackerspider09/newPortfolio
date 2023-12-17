import React from 'react'
import PrasadKhatakePDF from "../PrasadKhatake.pdf"
const Resume = () => {
  return (
    <div className='w-full min-h-screen'>
        <div className='max-container pt-36'>
        <iframe  src={PrasadKhatakePDF} className='w-full h-[100vh]'  />
        </div>
    </div>
  )
}

export default Resume;