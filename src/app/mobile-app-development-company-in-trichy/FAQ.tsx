"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

 const faqs = [
    {
      question: "What is the estimated time required to develop the app?",
      answer:
        "The duration varies based on the framework, technology, and several other factors. For a small project, you might expect a timeline of 2-3 months, whereas a larger project could take 6 months or longer.",
    },
    {
      question:
        "Are you providing consulting services for app development?",
      answer:
        "Absolutely! We provide complimentary consultation sessions. We understand that many of our clients are not technically inclined, so we strive to make these sessions as straightforward and accessible as possible.",
    },
    {
      question: "How much will it cost to develop the app?",
      answer:
        "The expense of developing an app can vary significantly depending on features, technology, frameworks, and numerous other elements, making it quite challenging to pinpoint the true cost of creating a mobile application",
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