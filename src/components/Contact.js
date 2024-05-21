import React,{useState} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {axiosNoAuthInstance} from "../API/AxiosIn"
import {  toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // console.log(formData)
    const id = toast.loading("Please wait ...");  

    if (!formData.name || !formData.email || !formData.message) {
      toast.update(id, { render: "All fields are required" , type: "error", isLoading: false, autoClose:3000 })
      return; 
    }
    
    try {
      await axiosNoAuthInstance.post('/send-email/', formData);
      // console.log('Email sent successfully!');
      toast.update(id, { render: "Email sent successfully!", type: "success", isLoading: false, autoClose:3000 })
   
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.clear();
      // console.error('Error sending email:', error);
      toast.update(id, { render: "Oops! Something went wrong" , type: "error", isLoading: false, autoClose:3000 })
    }
  };

  return (
    <div className='w-full'>
        <div className='max-container'>

          <div>
              <h1 className="title-font text-center mb-10 text-2xl font-medium text-fLetter sm:text-3xl font-airstrike ">Connect with me</h1>

          </div>

          <div className='flex gap-5 xl:px-20 px-4 max-xl:flex-col mt-5'>

          

            <div className='text-primary xl:w-[50%] mb-5 px-2 flex flex-col gap-3 leading-9 font-palanquin '>
                        {/* <h2 className='text-2xl'>Connect with me</h2> */}
                        <h3 className='xl:text-xl text-sm'> <span className='text-fLetter '><LocationOnIcon/></span> Planet Earth</h3>
                        <h3 className='xl:text-xl text-sm'> <span className='text-fLetter'><MailOutlineIcon /></span> prasadkhatake20@gmail.com</h3>
                        <div className=' flex gap-3 '>
                          <span className='text-fLetter hover:shadow-indigo-300 hover:shadow-lg rounded-full'>
                            <a href='https://github.com/hackerspider09'>
                            <GitHubIcon/> 
                            </a>
                            </span> 
                          <span className='text-fLetter hover:shadow-indigo-300 hover:shadow-lg rounded-full'>
                            <a href='https://www.linkedin.com/in/prasad-khatake'>
                            <LinkedInIcon />

                            </a>
                            </span>
                        </div>
            </div>

            <div className="xl:w-[50%] flex flex-wrap">
            
              {/* <!-- form --> */}
              
              <div className="w-full xl:w-1/2 p-2">
                <div className="relative">
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name"  />
                  <label htmlFor="name"  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
                </div>
              </div>
              <div className="w-full xl:w-1/2 p-2">
                <div className="relative">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email"   />
                  <label htmlFor="email"  className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
                </div>
              </div>
              <div className="xl:mt-4 w-full p-2">
                <div className="relative">
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"  ></textarea>
                  <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none disabled:bg-indigo-900"  onClick={handleSubmit}>Send</button>
              </div>

            </div>
        

          </div>

        </div>
        
    </div>
  )
}

export default Contact