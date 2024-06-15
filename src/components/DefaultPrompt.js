import React ,{useEffect, useState} from 'react'

function DefaultPrompt({currentPath,data=null}) {
    const [curntPath, setcurntPath] = useState(currentPath)
    useEffect (()=>{
        setcurntPath(currentPath)

    },[currentPath])
  return (
    <>
      <div className=" text-blue-600"><span className='text-green-500'>┌──(</span>prasad-dev@portfolio<span className='text-green-500' >)-[<span className='text-white'>~</span><span className='text-white'>{curntPath!=='/' ? "/"+curntPath :""}</span>]</span></div>
      {/* <br /> */}
      <div className=" text-green-500 -mt-[5px] "><span>└─$ </span> {data && <span className='text-white'>{data}</span> }</div>
      </>
  )
}

export default DefaultPrompt