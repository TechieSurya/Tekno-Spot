import React from 'react'
import type { Metadata } from "next";
import MobileApp from './MobileApp';

export const metadata: Metadata = {
  title: "Best Mobile App Company in Trichy - Tekno Spot",
  description: "#1 Mobile App Company in Trichy. We excel in crafting exceptional mobile app so lutions that deliver impressive outcomes.",
};

const page = () => {
  return (
    <div>
      <MobileApp/>
    </div>
  )
}

export default page