import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import hacker from "../assets/hacker.gif"

const MemePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const disableBack = () => {
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', function () {
          window.history.pushState(null, null, window.location.pathname);
        });
      };
  
      disableBack();
  
      return () => {
        window.removeEventListener('popstate', disableBack);
      };
  }, []);

  return (
    // Your meme or content for the redirected page
    <div className='w-full '>
        <div className='max-container h-[73vh] flex justify-center items-center m-16'>
            <img src={hacker} alt="Hacker..." className='w-auto h-[30rem]'/>

        </div>
    </div>
  );
};

export default MemePage;
