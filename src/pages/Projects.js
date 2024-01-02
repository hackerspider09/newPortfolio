import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { project } from '../data'
import Title from '../components/Title'
import { indigo } from '@mui/material/colors'
const Projects = () => {
  return (
    <div className='w-full'>
      <div className='min-h-screen max-container pt-36 '>
        <div>
          <Title title="projects" />
        </div>
        <div className='flex flex-wrap m-9 gap-10 justify-center items-center h-auto'>

        {project.map((data,index)=>(
          
          <ProjectCard key={index} project={data}/>
          
          ))}
          </div>
      </div>
    </div>
  )
}

export default Projects