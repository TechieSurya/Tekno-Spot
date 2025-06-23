import React from 'react'
import SMM from './SMM'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Social Media Marketing Company in Trichy - Tekno Spot",
  description: "#1 Social Media Marketing Company in Trichy. Social Media Marketing Agencies play a vital role in the growth of businesses. Although 73% of marketers consider social media marketing effective, a significant 93% regard it as indispensable.",
};
const page = () => {
  return (
    <div>
        <SMM/>
    </div>
  )
}

export default page