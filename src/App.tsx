import { useState, useEffect} from 'react';
import Navbar from "@/components/navbar/Navbar";
import { SelectedPage } from './shared/types';
import Home from './components/home/Home';
import Benefits from './components/benefits/Benefits';
import OurClasses from './components/ourClasses/OurClasses';
import ContactUs from './components/contactUs/ContactUs';
import Footer from './components/footer/Footer';


function App() {
  
  const [selectedPage, setSelectedPage]= useState<SelectedPage>(SelectedPage.Home); 
  const[isTopofPage, setIsTopOfPage]= useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return (
    <>
     <div className="app bg-gray-20">
        <Navbar 
        isTopOfPage={isTopofPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} /> 
        <Benefits setSelectedPage={setSelectedPage} />
        <OurClasses setSelectedPage={setSelectedPage} />
        <ContactUs setSelectedPage={setSelectedPage} />
        <Footer/>
        

      </div>
    </>
  )
}

export default App
