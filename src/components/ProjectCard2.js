import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import {clash,ncc,portfolio,floatingNotes,bhauLang} from "../assets/index"


function ProjectCard2(props) {
    const imgArray = [clash,ncc,portfolio,floatingNotes,bhauLang];
    return (

        <div className='flex flex-col gap-2 border-gray-700 border-2 rounded-xl  p-2  '>
            <div className={`w-full flex justify-start   text-sm  rounded-t-md p-1`}>
                <span className='inline-block  rounded-full mr-1 bg-red-500 cursor-pointer' ><CloseIcon fontSize='small'/></span>
                <span className='inline-block  rounded-full mr-1 bg-yellow-500 cursor-pointer' ><RemoveIcon fontSize='small'/></span>
                <span className='inline-block  rounded-full mr-1 bg-green-500 cursor-pointer' ><AddIcon fontSize='small'/> </span>
            </div>
            <hr className='border-t border-gray-700 '/>
      
        {/* //   // h-[33rem] */}
        <div className={` max-w-3xl  flex flex-col    `}>
            <div className=''>
        
                <a href="">
                    <img className="rounded-t-xl border-gray-700 border" src={imgArray[props.project.id -1]} alt="project img" />
                </a>
            </div>
            {/* h-[21rem] */}
            <div className="p-5 flex rounded-b-xl flex-col gap-3 justify-evenly bg-mainBg">
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-fLetter">{props.project.title}</h5>
                <p className=" font-normal text-gray-700 dark:text-gray-400">{props.project.desc}</p>
        
                <div className='text-gray-700 flex flex-wrap gap-2 '>
                    {
                        props.project.techstack.map((stack,index)=>(
        
                            <span key={index} className=' px-2 py-1 bg-gray-700 rounded-2xl text-fLetter cursor-pointer '>{stack}</span>
                        ))
                    }
                </div>
        
        
                <div className='flex justify-center gap-3'>
        
        
                {props.project.gitlink !="" ? 
                
                <a href={props.project.gitlink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none   rounded-full border-2 border-primary hover:bg-fLetter hover:text-mainBg hover:border-mainBg hover:border-2">
                    <CodeIcon />
                </a>
        
                :
                ""
            }
                {props.project.deplink !="" ? 
                
                <a href={props.project.deplink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none rounded-full border-2 border-primary hover:bg-fLetter ">
                    <RocketLaunchIcon />
                </a>
        
                :
                ""
            }
                </div>
            </div>
        </div>
  
    </div>
    )
}

export default ProjectCard2