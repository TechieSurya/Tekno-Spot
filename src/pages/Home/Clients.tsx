"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';


const logos = [
  { id: 1, image: "/images/Aaraniyam.png", alt: "Aaraniyam Farm" , width:125, height:144, path:"https://aaraniyam.in/"},
  { id: 2, image: "/images/RockfortDevelopers.jpeg", alt: "Rockfort Developers" , width:300, height:350,path:"https://rockfortdevelopers.com/"},
  { id: 3, image: "/images/TrinityPlus.png", alt: "Trinity Plus Social Trust",width:300, height:250, path:"https://trinityplus.org/" },
  { id: 4, image: "/images/ManmakizhFoods.png", alt: "Joyfinance Logo", width:350, height:300, path:"/"},
  { id: 5, image: "/images/UlavTech.png", alt: "Ulav Tech", width:300, height:250, path:"https://ulavtech.com/" },
  { id: 6, image: "/images/MTSSDS.png", alt: "Mother Therasa Social Service Development Society", width:300, height:150, path:"https://mtssds.org/" },
  { id: 7, image: "/images/TONI&GUY.png", alt: "TONI & GUY TRICHY", width:300, height:250, path:"https://www.instagram.com/toniandguytrichy.puthur/" },
  { id: 8, image: "/images/ShanmugaTextiles.png", alt: "Sri Shanmuga Textiles", width:300, height:150, path:"/" },
  { id: 9, image: "/images/SkillEd.png", alt: "Skill Ed", width:300, height:150, path:"/" },
  { id: 10, image: "/images/Ponmani_Education.jpeg", alt: "Sri Ponmani International Education", width:300, height:150, path:"/" },
  { id: 11, image: "/images/SKVRealEstates.jpeg", alt: "SKV Real Estates", width:300, height:150, path:"/" },
  { id: 12, image: "/images/JoyFinance.png", alt: "Joyfinance Logo", width:300, height:250, path:"/"},



];


const Clients = () => {
  return (
    <div className="w-full bg-white mt-10 px-5">
      <div className="container mx-auto relative">
        {/* Title Section */}
        <div className="text-left mb-8">
          <div 
          data-aos="fade-right"
          className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mb-4"></div>
          <h2 
          data-aos="fade-up"
          className="text-3xl font-semibold text-gray-700">
            Meet the People
          </h2>
          <h2 
          data-aos="fade-up"
          className="text-3xl font-bold text-gray-900">
            We are Working With
          </h2>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="absolute right-10 space-x-4 z-10">
          <button className="swiper-button-prev-custom bg-white hover:bg-blue-300  p-2 rounded-full border border-blue-400">
            <FaArrowLeft className="text-blue-700 hover:text-white" />
          </button>
          <button className="swiper-button-next-custom bg-white hover:bg-blue-300  hover:text-white p-2 rounded-full border border-blue-400">
            <FaArrowRight className="text-blue-700 hover:text-white" />
          </button>
        </div>

        {/* Animation Image */}
        <div 
        data-aos="fade-up"
        className="place-items-center">
          <Image src="/images/Ellipsee.png" alt="Ellipse decoration" width={70} height={70} />
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },     // Small mobiles
            480: { slidesPerView: 2.5 },   // Large mobiles
            640: { slidesPerView: 3 },     // Tablets
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="relative z-10 -mt-4 bg-white"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="flex flex-col items-center">
                <div className="w-full h-[350px] sm:h-[200px] py-2 flex items-center justify-center">
                  <a href={logo.path} target='_blank'>
                  <Image
                    data-aos="fade-up"
                    src={logo.image}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className='max-w-[200px] max-h-[130px] object-contain'
                  />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Clients
