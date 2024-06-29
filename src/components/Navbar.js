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
    // sticky top-0 padding-x py-8 z-10 w-full bg-mainBg bg-opacity-80 backdrop-blur-sm
    <div className='padding-x py-8 fixed  top-0 z-10 w-full  '>

            <nav className='flex justify-between  items-center max-container backdrop-blur-sm rounded-full px-1 '>
                <div className="flex  text-fLetter xl:text-4xl text-3xl  ">
                    <span className=' font-bold'>&lt;</span><span className='transform transition-transform duration-300 ease-in-out hover:scale-110 '><a href="/" className=' font-agustina font-bold mx-2   '>Prasad</a></span>
                    <span className=' font-bold'>/&gt;</span>
                </div>

                <div className='flex justify-end w-full'>


                    <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden '>
                        {navLinks.map((item)=>(
                            <li key={item.label} className={`${crntPage==item.dir ? "text-fLetter" : "text-primary"}  font-palanquin leading-normal text-lg  hover:text-fLetter `}>
                                <Link to={item.href}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <a href='/#terminal'>

                        <li className='text-fLetter'><TerminalIcon fontSize="large"  /></li>
                        </a>
                    </ul>

                </div>

                <div>
                    {/* <img src={hamburger} alt="Hamburger" 
                    width={30} height={30} className='hidden max-lg:block color-white'/> */}
                    <span className='hidden max-lg:block ' onClick={()=>{setHamClicked(!hamClicked)}}><MenuOutlinedIcon sx={{ color: "#1fda25" }} fontSize="large"/></span>
                </div>

                <div className={`${hamClicked ? "block" : "hidden" } xl:hidden w-full   absolute z-50 top-20 right-0`} id="navbar-default" 
                
                onClick={()=>{setHamClicked(false)}}
                >
                    <ul className="font-medium flex flex-col p-4 mt-4 border bg-mainBg rounded-lg   rtl:space-x-reverse  backdrop-blur-sm border-gray-700">

                        {navLinks.map((item)=>(
                        <li key={item.label} className={`block py-2 px-3 font-palanquin ${crntPage==item.dir ? "text-fLetter" : "text-primary"}    rounded `} aria-current="page">
                            <Link to={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                        <a href='/#terminal'>

                        <li className="block py-2 px-3  text-fLetter rounded hover:bg-gray-100   dark:hover:bg-gray-700 dark:hover:text-white "><TerminalIcon fontSize="large"  /></li>
                        </a>
                    </ul>
                    </div>
            </nav>
    </div>
  )
}

export default Navbar