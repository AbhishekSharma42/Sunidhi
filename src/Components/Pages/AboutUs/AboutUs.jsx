import React from 'react'
import AboutUsBgImg from './AboutUsBgImg.png';
import AboutInfo from './AboutInfo';
import { useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';


function AboutUs() {

  useEffect(() => {
    document.title = 'Saunidhi InfoTech About us';
  }, []);

  return (
    <>
      <NavBar />
      {/* Navbar Background color */}
      <div className="hidden h-[4rem] bg-slate-800 md:h-[4rem] xl:h-[7rem]"></div>

      {/* this tag for only image manage*/}
      <div id='scrollUp'></div>
      <div className="h-[100%] bg-no-repeat w-[100%] md:h-[100%]">
        <div style={{ backgroundImage: `url(${AboutUsBgImg})`, backgroundRepeat: 'no-repeat', backgroundSize: '101% 100%' }}>

          <div className=' h-[60vh] flex flex-col justify-center px-4 gap-6 md:mx-20 '>
            <div className="text-xl md:text-2xl text-white uppercase">About us</div>
            <div className='text-3xl sm:w-[554px] md:text-4xl text-white '>Our micro-vertical industry functionality unleashes the power of Saunidhi InfoTech faster</div>
          </div>
        </div>
      </div>
      <div>
        <AboutInfo />
      </div>
    </>
  )
}

export default AboutUs
