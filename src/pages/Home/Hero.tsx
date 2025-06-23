'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import ContactPopup from '@/components/ContactPopup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  
  useEffect(()=>{
    const initAOS = async()=>{
      await import("aos");
      AOS.init({
        duration : 1000,
        easing : "ease",
        once: true,
        anchorPlacement:"top-bottom",
      });
    };
    initAOS();
  },[])

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className='flex justify-center items-center relative w-full'>
       <section className="flex flex-col md:flex-row justify-around w-full items-center max-w-[1350px] lg:h-[500px] px-4 py-6 md:mt-7 lg:mb-2">
          <div data-aos="fade-right" className="mb-10 mt-24">
            <h1 className="uppercase text-brandRed font-bold drop-shadow-2xl md:left-16 relative tracking-widest font-poppins mb-5 text-base">
              #1 Digital Marketing Company in Trichy  
            </h1>
            <div className="text-3xl md:text-2xl font-medium md:mt-3 md:mb-8 md:left-16 relative items-center mb-7 mt-5">
              <h2 className="font-inter text-xl text-darkBlue md:mb-3">
                Tekno Spot is a Leading Digital Marketing Agency <br/>
                based out in Trichy. With professional expertise our<br/>
                expert team provides Web Designing, Web Development, <br/>
                E-Commerce Development, SEO Services, Social Media Marketing, <br/>
                Content Marketing, Graphics Design and more.
              </h2>
               <div className='flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6'>
                <div className='flex items-center space-x-4'>
                    <Image src="/images/google.png" alt="" 
                    width={40}
                    height={40}
                    />
                    <div>
                        <div className='flex items-center space-x-2'>
                         <h1 className='text-lg sm:text-xl md:text-2xl  font-bold'>
                            4.9
                         </h1>
                         <div className='flex items-center'>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <BsStarHalf className='w-4 h-4 text-yellow-500'/>
                         </div>
                        </div>
                        <p className='text-darkBlue text-sm sm:text-base'>Based Rated on Google</p>
                    </div>
                </div>
                 <div className='flex items-center space-x-4'>
                    <Image src="/images/linkedin.png" alt="" 
                    width={40}
                    height={40}
                    />
                    <div>
                        <div className='flex items-center space-x-2'>
                         <h1 className='text-lg sm:text-xl md:text-2xl font-bold'>
                            4.7
                         </h1>
                         <div className='flex items-center'>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <FaStar className='w-4 h-4 text-yellow-500'/>
                            <BsStarHalf className='w-4 h-4 text-yellow-500'/>
                         </div>
                        </div>
                        <p className='text-darkBlue text-sm sm:text-base'>Based Rated on LinkedIn</p>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <button 
              className='px-3 py-2 relative bg-yellow-400 rounded-lg shadow-xl font-bold md:left-16 hover:bg-yellow-500 transition-colors'
              onClick={openPopup}
            >
              <span>Get More Leads</span>
            </button>
            <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>

            </div>
          </div>
          <div data-aos="fade-left">
            <Image
              src="./images/TeknoSpot.png"
              alt="Best Digital Marketing Company in Trichy"
              width={500}
              height={300}
              className="w-96 hidden md:block"
            />
          </div>
          
        </section>
        </div>
  );
};

export default Hero;
