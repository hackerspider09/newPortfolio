import React ,{useState} from 'react'
import { useParams,useLocation ,Link} from 'react-router-dom';
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
            <div className="flex  text-fLetter xl:text-4xl text-3xl  ">
                    <span className=' font-bold'>&lt;</span><span className='hover:scale-110'><a href="/" className=' font-agustina font-bold mx-2   '>Prasad</a></span>
                    <span className=' font-bold'>/&gt;</span>
                </div>

                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item)=>(
                        <li key={item.label} className='font-montserrat leading-normal text-lg text-primary hover:text-fLetter '>
                            <Link to={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <a href='/#terminal'>

                    <li className='text-fLetter'><TerminalIcon fontSize="large"  /></li>
                    </a>
                </ul>


                <div>
                    {/* <img src={hamburger} alt="Hamburger" 
                    width={30} height={30} className='hidden max-lg:block color-white'/> */}
                    <span className='hidden max-lg:block ' onClick={()=>{setHamClicked(!hamClicked)}}><MenuOutlinedIcon sx={{ color: "#05CF93" }} fontSize="large"/></span>
                </div>

                <div className={`${hamClicked ? "block" : "hidden" } xl:hidden w-full   absolute z-50 top-20 right-0`} id="navbar-default" 
                
                onClick={()=>{setHamClicked(false)}}
                >
                    <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50  rtl:space-x-reverse  dark:bg-gray-800  dark:border-gray-700">
                        <li className={`block py-2 px-3 text-white ${checkPage("/") ? "bg-mainBg " : ""} rounded   dark:text-white `} aria-current="page">
                        <Link to="/"  >Home</Link>
                        </li>
                        <li className={`block py-2 px-3 ${checkPage("/about") ? "bg-mainBg " : ""} text-gray-900 rounded hover:bg-gray-100    dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white `}>
                        <Link to="/about" >About Me</Link>
                        </li>
                        <li className={`block py-2 px-3 text-gray-900 ${checkPage("/project") ? "bg-mainBg " : ""} rounded hover:bg-gray-100    dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white `}>
                        <Link to="/project" >Project</Link>
                        </li>
                        <a href='/#terminal'>

                        <li className="block py-2 px-3  text-fLetter rounded hover:bg-gray-100   dark:hover:bg-gray-700 dark:hover:text-white "><TerminalIcon fontSize="large"  /></li>
                        </a>
                    </ul>
                    </div>
            </nav>
    </header>
  )
}

export default Navbar