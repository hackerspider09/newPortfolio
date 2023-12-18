import './App.css';
import { Route, Routes  } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import Hero from './components/Hero';
// import Contact from './components/Contact';
import Home from "./pages/Home"
import Resume from './pages/Resume';
import Footer from './components/Footer'
import About from './pages/About';
import Projects from './pages/Projects';
import MemePage from './pages/MemePage';

function App() {
  return (
    <div className="flex flex-col bg-mainBg">
        <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/hacker' element={<MemePage />} />
      </Routes>

      <Footer /> 

    

    </div>
    
  );
}

export default App;
