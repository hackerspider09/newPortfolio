import React from 'react'
import SkillCard from '../components/SkillCard'
import { SkillData } from '../data'


const Skills = () => {
  return (
    <div className='w-full'>
        <div className='max-container  flex  xl:justify-center'>

        <div className='xl:w-[70%] flex max-xl:justify-around gap-9 flex-wrap p-5  xl:gap-24 xl:p-[9rem]'>

         {SkillData.map((data, index) => (
             <SkillCard key={index} iclass={data.iclass} />
             ))}

            </div>
        </div>
    </div>
  )
}

export default Skills