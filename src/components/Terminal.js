import React,{useState,useCallback,useEffect,useRef} from 'react'
import {terminalCommands,banner} from "../data/index"
import parse from 'html-react-parser';
import { useLocation ,useNavigate} from 'react-router-dom';
import TerminalPrompt from './TerminalPrompt';
import DefaultPrompt from './DefaultPrompt';
import ResizableWindow from './ResizableWindow';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TerminalForm from './TerminalForm';

const Terminal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isWindowOpen, setIsWindowOpen] = useState(false); // State to track if the window is open

    const handleOpenWindow = () => {
        setIsWindowOpen(true); // Set the state to open the window
    };

    const handleCloseWindow = () => {
        setIsWindowOpen(false); // Set the state to close the window
    };

    // let currentPath = location.pathname;
    // let currentPath = "/";
    const [currentPath,setCurrentPath] =useState("/")

    const [inputC,setInputC] = useState("")
    const [prompt,setPrompt] = useState("")
    const [outputC,setOutputC] = useState("")
    const [commandHistory,setcommandHistory] = useState([])
    const [commandHistoryIndex,setcommandHistoryIndex] = useState(-1)
    const defPrompt = <p className='text-red-800 mr-1 inline-block '>prasad-dev@portfolio <span className='text-primary'>:</span><span>~</span>{currentPath!=='/' ? "/"+currentPath :""} <span className='text-primary'>$</span></p>
    
    const inputRef = useRef();
    const terminalRef = useRef();

    const [promptHistory, setPromptHistory] = useState([]);
    const [isMaximize, setIsMaximize] = useState(false);
    const [isMinimize, setIsMinimize] = useState(false);
    const [displayTerminalPrompt, setDisplayTerminalPrompt] = useState(true); // disable input prompt when email has to send
    const [disableEmailForm, setDisableEmailForm] = useState(true); 




    useEffect(()=>{
        
        if (location.hash === '#terminal') {
            // Run justTerminal(true) if the URL contains '#terminal'
            justTerminal(true);
        }
        
    },[location])
    

    const justTerminal =(flag)=>{
        if (flag){
            document.body.style.overflow = 'hidden';
        }else{

            document.body.style.overflow = 'auto';
        }
        inputRef.current.focus();
    }
    const handleClose = () => {
        // Re-enable overflow when the popup is closed
        justTerminal(false);
        inputRef.current.blur();
    };


    const scrollToTerminal = () => {
        document.querySelector(`#terminal`).scrollIntoView()
    };
    
    

    useEffect(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, [promptHistory]);


      const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (commandHistoryIndex >= 0) {
            setInputC(commandHistory[commandHistoryIndex]);
            
            setcommandHistoryIndex(commandHistoryIndex >0 ? commandHistoryIndex-1 :0)
            console.log("up",commandHistoryIndex)
          }
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (commandHistoryIndex < commandHistory.length-1) {
            //   setcommandHistoryIndex(commandHistoryIndex<commandHistory.length-1 ? commandHistoryIndex + 1 :commandHistoryIndex);
            setcommandHistoryIndex  (commandHistoryIndex + 1)
            // console.log("index",commandHistoryIndex)
              setInputC(commandHistory[commandHistoryIndex + 1])
              console.log("down",commandHistoryIndex)
          }else{
            setInputC("")
          }
        }
      };

      

    const handleEnter = (data)=>{
        let newOutput = null;
        const command = data.trim().split(' ');
        const commandWithoutBlankItems = command.filter(item => item.trim() !== '');

        if (commandWithoutBlankItems[0] === "pwd"){
            newOutput = currentPath;
        }
        else if(commandWithoutBlankItems[0] === "sudo"){
            if(commandWithoutBlankItems.length >1){
                const fullCommand = commandWithoutBlankItems.join(" ");
                console.log(fullCommand)
                if (fullCommand==="sudo rm -rf /*"){
                    navigate('/hacker',{replace: true})
                }
            }
            newOutput = terminalCommands["sudo"];
        }
        else if(commandWithoutBlankItems[0] === "help"){
            newOutput = terminalCommands["help"];
        }
        else if(commandWithoutBlankItems[0] === "cd"){
            const dictArray = ['Resume','About','Project']
            if(commandWithoutBlankItems.length<2 || commandWithoutBlankItems[1]==='..'){
                console.log("less tahn teo")
                setCurrentPath("/")
                // navigate('/')
            }else{
                // navigate("/"+commandWithoutBlankItems[1])
                if (dictArray.includes(commandWithoutBlankItems[1])){
                    setCurrentPath(commandWithoutBlankItems[1])
                }
            }
            newOutput = "";
        }
        else if(commandWithoutBlankItems[0] === "clear"){
            newOutput = "";
            setPromptHistory([])
        }
        else if(commandWithoutBlankItems[0] === "ls"){
       
            const dictArray = ['About','Project','Resume']
            if(commandWithoutBlankItems.length<=3){
                // if(currentPath === '/'){
                    if(commandWithoutBlankItems[1]==="-a"){
                        if(commandWithoutBlankItems.length>2){
                            if (dictArray.includes(commandWithoutBlankItems[2])){
                                newOutput = terminalCommands['all'] + terminalCommands[commandWithoutBlankItems[2]]
                            }else{
                                newOutput = newOutput = `${commandWithoutBlankItems[2]}: No such file or directory`;
                            }
                        }else{
                            newOutput = currentPath==="/" ? terminalCommands["-a"] : terminalCommands["all"]   
                            newOutput += terminalCommands[currentPath]
                        }
                    }else  {
                        if (commandWithoutBlankItems.length<2){

                            newOutput = terminalCommands[currentPath];
                        }else{
                            newOutput = terminalCommands[commandWithoutBlankItems[1]]
                        }
                    }
                // }else{
                //     newOutput = "";
                // }
            }else {
                newOutput = "Command not recognized";
                
            }
        }
        else if(commandWithoutBlankItems[0] === "cat"){
            if(commandWithoutBlankItems.length<=2){
                if(currentPath === '/'){
                    
                    if(commandWithoutBlankItems[1]===".secret"){
                        newOutput = terminalCommands[commandWithoutBlankItems[1]] 
                    }else{
                        newOutput = `${commandWithoutBlankItems[1]}: No such file or directory`;
                    }
                }else{
                    if(terminalCommands[commandWithoutBlankItems[1]] !== undefined){
                        newOutput = terminalCommands[commandWithoutBlankItems[1]] 
                    }
                    else{
                        newOutput = `${commandWithoutBlankItems[1]}: No such file or directory`;
                    }
                }
            }else {
                newOutput = `${commandWithoutBlankItems[1]}: No such file or directory
                `;
                
            }
        }
        else if(commandWithoutBlankItems[0] === "xdg-open"){
            if(commandWithoutBlankItems.length<2){
                newOutput = "Command not recognized";
            }else if(commandWithoutBlankItems[1]==="resume.pdf"){
                newOutput="";
                navigate('/resume')
                window.location.reload();
            }else{
                newOutput = "File does not exists";
                
            }
        }
        else if(commandWithoutBlankItems[0] === "whoami"){
            newOutput = "Prasad Khatake";
        }
        else if(commandWithoutBlankItems[0] === "date"){
            const d = new Date();
            newOutput = d;
        }
        else if(commandWithoutBlankItems[0] === "github"){
            window.open('https://github.com/hackerspider09/', '_blank', 'noreferrer');
            newOutput = "";
        }
        else if(commandWithoutBlankItems[0] === "linkedin"){
            window.open('https://www.linkedin.com/in/prasad-khatake', '_blank', 'noreferrer');
            newOutput = "";
        }
        else if(commandWithoutBlankItems[0] === "infofetch"){
              newOutput= terminalCommands["infofetch"];
        }
        else if(commandWithoutBlankItems[0] === "date"){
            const d = new Date();
            newOutput = d;
        }
        else if(commandWithoutBlankItems[0] === "email"){
            newOutput = ""
            setDisplayTerminalPrompt(false);
            setDisableEmailForm(false);
        }
        else{
            newOutput = "Command not recognized";
        }

        
                
        // const newPrompt = <p><span className='text-red-800 mr-1'>{defPrompt}</span> <span className='text-fLetter'>{data}</span></p>;
        // console.log("crnt path in ",currentPath)
        const newPrompt = <span className='text-red-800 mr-1'><DefaultPrompt currentPath={currentPath} data={data}/> </span>;

        const newPrompt2 = {
            command: newPrompt,
            output: newOutput,
          };

        setPromptHistory((prevHistory) => [...prevHistory, newPrompt2]);

        
    }

  return (
    <div className='w-full h-screen z-0' id='terminal'>
        
        <div className={`${isMaximize ? 'w-full px-5' : 'max-container'}  h-full flex justify-center items-center flex-col `} >
        
        <div className={` ${isMaximize ? 'w-full' : 'w-[80%]'} flex justify-start border-2 relative -bottom-6 text-sm bg-terminalBg rounded-t-md p-1`}>
  <span className='inline-block  rounded-full mr-1 bg-red-500' onClick={handleClose}><CloseIcon fontSize='small'/></span>
  <span className='inline-block  rounded-full mr-1 bg-yellow-500' onClick={()=>{setIsMaximize(false)}}><RemoveIcon fontSize='small'/></span>
  <span className='inline-block  rounded-full mr-1 bg-green-500' onClick={()=>{setIsMaximize(true)}}><AddIcon fontSize='small'/> </span>
</div>


            <div className={` ${isMaximize ? 'w-full xl:h-[90%] h-[80%]' : 'w-[80%] h-[40vh]'} border-2 bg-terminalBg rounded-b-md m-7  overflow-auto py-1 px-3`} ref={terminalRef} onClick={()=>{inputRef.current.focus();scrollToTerminal();justTerminal(true); }}>


                    <div className=''>
                        <div className='text-center m-1 xl:text-md terminalSmallText'>
                            <pre className='text-fLetter '>{banner}</pre>
                        </div>
                        <p className='text-primary'>Type 'help' to see the list of available commands.</p>
                        
                
                    { promptHistory.map((prompti, index) => (
                            <div key={index} className='flex flex-col'>
                                <div>
                                {prompti.command}
                                </div>
                                <div className='text-primary  -mt-5'>{parse(`${prompti.output}` )} </div>
                    </div>
                         ))}

                    </div>

                    <div>

                    {/* <label>
                        {defPrompt}
                    </label> */}

                    {/* <input ref={inputRef} autoComplete="off" type='text' name='ipCommand'  value={inputC}
                    className='border-none outline-none m-0 p-0 bg-transparent text-fLetter '
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

                    /> */}


                    {
                        displayTerminalPrompt ?

                    <TerminalPrompt 
                    inputRef={inputRef}
                    inputC={inputC}
                    setInputC={setInputC}
                    handleEnter={handleEnter}
                    handleKeyDown={handleKeyDown}
                    commandHistory={commandHistory}
                    setcommandHistory={setcommandHistory}
                    commandHistoryIndex={commandHistoryIndex}
                    setcommandHistoryIndex={setcommandHistoryIndex}
                    currentPath={currentPath}
                    />
                        :
                        !disableEmailForm &&
                    <TerminalForm setDisplayTerminalPrompt={setDisplayTerminalPrompt} setDisableEmailForm={setDisableEmailForm} terminalRef={terminalRef} />
                    }








                </div>
            </div>
         </div>    
    </div>
  )
}

export default Terminal