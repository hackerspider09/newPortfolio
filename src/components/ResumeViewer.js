import React from 'react'
import PrasadKhatake from '../PrasadKhatake.pdf'

const ResumeViewer = () => {
  return (
        <div>

        <iframe src={PrasadKhatake} className='w-full h-[100vh] bg-red-800' />
        </div>

  )
}

export default ResumeViewer