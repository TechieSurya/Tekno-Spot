"use client";
import ContactPopup from '@/components/ContactPopup';
import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineDesktop, AiOutlineSetting, AiOutlineThunderbolt } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';
import FeaturedServices from '@/pages/Home/FeaturedServices';
import FAQ from './FAQ';
import Image from 'next/image';


const WebDesign = () => {

        const [isPopupOpen, setIsPopupOpen] = useState(false);
      
        const openPopup = () => setIsPopupOpen(true);
        const closePopup = () => setIsPopupOpen(false);
  
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    return (
  <div className="min-h-screen bg-background py-16 px-6 md:px-12 lg:px-32 mx-auto ">
  {/* Hero Section */}
  <div className="relative overflow-hidden max-w-7xl mx-auto">
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-0 md:px-10 lg:px-20 py-2">
      {/* Left Side Content */}
      <div className="w-full md:w-1/2 max-w-lg text-left">
        <h1 data-aos="fade-up" className="text-yellow-500 text-md mb-4 font-inter font-semibold">
          #1 Web Design Services in Trichy
        </h1>
        <h2 data-aos="fade-up" className="text-2xl md:text-4xl leading-tight font-inter">
         Best Web Design
          <br />
          <span className="font-bold bg-gradient-to-r from-brandBlue via-purple-500 to-brandRed bg-clip-text text-transparent">
            Company in Trichy
          </span>
        </h2>

        <p data-aos="fade-up" className="text-gray-600 mt-6 text-base leading-relaxed tracking-wide text-justify">
          A great story is the heart of any great design. With the top tech,
          design, and copy brains on your side, you can stand out from the
          competition. Choose our Web Designing Company in Trichy for
          professional website designing, marketing, and branding services.
        </p>

        <button
        data-aos="fade-right" 
        onClick={openPopup}
        className="mt-8 group flex items-center px-6 py-3 bg-brandBlue text-white font-medium rounded-lg hover:bg-brandGreen transition duration-300">
          Enquiry Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
      </div>

      {/* Right Side Image */}
      <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/images/WebDesignCompany.png"
          alt="Best Web Design Company in Trichy"
          width={500}
          height={500}
          className="w-full max-w-md"
        />
      </div>
    </section>

  </div>
  {/* Responsive Web Design */}
   {/* <section>
    <div className='container mt-2 flex flex-col md:flex-row justify-around items-center'>
     <div data-aos="fade-right" className="container w-full lg:w-1/2 relative mb-8 lg:mb-0">
      <img
        src="/images/Responsive-Web-Design-in-Trichy.jpg"
        alt="Responsive Web Designing in Trichy"
        className="rounded-lg w-2xl h-auto hidden md:block"
      />
    </div>

      <div className='w-full max-w-md px-2'>
        <h2 
        data-aos="fade-left"
        className='text-brandYellow font-bold md:text-3xl text-xl text-center md:text-left font-poppins'>What is Responsive Web Designing?</h2>
        <p 
        data-aos="fade-up"
        className='mt-5 leading-7 text-justify font-inter'>Responsive Web Design is an Art of creating websites appropriate to deal with each device and every screen. Our responsive web design in Trichy. At <a href="https://teknospot.in/">Tekno Spot</a>, we strongly believe in providing the responsive web designs for the new website. We think that better and responsive web design provides a unified experience that is more user-friendly and performable.</p>
        <h2 
        data-aos="fade-up"
        className='mt-3 font-bold font-poppins'>Advantages of Responsive Web Design</h2>
        <p 
        data-aos="fade-right"
        className='flex items-center font-inter mt-3'><TiTick size={26} className='text-brandGreen' />SEO ranking of the websites</p>
        <p 
        data-aos="fade-right"
        className='flex items-center font-inter mt-1'><TiTick size={26} className='text-brandGreen' />Highly Cost-Effective</p>
        <p 
        data-aos="fade-right"
        className='flex items-center font-inter mt-1'><TiTick size={26} className='text-brandGreen' />Easy to use on any platform</p>
        <button 
        data-aos="fade-up"
        className='px-3 py-2 relative bg-brandBlue rounded-lg shadow-xl font-medium hover:bg-brandGreen text-white mt-2'
            onClick={openPopup}>
          <span className=''>Get Your Website</span>
        </button>
      </div>
       
    </div>
  </section> */}
  {/* Why Tekno Spot for Web Design */}
  <section data-aos="fade-up" className="relative bg-cover bg-center bg-no-repeat text-black py-5">
    <div className="text-center mb-8">
      <h2 data-aos="fade-up" className="text-brandYellow font-semibold font-inter">Best Web Design in Trichy</h2>
      <h2 data-aos="fade-up" className="text-2xl font-bold font-poppins">Why Choose Tekno Spot for Web Designing?</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
      {/* Responsive Web Design */}
      <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center text-center p-6  rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105">
        <AiOutlineDesktop className="text-6xl mb-4 text-brandYellow" />
        <h3 className="text-xl font-bold mb-2">Responsive Web Design</h3>
        <p>Does not matter what device your user is on - our websites adapt quickly to every screen and give users a comfortable viewing experience!</p>
      </div>

      {/* Web Hosting Services */}
      <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col items-center text-center p-6  rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
        <GiReceiveMoney className="text-6xl mb-4 text-brandYellow" />
        <h3 className="text-xl font-bold mb-2">Down to Earth Pricing</h3>
        <p>Our packages help you to represent the company well in the marketplace with all the visuals integrated into it.</p>
      </div>

      {/* Lightning Fast */}
      <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col items-center text-center p-6  rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
        <AiOutlineThunderbolt className="text-6xl mb-4 text-brandYellow" />
        <h3 className="text-xl font-bold mb-2">Speed Enhancement</h3>
        <p>The work we do on websites will all load lightning-fast (less than two seconds), so you are never going to lose a client or visitor because of a slow website.</p>
      </div>

      {/* Website Maintenance */}
      <div data-aos="fade-up" data-aos-delay="800" className="flex flex-col items-center text-center p-6  rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
        <AiOutlineSetting className="text-6xl mb-4 text-brandYellow" />
        <h3 className="text-xl font-bold mb-2">Structure with SEO</h3>
        <p>All of our websites are optimized to have an ideal on-page SEO structure that is consistent with the most recent 2025 SEO trends.</p>
      </div>
    </div>
  </section>
  {/* Featured Web Designing Services */}
  <FeaturedServices/>
  {/* CTA Container */}
  <div data-aos="fade-up" className="bg-gradient-to-r from-brandBlue to-brandGreen hidden md:flex flex-col justify-center items-center py-6 px-4 gap-6 mx-auto max-w-7xl text-center md:text-left rounded-md ">
    <p className="text-brandYellow font-bold text-2xl md:text-xl sm:text-base font-inter text-center">
      Are you ready to create an amazing website for your business?
    </p>
    <p className="text-white text-xl md:text-xl/relaxed font-inter text-center">
      Reach out to us today. The outstanding team of developers and designers at Tekno Spot are ready to support you.
    </p>
     <button className="bg-brandRed hover:scale-105 duration-300 text-white py-4 px-5 rounded-full font-bold text-sm"
          onClick={openPopup}
          > 
        Get a Quote
    </button>
    <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
  </div>
  {/* Specialized Technologies */}
  <section data-aos="fade-up">
    <div className="bg-white py-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-brandYellow font-poppins">
          We are specialized in...
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 sm:grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <Image width={200} height={100} alt="HTML - Web Designing" src="/images/HTML-WebDesigning.png" className="h-20 w-full object-contain" />
          <Image width={200} height={100} alt="CSS - Web Designing" src="/images/css-WebDesigning.png" className="h-20 w-full object-contain" />
          <Image width={200} height={100} alt="JavaScript-Web Designing in Trichy" src="/images/JavaScript-WebDesigning.png" className="h-20 w-full object-contain" />
          <Image width={200} height={100} alt="React Web Development in Trichy" src="/images/React-WebDevelopment.png" className="h-28 w-36 object-contain" />
          <Image width={200} height={100} alt="Tailwind CSS Web Designing in Trichy" src="/images/Tailwind-CSS-WebDevelopment.png" className="h-16 w-full object-contain" />
          <Image width={200} height={100} alt="Bootstrap Web Designing in India" src="/images/bootstrap-WebDesigning.png" className="h-16 w-full object-contain" />
          <Image width={200} height={100} alt="PHP Web Development in Trichy" src="/images/PHP-WebDevelopment.png" className="h-16 w-full object-contain" />
          <Image width={200} height={100} alt="Wordpress Web Development in Trichy" src="/images/Wordpress-WebDevelopment.png" className="h-16 w-full object-contain" />
          <Image width={200} height={100} alt="Laravel Web Development in Trichy" src="/images/Laravel-AppDevelopment.png" className="h-16 w-full object-contain" />
          <Image width={200} height={100} alt="Woo Commerce Web Development in Trichy" src="/images/Woo-Commerce-Web-Development.png" className="h-16 w-full object-contain" />
          <Image width={200} height={100} alt="Razorpay Integration Web Development in Trichy" src="/images/Razorpay_logo.webp" className="h-28 w-full object-contain" />
          <Image width={200} height={100} alt="Firebase Web Development in Trichy" src="/images/Firebase_WebDevelopment.png" className="h-10 w-full object-contain" />
          <Image width={200} height={100} alt="Node JS Web Development in Trichy" src="/images/Node.js-WebDevelopment.png" className="h-10 w-full object-contain" />
          <Image width={200} height={100} alt="MongoDB Web Development in Trichy" src="/images/MongoDB-WebDevelopment.png" className="h-20 w-full object-contain" />
        </div>
      </div>
    </div>
  </section>
  {/* FAQs */}
  <FAQ/>
</div>

  )
}

export default WebDesign
