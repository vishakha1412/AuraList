 
import Navbar from './components/NvaBar'
import { Outlet } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
 
useEffect(() => {
  AOS.init({
    duration: 800, // animation duration in ms
    once: true,    // whether animation should happen only once
  });
}, []);
  return (
    <>
    
    <Navbar/>
    
     <Outlet/>
    </> )
}

export default App
