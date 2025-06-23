

import React from 'react'
import type { Metadata } from "next";
import About from './About';


export const metadata: Metadata = {
  title: "About Tekno Spot - Best Digital Marketing Company in Trichy",
  description: "#1 Digital Marketing Agency in Trichy. Tekno Spot provides the Best Web Design, Web Development, SEO, SMM, PPC, and Content Marketing services.",
};

const page = () => {
  
  return (
    <div>
      <About/>
    </div>
  )
}

export default page
