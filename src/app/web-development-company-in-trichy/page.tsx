import { Metadata } from 'next';
import React from 'react'
import WebDevelopment from './WebDevelopment';


export const metadata: Metadata = {
  title: "Tekno Spot - No.1 Web Development Company in Trichy",
  description: "Best Web Development Company in Trichy. We create custom web applications like E-Commerce Web Development, CMS Development and More",
};

const Page = () => {
  return (
    <div>
        <WebDevelopment/>
    </div>
  )
}

export default Page