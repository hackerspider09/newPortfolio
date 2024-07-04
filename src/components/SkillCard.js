import React from 'react'

const SkillCard = (props) => {
  return (
    <div className=" hover:shadow-indigo-300 hover:scale-110  hover:shadow-lg  rounded-lg border bg-mycard ">
                <div className="p-6">

                        <p className="text-4xl ">
                        <i className={props.iclass}></i>
                        </p>

                </div>
                <div className="bg-sky-500 p-0.5 rounded-b-lg"></div>
            </div>
  )
}

export default SkillCard