"use client";

import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from 'swiper/modules';
import { reviewData } from '@/constant/constant';
import { FaStar } from 'react-icons/fa';

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((data)=>{
            return (
                <SwiperSlide key={data.id} 
                className='bg-white rounded-3xl block shadow-2xl mb-4'>
                  <div className='w-[80%] mx-auto mt-16'>
                    <p className='text-xs sm:text-sm md:text-base font-semibold text-justify'>{data.review}</p>
                    {/* Icons */}
                    <div className='flex items-center mt-4'>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500'/>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500'/>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500'/>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500'/>
                        <FaStar className='md:w-6 md:h-6 w-3 h-3 text-yellow-500'/>
                    </div>
                    {/* User Profile */}
                    <div className='mt-2'>
                        <div className='flex items-center space-x-4'>
                            <div>
                                <p className='text-sm sm:text-lg font-semibold'>{data.name}</p>
                                <p className='text-gray-600 text-xs sm:text-base'>{data.company}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  )
}

export default ReviewSlider
