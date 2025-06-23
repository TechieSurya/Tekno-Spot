"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

 const faqs = [
    {
      question: "What is Social Media Marketing?",
      answer:
        "Social media marketing utilizes platforms such as Facebook, Instagram, Youtube and LinkedIn to enhance brand visibility, connect with audiences, and drive business growth through customized campaigns and strategies.",
    },
    {
      question:
        "What services does our social media marketing agency in Trichy provide?",
      answer:
        "A social media marketing agency in Trichy offers a range of online services, including content creation (such as blogs, articles, and copywriting), engaging social media posts, interactive public relations through social media, social media optimization (SMO), and social media marketing (SMM). Choose our top social media marketing agency in Trichy for your needs.",
    },
    {
      question: "What is the price of hiring a social media marketing agency?",
      answer:
        "SThe cost of hiring a social media marketing company can vary significantly based on the range of services offered, the organization's scale, and the platforms used. Typically, you can expect to spend anywhere from a few hundred to several thousand dollars each month.",
    },
    {
      question: "Is it worth getting a social marketing agency?",
      answer:
        "Investing in a social media marketing agency is truly beneficial. Research shows that businesses with a strong social media presence generate 32% more sales leads compared to those that don't, making this investment crucial for sustainable growth.",
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