'use client'

import React, { useState } from 'react';
import ContactPopup from '@/components/ContactPopup';
import Image from 'next/image';


const containerData = [
  {
    id: 1,
    img: "/images/Best-Web-Design-Company-in-Trichy.svg",
    title: "Web Designing",
    alt:"best web design company in trichy",
    description:
      "Each website we create is perfectly crafted to deliver a 100% unique online experience tailored to your brand. Our expert web designers in trichy, transform your vision into a dynamic, custom web design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website design will not only stand out but also connect deeply with your audience.",
    aosDelay: "0",
    url:"/Web-Development-Company-in-Trichy"
  },
  {
    id: 2,
    img: "/images/webdevelopment.jpg",
    title: "Web Development",
    alt:"best web development company in trichy",
    description: "Tekno Spot, a leading web development company in trichy, specializes in building dynamic and innovative online solutions. From user-friendly online stores to comprehensive management systems, we deliver high-performing, well-executed projects tailored to drive digital success.",
    aosDelay: "400",
    url:"/App-Development-Company-in-Trichy"
  },
  {
    id: 3,
    img: "/images/WebsiteRework.jpg",
    title: "Website Redesign",
    alt:"website developers in trichy",
    description: "Whether your website design needs a refresh or a complete website fix up, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our expert web designers will breathe new life into your website, enhancing its functionality, user experience. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation.",
    aosDelay: "600",
    url:"/SEO-Services"
  },
  {
    id: 4,
    img: "/images/Seo.png",
    title: "Search Engine Optimization",
    alt:"seo company in trichy",
    description:
      "We offer a comprehensive range of services designed to boost your website’s ranking and attract organic, non-paid google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.",
    aosDelay: "600",
    url:"/Graphics-Design"
  },
  {
    id: 5,
    img: "/images/E-CommerceWebSiteTrichy.jpg",
    title: "E-Commerce Development",
    alt:"e-commerce web development in trichy",
    description:
      "We specialize in e-commerce web development for leading content management systems (CMS) like Shopify, Magento, WooCommerce and custom e-commerce web development. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless online shopping experience for your customers.",
    aosDelay: "600",
    url:"/Graphics-Design"
  },
];

const FeaturedServices = () => {

     const [isPopupOpen, setIsPopupOpen] = useState(false);
    
      const openPopup = () => setIsPopupOpen(true);
      const closePopup = () => setIsPopupOpen(false);

  return (
    <div className='flex justify-center items-center relative w-full py-16'>
      <section className="container">
        <div className="text-center mb-14">
          <h1 data-aos="fade-up" className="text-3xl font-bold font-volkhov">
            Our Interactive Website Design Services in Trichy
          </h1>
          <p
            data-aos="fade-up"
            className="text-base text-brandYellow font-semibold font-poppins"
          >
            We combine business expertise with technology to build high-impact
            applications and grow your Digital Footprint.
          </p>
        </div>
       <div className="w-full flex flex-col items-center gap-6">
  {/* First Row - 3 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full place-items-center">
    {containerData.slice(0, 3).map((data) => (
      <div
        data-aos="fade-up"
        data-aos-delay={data.aosDelay}
        key={data.id}
        className="rounded-2xl shadow-2xl shadow-black hover:scale-105
                   duration-300 w-full max-w-xs"
      >
        {/* Image */}
        <div>
          <Image
            src={data.img}
            alt={data.alt}
            width={200}
            height={200}
            className="max-w-full max-h-32 mx-auto transform mt-10 group-hover:scale-105 duration-300"
          />
        </div>

        {/* Details */}
        <div className="py-4 text-center px-4">
          <h1 className="text-xl font-bold">{data.title}</h1>
          <p className="text-gray-500 text-justify group-hover:text-white duration-300 text-base mb-4">
            {data.description}
          </p>
          <button className="bg-brandRed hover:scale-105 duration-300 text-white py-2 px-4 rounded-full font-bold text-sm"
          onClick={openPopup}
          > 
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Second Row - 2 Centered Cards */}
  <div className="flex text-center flex-wrap justify-center gap-6 py-2">
    {containerData.slice(3).map((data) => (
      <div
        data-aos="fade-up"
        data-aos-delay={data.aosDelay}
        key={data.id}
        className="rounded-2xl shadow-2xl shadow-black duration-300 hover:scale-105 w-full max-w-xs"
      >
        {/* Image */}
        <div>
          <Image
            src={data.img}
            alt={data.alt}
            width={200}
            height={200}
            className="max-w-full max-h-32 mx-auto transform mt-10 group-hover:scale-105 duration-300"
          />
        </div>

        {/* Details */}
        <div className="py-4 px-4">
          <h1 className="text-xl font-bold">{data.title}</h1>
          <p className="text-gray-500 text-justify group-hover:text-white duration-300 text-sm mt-2 mb-1">
            {data.description}
          </p>
         <button className="bg-brandRed hover:scale-105 duration-300 text-white py-2 px-4 rounded-full font-bold text-sm"
          onClick={openPopup}
          > 
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
         <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
      </section>
    </div>
  )
}

export default FeaturedServices
