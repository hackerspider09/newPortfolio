import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {clash,ncc,portfolio} from "../assets/index"

const ProjectCard = (props) => {

    const imgArray = [clash,ncc,portfolio];
  return (
    

<div className="max-w-sm h-[33rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-300 hover:shadow-lg hover:scale-105">
    <div className='h-48'>

        <a href="">
            <img className="rounded-t-lg" src={imgArray[props.project.id -1]} alt="project img" />
        </a>
    </div>
    <div className="p-5 flex h-[21rem] flex-col gap-3 justify-evenly">
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

  )
}

export default ProjectCard