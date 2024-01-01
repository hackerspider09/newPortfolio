import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import {clash,ncc} from "../assets/index"

const ProjectCard = (props) => {

    const imgArray = [clash,ncc];
  return (
    

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-indigo-300 hover:shadow-lg hover:scale-105">
    <a href="">
        <img class="rounded-t-lg" src={imgArray[props.project.id -1]} alt="project img" />
    </a>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-fLetter">{props.project.title}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.project.desc}</p>

        <div className='text-gray-700 flex flex-wrap gap-2 m-3'>
            {
                props.project.techstack.map((stack,index)=>(

                    <span className=' px-2 py-1 bg-gray-700 rounded-2xl text-fLetter cursor-pointer '>{stack}</span>
                ))
            }
        </div>


        <div className='flex justify-center gap-3'>


        {props.project.gitlink !="" ? 
        
        <a href={props.project.gitlink} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none   rounded-full border-2 border-primary hover:bg-fLetter hover:text-mainBg hover:border-mainBg hover:border-2">
            <CodeIcon />
        </a>

        :
        ""
    }
        {props.project.deplink !="" ? 
        
        <a href={props.project.deplink} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none rounded-full border-2 border-primary hover:bg-fLetter ">
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