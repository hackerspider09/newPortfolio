import React from 'react'
import SkillCard from '../components/SkillCard'
import { SkillData } from '../data'
import Draggable from 'react-draggable';

const Skills = () => {
  return (
    <div className='w-full'>
        <div className='max-container flex  xl:justify-center'>

        <div className=' relative draggable-area flex max-xl:justify-around justify-between gap-9 flex-wrap p-5  xl:gap-24 xl:p-[9rem] '>

         {SkillData.map((data, index) => (
              <Draggable key={index} handle=".handle" bounds=".draggable-area">

                {/* <SkillCard key={index} iclass={data.iclass} /> */}
                <div className="handle cursor-move"> 
                  <SkillCard iclass={data.iclass} />
                </div>
              </Draggable>
            ))}

            </div>
        </div>
    </div>
  )
}

export default Skills