import React, { useEffect } from 'react'
import Navigation from './Navigation'
import AOS from "aos";
import "aos/dist/aos.css";

const Main=({children}) =>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
        <Navigation/>
        {children}
    </React.Fragment>
  )
}

export default Main
