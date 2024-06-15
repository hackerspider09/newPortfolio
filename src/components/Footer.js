import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='max-container  p-5 h-32 text-primary flex justify-center items-center'>
            <h2>Developed by Prasad Khatake <span className=''>|</span> <span className='text-fLetter' ><CopyrightIcon /></span> 2023 <span className=''>|</span> Made with ❤️</h2>
        </div>
    </div>
  )
}

export default Footer