"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

 const faqs = [
    {
      question: "Why SEO is Important for Your Website Today?",
      answer:
        "In today's world, consumers depends heavily on search engines such as Google to locate nearly everything they need. No matter what your business provides, implementing local or national Search Engine Optimization is essential to draw the right audience to your website. Therefore, for successful marketing of your products and services, boosting traffic, and enhancing brand credibility, the significance of Search Engine Optimization is dominant.",
    },
    {
      question:
        "Why Choose Tekno Spot for Your SEO Services in Trichy?",
      answer:
        "At Tekno Spot, our skilled SEO experts are always in tune with the latest industry trends and best practices. We deliver personalized SEO strategies that align with your business objectives and financial plan, ensuring clear reporting and consistent communication every step of the way. Our history of successful outcomes and dedication to client satisfaction distinguishes us as a reliable ally for all your SEO requirements.",
    },
    {
      question: "SEO vs SEM, Which is better?",
      answer:
        "SEO and SEM (Search Engine Marketing) each have distinct roles, and their success hinges on your business objectives. SEO aims to enhance organic search rankings, whereas SEM utilizes paid advertising to increase visibility. For the best outcomes, integrating both strategies is recommended.",
    },
     {
      question: "How do I choose the right keywords for my website?",
      answer:
        "Conducting keyword research is essential for effective SEO. When selecting the appropriate keywords for your site, prioritize their relevance, search volume, and level of competition. Utilize keyword research tools to discover trending search phrases that pertain to your business and sector, and choose those that resonate with the needs and preferences of your target audience.",
    },
     {
      question: "How long does it take for SEO to take effect?",
      answer:
        "The time it takes for SEO to begin producing leads varies based on several factors, including the age of your website, its current SEO performance, the quality of its content, and its link profile. Since no two websites are identical, they cannot be evaluated on the same scale. Nevertheless, many businesses usually notice improvements within the first 3 to 6 months.",
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