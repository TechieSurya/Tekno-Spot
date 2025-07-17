import Image from 'next/image';
import React from 'react'
import {
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa6';



  interface NavItem {
  title: string;
  href?: string;
  };


const navItems: NavItem[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "about-us"
    },
    {
      title: "Web Design",
      href: "/web-design-company-in-trichy"
    },
    {
      title: "App Development",
      href: "/mobile-app-development-company-in-trichy"
    },
    {
      title: "Contact Us",
      href: "/contact-us"
    }
  ];

const Footer = () => {
  return (
    <div 
    data-aos="fade-up"
    className="border-t border-gray-200">
      <footer 
      data-aos="fade-up"
      className="bg-white text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-4 w-32">
            <Image width={200} height={100} src="/images/Logo.png" alt="TeknoSpot Logo" className="w-full h-full" />
          </div>
          <p className="text-sm leading-relaxed">
            We understand the power of user experience design and employ cutting‑edge strategies to make your website, application intuitive, engaging, and downright addictive.
          </p>
        </div>
        <div>

        </div>
        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map(({ title, href = '/' }) => (
                <li key={title}>
                  <a
                    href={href}
                    data-aos="fade-right"
                    className="hover:text-gray-900 transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <p className="text-sm mb-2">EDII - TABIF, Agricultural College and Research Institute, Tamil Nadu Agricultural University,Trichy-620027</p>
            <a href="tel:+917604921773" className="text-sm hover:text-gray-900 transition">
              +91 76049 21773
            </a>
          </div>
          <div className="mt-6 flex space-x-4">
            <a 
            href='https://www.facebook.com/teknospot25' target='_blank'
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <FaFacebook className='w-6 h-6 text-brandBlue'/>
            </a>
            <a 
            href='https://www.instagram.com/tekno_spot_/' target='_blank'
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <FaInstagram className='w-6 h-6 text-brandRed'/>
            </a>
             <a 
             href='https://www.linkedin.com/company/tekno-spot/' target='_blank'
             className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
              <FaLinkedinIn className='w-6 h-6 text-darkBlue'/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <p className="text-center text-sm text-gray-900 py-4">
          © 2025 Copyright by <span className='font-bold'>Tekno Spot.</span> All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer