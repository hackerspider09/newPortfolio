import React,{useState,useEffect} from 'react'
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import {portfolio,floatingNotes,bhauLang,clashImages,rcImages,nginxImages} from "../assets/index"


function ProjectCard2(props) {
    // const imgArray = [clash,ncc,portfolio,floatingNotes,bhauLang];
    const imageDict = {
        // 1: [clash],
        1: clashImages,
        2: rcImages,
        3: [portfolio],
        4: [floatingNotes],
        5: [bhauLang],
        6: nginxImages,
      };

      const images = imageDict[props.project.id];
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => setCurrentImage((currentImage + 1) % images.length);
    const handlePrev = () => setCurrentImage((currentImage - 1 + images.length) % images.length);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
      }, [images.length]);
      
      
    return (

        <div className='flex md:w-2/3 w-full flex-col gap-2 border-gray-700 border-2 rounded-xl  p-2 '>
            <div className={`w-full flex justify-start   text-sm  rounded-t-md p-1`}>
                <span className='inline-block  rounded-full mr-1 bg-red-500 cursor-pointer' ><CloseIcon fontSize='small'/></span>
                <span className='inline-block  rounded-full mr-1 bg-yellow-500 cursor-pointer' ><RemoveIcon fontSize='small'/></span>
                <span className='inline-block  rounded-full mr-1 bg-green-500 cursor-pointer' ><AddIcon fontSize='small'/> </span>
            </div>
            <hr className='border-t border-gray-700 '/>
      
        {/* //   // h-[33rem] */}
        <div className={`   flex flex-col w-full `}>
            {/* <div className=''>
        
                <a href="">
                    <img className="rounded-t-xl border-gray-700 border" src={imgArray[props.project.id -1]} alt="project img" />
                </a>
            </div> */}
            {/* <div className="relative w-full h-72 flex items-center justify-center overflow-hidden border border-gray-700 rounded-xl bg-black">
                <img 
                    className="max-h-full max-w-full object-contain transition-all duration-300 ease-in-out" 
                    src={images[currentImage]} 
                    alt="project" 
                />
                {images.length > 1 && (
                    <>
                    <button onClick={handlePrev} className="absolute left-2 text-white bg-black/50 px-2 py-1 rounded-full hover:bg-black/70">‹</button>
                    <button onClick={handleNext} className="absolute right-2 text-white bg-black/50 px-2 py-1 rounded-full hover:bg-black/70">›</button>
                    </>
                )}
                </div> */}


<div className="relative w-full h-80 overflow-hidden border border-gray-700 rounded-xl">
  <div
    className="absolute inset-0 bg-cover bg-center blur-sm opacity-30"
    style={{ backgroundImage: `url(${images[currentImage]})` }}
  />
  <div className="relative w-full h-full flex items-center justify-center bg-black bg-opacity-30">
    <img 
      className="max-h-full max-w-full object-contain transition-all duration-300 ease-in-out z-10" 
      src={images[currentImage]} 
      alt="project" 
    />
    {/* Arrows same as before */}
    {images.length > 1 && (
        <>
        <button onClick={handlePrev} className="absolute left-2 text-fLetter  px-2 py-2 rounded-full hover:bg-black/70 z-10"> <KeyboardDoubleArrowLeftIcon /> </button>
        <button onClick={handleNext} className="absolute right-2 text-fLetter  px-2 py-2 rounded-full hover:bg-black/70 z-10"> <KeyboardDoubleArrowRightIcon /> </button>
        </>
    )}
  </div>
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
        
        
                {props.project.gitlink !=="" ? 
                
                <a href={props.project.gitlink} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none   rounded-full border-2 border-primary hover:bg-fLetter hover:text-mainBg hover:border-mainBg hover:border-2">
                    <CodeIcon />
                </a>
        
                :
                ""
            }
                {props.project.deplink !=="" ? 
                
                <a href={props.project.deplink} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none rounded-full border-2 border-primary hover:bg-fLetter ">
                    <RocketLaunchIcon />
                </a>
        
                :
                ""
            }
                {props.project.articlelink !=="" ? 
                
                <a href={props.project.articlelink} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none rounded-full border-2 border-primary hover:bg-fLetter ">
                    <ArticleIcon />
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