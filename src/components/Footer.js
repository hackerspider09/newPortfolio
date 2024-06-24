import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-container  p-5 h-32 text-primary flex justify-center items-center sm:flex-row flex-col  '>
            <span className='inline-block mx-2'>Developed by Prasad Khatake </span>  <span className='text-fLetter inline-block mx-2' ><CopyrightIcon /> 2023</span>   <span className='inline-block mx-2'>  Made with ❤️</span>
        </div>
    </div>
  )
}

export default Footer