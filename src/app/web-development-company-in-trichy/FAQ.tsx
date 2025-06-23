"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

 const faqs = [
    {
      question: "What is included in our web development services?",
      answer:
        "Tekno Spot offers a wide range of web development services, including customized web development, ecommerce site creation, and CMS integration with platforms such as WordPress, Drupal, and Magento. We also specialize in mobile application development. Furthermore, we provide ongoing website maintenance and support to keep your online presence strong and effective.",
    },
    {
      question:
        "What unique approaches does Tekno Spot use in creating web applications?",
      answer:
        "Tekno Spot sets itself apart by placing a strong emphasis on our clients. We utilize cutting-edge technology, Agile development practices, and a deep understanding of industry needs. Our commitment to customized solutions and maintaining high-quality standards is what makes us stand out. Furthermore, we focus on delivering seamless and user-friendly experiences by carefully designing user flows. To keep you informed about any updates, we provide detailed release notes, ensuring a smooth development journey for your web applications.",
    },
    {
      question: "Will my Web Application be Mobile-Friendly?",
      answer:
        "Certainly! Every website and web application we create is designed to be fully responsive, guaranteeing a smooth experience across all devices, whether it's a desktop or a smartphone. Additionally, our mobile app development services prioritize optimal performance on mobile platforms.",
    },
    {
      question: "What is a headless CMS, and should I consider using it?",
      answer:
        "A headless CMS decouples the front-end from the back-end of your website, providing enhanced flexibility and scalability. This approach is particularly beneficial for businesses with intricate requirements or those aiming for optimal performance across various platforms.",
    },
  ];

  


const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  
  const toggleAccordion = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
     <div>
      <div className="w-full max-w-3xl mx-auto relative p-8 bg-white rounded-lg shadow-2xl my-12 overflow-hidden">
        {/* Left top corner decoration */}
        <div className="absolute -top-4 -left-4 w-16 h-16">
          <Image
            src="/images/Ellipsee.png"
            alt="Decorative element"
            width={100}
            height={100}
            className="w-16 h-16 object-cover object-top-left"
          />
        </div>

        {/* Right bottom corner decoration */}
        <div className="absolute -bottom-4 -right-4 w-16 h-16">
          <Image
            src="/images/Ellipsee.png"
            alt="Decorative element"
            width={100}
            height={100}
            className="w-16 h-16 object-cover object-bottom-right"
          />
        </div>

        <div className="px-20 mb-10">
          <h2 className="text-3xl relative inline-block mt-10">
            Frequently <span className="font-bold text-brandRed">ASKED QUESTIONS</span>
            <div className="absolute -top-6 left-0 w-28 h-1 text-transparent  bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 mb-2"></div>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div
                className="px-6 py-4 text-left font-bold flex justify-between hover:bg-gray-50 transition-all cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ