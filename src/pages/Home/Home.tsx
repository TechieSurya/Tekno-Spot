import React from 'react'
import Hero from './Hero'
import FeaturedServices from './FeaturedServices'
import Clients from './Clients'
import Mission from './Mission'
import Review from '@/components/Review'
import Sectors from './Sectors'

const Home = () => {
  return (
    <div>
     <Hero/>
     <FeaturedServices/>
     <Clients/>
     <Mission/>
     <Review/>
     <Sectors/>
    </div>
  )
}

export default Home
