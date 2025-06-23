"use client";
import React, { useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const Illustration = () => {

  useEffect(() => {
          AOS.init({ duration: 1000, once: true });
        }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main illustration container */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Top circle with gradient */}
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg animate-pulse"></div>
        
        {/* Character figure */}
        <div 
        data-aos="fade-right"
        className="relative">
          <Image width={200} height={100} src="/images/webapplicationdevelopment.png" alt="best web development company in trichy"  className='w-64'/>
        </div>
        
        {/* Bottom circle */}
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg animate-bounce"></div>
        
        {/* Question mark */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
          <span className="text-2xl font-bold text-blue-600">?</span>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-0 w-4 h-4 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
    </div>
  )
}

export default Illustration