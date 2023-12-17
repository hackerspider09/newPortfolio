import React ,{useState} from 'react'
import { useParams,useLocation } from 'react-router-dom';
import {hamburger} from "../assets/index"
import { navLinks } from '../data/index'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import TerminalIcon from '@mui/icons-material/Terminal';

const Navbar = () => {
    const [hamClicked,setHamClicked]=  useState(false);

    const location = useLocation();
    const crntPage = location.pathname;
    const checkPage =(btn)=>{
        if (btn === crntPage){
            return true;
        }return false;
    }
  return (
    <header className='padding-x py-8 absolute z-10 w-full  '>

            <nav className='flex justify-between items-center max-container '>
            <div className="flex  text-fLetter xl:text-4xl text-3xl">
                    <span className=' font-bold'>&lt;</span><span><a href="/" className='font-agustina font-bold mx-2'>Prasad</a></span>
                    <span className=' font-bold'>/&gt;</span>
                </div>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item)=>(
                        <li key={item.label} >
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-primary hover:text-fLetter '>
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <a href='/#terminal'>

                    <li className='text-fLetter'><TerminalIcon fontSize="large"  /></li>
                    </a>
                </ul>


                <div>
                    {/* <img src={hamburger} alt="Hamburger" 
                    width={30} height={30} className='hidden max-lg:block color-white'/> */}
                    <span className='hidden max-lg:block ' onClick={(e)=>{setHamClicked(!hamClicked)}}><MenuOutlinedIcon sx={{ color: "#05CF93" }} fontSize="large"/></span>
                </div>

                <div className={`${hamClicked ? "block" : "hidden" } xl:hidden w-full  md:w-auto absolute z-50 top-20 right-0`} id="navbar-default" 
                
                onClick={()=>{setHamClicked(false)}}
                >
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="/" class={`block py-2 px-3 text-white ${checkPage("/") ? "bg-mainBg " : ""} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`} aria-current="page">Home</a>
                        </li>
                        <li>
                        <a href="/about" class={`block py-2 px-3 ${checkPage("/about") ? "bg-mainBg " : ""} text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>About Me</a>
                        </li>
                        <li>
                        <a href="/project" class={`block py-2 px-3 text-gray-900 ${checkPage("/project") ? "bg-mainBg " : ""} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Project</a>
                        </li>
                        <a href='/#terminal'>

                        <li className="block py-2 px-3  text-fLetter rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><TerminalIcon fontSize="large"  /></li>
                        </a>
                    </ul>
                    </div>
            </nav>
    </header>
  )
}

export default Navbar