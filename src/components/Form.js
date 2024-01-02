import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Form = () => {
  return (
    <section className="text-gray-400">

  <div className="container mx-auto h-[80vh] flex flex-col px-5 justify-center items-center">
    
    <div className="mb-12 flex w-full flex-col text-center">
      <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact me</h1>
    </div>

    <div className="flex xl:flex-row flex-col md:gap-10 ">

    <div className='text-white xl:w-[50%] mb-5 flex flex-col xl: justify-center '>
                    <h2 className='text-2xl'>Connect with me</h2>
                    <h3> <span className='text-fLetter'><LocationOnIcon/></span> Planet Earth</h3>
                    <h3> <span className='text-fLetter'><MailOutlineIcon /></span> Email.com</h3>
    </div>

      <div className="xl:w-[50%] flex flex-wrap">
      {/* <small className='text-red'>Form is not working</small> */}
        {/* <!-- form --> */}
        <div className="w-1/2 p-2">
          <div className="relative">
            <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
            <label for="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="relative">
            <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
            <label for="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
          </div>
        </div>
        <div className="mt-4 w-full p-2">
          <div className="relative">
            <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
            <label for="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
          </div>
        </div>
        <div className="w-full p-2">
          <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Button</button>
        </div>


        

      </div>
    </div>

  </div>
  
</section>
  )
}

export default Form