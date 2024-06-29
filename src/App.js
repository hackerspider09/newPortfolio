import './App.css';
import { useEffect } from 'react';
import { Route, Routes ,useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import Hero from './components/Hero';
// import Contact from './components/Contact';
import Home from "./pages/Home"
import Resume from './pages/Resume';
import Footer from './components/Footer'
import About from './pages/About';
import Projects from './pages/Projects';
import MemePage from './pages/MemePage';
import ErrorPage from './pages/ErrorPage';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash){
      document.querySelector(`${location.hash}`).scrollIntoView()
    }else{
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
}, [location.hash,location.pathname])

  return (
    <div className="flex flex-col bg-mainBg  bg-grid-box  overflow-y-hidden">
      <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/hacker' element={<MemePage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <Footer /> 

    

    </div>
    
  );
}

export default App;
