import React from 'react'
import type { Metadata } from "next";
import WebDesign from './WebDesign';

export const metadata: Metadata = {
  title: "Tekno Spot - Best Web Design Company in Trichy",
  description: "#1 Web Design Company in Trichy. We create excellent website designs which are not only visually appealing but also extremely conversion focused.",
};

const page = () => {
  return (
    <div>
      <WebDesign/>
    </div>
  )
}

export default page
