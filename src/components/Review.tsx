import React from 'react'
import { BsStarHalf } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='pt-20 pb-5 flex items-center justify-center flex-col'>
        
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* Text */}
            <div>
                <p
                 data-aos="fade-right"
                 className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500
                text-transparent mb-4"></p>
                <h2 data-aos="fade-up" className='text-2xl font-bold text-brandGreen'
                >Testimonials</h2>
                <h2 data-aos="fade-up" className='text-3xl  font-semibold font-poppins'>What our clients are saying us?</h2>
                <p className='mt-2' data-aos="fade-up">
                    We take pride in delivering quality solutions that make a real impact. Here’s a glimpse of the trust and satisfaction our clients have shared through their feedback and ratings.
                </p>
                {/* Ratings */}
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p data-aos="fade-up" className='text-2xl font-bold text-yellow-500'>4.9</p>
                        <p data-aos="fade-up" className='mb-2 font-semibold'>Overall Rating</p>
                        <div data-aos="fade-up" className='flex items-center'>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <FaStar className='text-yellow-500'/>
                            <BsStarHalf className='text-yellow-500'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider */}
            <div 
            data-aos="fade-left"
            className='overflow-hidden'>
                <ReviewSlider/>
            </div>
        </div>
    </div>
  )
}

export default Review
