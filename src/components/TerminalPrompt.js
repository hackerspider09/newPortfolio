import React from 'react';

const TerminalPrompt = ({
    inputRef,
    inputC,
    setInputC,
    handleEnter,
    handleKeyDown,
    commandHistory,
    setcommandHistory,
    commandHistoryIndex,
    setcommandHistoryIndex,
    currentPath
  }) => {
  return (
    <>
      <div className=" text-blue-600"><span className='text-green-500'>┌──(</span>prasad@DevMachine<span className='text-green-500' >)-[<span className='text-white'>~{currentPath!=='/' ? "/"+currentPath :""}</span>]</span></div>
      {/* <br /> */}
      <div className=" text-green-500 -mt-[5px]"><span>└─$ </span> <input ref={inputRef} autoComplete="off" type='text' name='ipCommand'  value={inputC}
                    className='border-none w-4/5 outline-none m-0 p-0 bg-transparent text-fLetter '
                    onChange={(e)=>{
                        setInputC(e.target.value);
                    }}
                    onKeyDown={(e)=>{
                        if(e.key==="Enter"){
                            {handleEnter(inputC)}
                            setcommandHistory([...commandHistory,inputC])
                            setcommandHistoryIndex(commandHistoryIndex+1)
                            setInputC("")
                        }
                        if(e.key==='ArrowUp'){
                            handleKeyDown(e)
                        }
                        if(e.key==='ArrowDown'){
                            handleKeyDown(e)
                        }
                    }}

                    /></div>
    </>
  );
};

export default TerminalPrompt;
