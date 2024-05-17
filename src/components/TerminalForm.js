import React, { useState, useRef, useEffect } from 'react';
import {axiosNoAuthInstance} from "../API/AxiosIn"
import { emailBanner } from '../data';

const TerminalForm = ({setDisplayTerminalPrompt,setDisableEmailForm,terminalRef}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messageDisplay, setMessageDisplay] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (currentStep === 0 && emailRef.current) {
      emailRef.current.focus();
    } else if (currentStep === 1 && nameRef.current) {
      nameRef.current.focus();
    } else if (currentStep === 2 && messageRef.current) {
      messageRef.current.focus();
    }
  }, [currentStep]);

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     e.preventDefault();
  //     if (currentStep === 0 && formData.email) {
  //       setCurrentStep(1);
  //       nameRef.current.focus();
  //     } else if (currentStep === 1 && formData.name) {
  //       setCurrentStep(2);
  //       messageRef.current.focus();
  //     } else if (currentStep === 2 && formData.message) {
  //       // Submit form data or handle final step
  //       console.log('Form data:', formData);
  //     }
  //   }
  // };
  const handleKeyPress = async(e) => {
    // if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    // }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentStep === 0 && formData.email) {
        setCurrentStep(1);
      } else if (currentStep === 1 && formData.name) {
        setCurrentStep(2);
      } else if (currentStep === 2 && formData.message) {
        // Submit form data or handle final step
        // console.log('Form data:', formData);

        messageRef.current.blur();

        setMessageDisplay("Please wait ...");
        try {
          await axiosNoAuthInstance.post('/send-email/', formData);
          // console.log('Email sent successfully!');
          // toast.update(id, { render: "Email sent successfully!", type: "success", isLoading: false, autoClose:3000 })
        //   // Clear form data after sending email
        setMessageDisplay("Email sent successfully!");
        } catch (error) {
          console.clear();
          // console.error('Error sending email:', error);
          setMessageDisplay("Oops! Something went wrong");
          // toast.update(id, { render: "Error sending email" , type: "error", isLoading: false, autoClose:3000 })
        }

        setTimeout(() => {
          setDisplayTerminalPrompt(true);
          setDisableEmailForm(true);
        }, 2000);

        
      }
    }


  };



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className='p-2 w-full text-base text-white'>
        <pre>{emailBanner}</pre>
      </div>
    <div className="w-full max-w-md pb-7 text-base text-white">
      {currentStep >= 0 && (
        <div className='flex gap-2'>
          <label className="block font-medium text-gray-300">Email:</label>
          <input
            ref={emailRef}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="border-none w-full outline-none m-0 p-0 bg-transparent text-fLetter" 
            autoFocus
            autoComplete="off"
          />
        </div>
      )}
      {currentStep >= 1 && (
        <div className='flex gap-2'>
          <label className="block font-medium text-gray-300">Name:</label>
          <input
            ref={nameRef}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="border-none w-full outline-none m-0 p-0 bg-transparent text-fLetter" 
            autoFocus
            autoComplete="off"
          />
        </div>
      )}
      {currentStep >= 2 && (
        <div className='flex gap-2'>
          <label className="block font-medium text-gray-300">Message:</label>
          <input
            ref={messageRef}
            type='text'
            name="message"
            value={formData.message}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="border-none w-full outline-none m-0 p-0 bg-transparent text-fLetter" 
            autoFocus
            autoComplete="off"
          />
        </div>
      )}
      <div>
        {messageDisplay!=null && messageDisplay}
      </div>
    </div>

    </>
  );
};

export default TerminalForm;
