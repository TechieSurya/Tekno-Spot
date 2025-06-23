import React from 'react'
import Hero from './Hero'
import Culture from './Culture'
import JobListings from './JobListings'
import ApplicationSection from './ApplicationSelection'

const page = () => {
  return (
    <div>
        <Hero/>
        <Culture/>
        <JobListings/>
        <ApplicationSection/>
    </div>
  )
}

export default page