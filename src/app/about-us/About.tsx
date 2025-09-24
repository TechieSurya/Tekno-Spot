"use client"
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactPopup from "@/components/ContactPopup";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

const About = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
    
      const openPopup = () => setIsPopupOpen(true);
      const closePopup = () => setIsPopupOpen(false);
  

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 
  const points = [
    "We didn’t just build websites. We built trust.",
    "We didn’t just run ads. We ran campaigns that moved the needle.",
    "We didn’t just follow trends. We created tailored strategies that worked in the real world.",
  ];
  return (
    <div className="min-h-screen bg-background py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h1 
              data-aos="fade-up"
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About{' '}
                <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                  Tekno Spot
                </span>
              </h1>
              <p 
              data-aos="fade-up"
              className="text-xl text-yellow-500 font-semibold mt-3">
                We Turn Your Digital Ideas into Reality
              </p>
              <p 
              data-aos="fade-up"
              className="text-gray-700 text-base/8 -tracking-tight mt-10">
          Every great narrative has a modest beginning; ours began in a tiny
          room in the center of Trichy, where hopes were stronger than doubts,
          rather than in a luxurious office or with a large investment.
        </p>
        <p 
        data-aos="fade-up"
        className="text-black text-base/8 -tracking-tight mt-2">
          Meet our Founder, Surya Prakash, an ambitious self-learner who
          believed that impact requires only purpose. With Expertise in Digital
          Marketing, he decided against waiting for a VC-backed fund or the
          perfect time. Instead, he opened his laptop, established a Wi-Fi
          connection, and turned a room into a battleground of energy, passion,
          and ideas.
        </p>    
         <div className="bg-gradient-to-r rounded-md mt-4">
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li 
              data-aos="fade-up"
              key={index} className="flex items-start text-gray-700">
                <span className="mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 rotate-[-180]"
                  >
                    <defs>
                      <linearGradient
                        id="airplaneGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" /> {/* Violet */}
                        <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
                      </linearGradient>
                    </defs>
                    <path
                      d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 
                    .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
                      fill="url(#airplaneGradient)"
                    />
                  </svg>
                </span>
                <p className="leading-relaxed text-base">{point}</p>
              </li>
            ))}
          </ul>
            </div>
            </div>
          </div>

          {/* Image Section */}
          <div 
          data-aos="fade-left"
          className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/images/SuryaPrakashTeknoSpot.jpg"
                  alt="Surya Prakash - Founder of Tekno Spot"
                  width={400}
                  height={400}
                  className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Journey */}
      <div className="relative overflow-hidden">
      <div className="text-center mt-10">
        <p 
        data-aos="fade-up"
        className="text-4xl font-light">
          Our Journey —
          <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            {" "}
            Driven by Vision, Defined by Results
          </span>
        </p>
      </div>

      {/*Main content */}
      <div className="relative mt-8 flex flex-col justify-center items-center px-6  overflow-hidden">
        <div className="relative z-10 max-w-7xl w-full bg-white/80 backdrop-blur-md md:pb-16 flex flex-col md:flex-row items-center gap-10">
          {/*left image */}
          <div className="md:w-1/2 flex justify-center mt-2 md:mt-0">
            <div 
            data-aos="fade-right"
            className="relative w-full max-w-[400px] h-full  rounded-xl overflow-hidden">
              <Image
                src="/images/ourjourn.png"
                alt="Tekno Spot Journey"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Blurred Background Gradient Effect */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div
              className="w-[600px] h-[400px] bg-gradient-to-br from-sky-200/30
       to-blue-200/20 rounded-full blur-3xl"
            ></div>
            <div className=""></div>
          </div>

          {/* Right side -  Text content  */}

          <div 
          className="md:w-1/2 mb-10 py-3">
            <p
            data-aos="fade-left"
            className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-700 via-purple-500 to-red-500
              text-transparent "
            ></p>
            <h2 
            data-aos="fade-up"
            className="text-3xl font-bold mt-2">Our Core Values</h2>
            <p 
            data-aos="fade-up"
            className="text-lg text-yellow-500 font-semibold mb-2 mt-5">
              Consistency in Every Project, Values in Every Step
            </p>
            <p 
            data-aos="fade-up"

            className="text-gray-700 text-base/8 -tracking-tight mt-5">
              One thing never changes, even if each project we take on is
              different: our dedication to our fundamental values. These
              principles form the foundation of our client-centered strategy.
              Exceptional service and significant results will be assured when
              we continuously live up to our vision, mission, and promise.
            </p>
          </div>
        </div>
      </div>
      {/*Image */}
      <div 
      data-aos="fade-down"
      className="relative inset-0 flex justify-center items-center mt-10">
        <Image 
        width={80}
        height={80}
        src="/images/Ellipsee.png" alt="Illustration Design" className="absolute left-30 -mt-0 z-10" />
      </div>
    </div>
    {/* Foundation */}
    <div className="relative overflow-hidden">
      <div className="py-5 px-4 sm:px-6 lg:px-16 ">
        <div className="text-center mb-12 text-base/8">
          <p 
          data-aos="fade-right"
          className="w-16 h-1 bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 place-self-center"></p>
          <h2 data-aos="fade-up" className="text-3xl/11 text-center font-bold">
            Foundation of Our Work
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-25 mt-20 py-10">
          {/* Card 1 */}
          <div data-aos="fade-up" className="border-2 border-pink-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col">
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                width={100}
                height={100}
                src="/images/Ourmission.png" alt="Mission" className="w-12 h-12" />
                <h3 
                className="font-bold text-xl bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Our mission is to empower businesses of all sizes, regions, and
                industries by giving them the resources, tactics, and platforms
                they require to successfully engage with their target clients.
                In order to promote meaningful engagement, long-term success,
                and sustainable growth in a market that is becoming more and
                more competitive, we take steps to close the gap between brands
                and the consumers who are actively looking for their products or
                services.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up" data-aos-delay="200" className="mb-20 border-2 border-pink-300 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 md:-mt-8">
            <div className="flex flex-col md:py-5">
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-2 mb-4">
                <Image
                width={100}
                height={100}
                src="/images/Ourvision.png" alt="Mission" className="w-12 h-12" />
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Our vision is to build a good legacy by constantly placing the
                needs and objectives of our clients, our employees, and the
                communities we serve at the center of all we do. We ensure an
                effort to establish strong relationships, sustain a culture of
                respect and honesty in order to make sure that our efforts not
                only lead to success but also improve the lives of those we come
                into contact with.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div data-aos="fade-up" data-aos-delay="400" className="border-2 border-pink-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col">
              {/* Icon and Title Side by Side */}
              <div className="flex items-center gap-2 mb-4">
                <Image 
                width={100}
                height={100}
                src="/images/Ourpurpose.png" alt="Mission" className="w-12 h-12" />
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  Our Purpose
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Our purpose is in providing measurable and substantial
                achievements for our clients, thereby allowing their businesses
                to grow, succeed, and maintain an edge over their competitors.
                Additionally, we cultivate a culture of innovation, professional
                growth, and continuous development among our employees, ensuring
                that we not only provide excellence today but also adapt to the
                evolving needs of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* CTA */}
    <div data-aos="fade-up" className="bg-gradient-to-r from-brandRed to-brandYellow  py-6 px-4 flex flex-col md:flex-row justify-center items-center gap-6 mx-auto max-w-7xl text-center md:text-left rounded-md">
    <p className="text-white text-xl md:text-2xl font-inter">
      All that is required is <span className="font-bold">one click for success</span>
    </p>
    <button onClick={openPopup}
    className="bg-brandGreen hover:bg-brandBlue text-white text-base md:text-xl font-semibold py-2 px-6 rounded-md shadow-md mt-2 md:mt-0">
      Reach Us Now
    </button>
    <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
    </div>
    {/* Featured Services */}
     <section className="min-h-screen flex flex-col items-center py-16 px-4 ">
          {/* Title Section */}
          <div className="text-center mb-16">
            <div data-aos="fade-right" className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 place-self-center mb-4"></div>
          </div>
    
          {/* Cards Section */}
     <ServicesSection/>



     </section>    
     {/* Contact */}
     <div data-aos="fade-up" className="relative bg-gradient-to-r from-yellow-200 to-green-300 rounded-lg mx-4 md:mx-16 flex items-center justify-between p-6 md:p-10">
      
      {/* Left Section */}
      <div className=" relative z-10 flex flex-col space-y-4 max-w-lg">
        <h2 className="text-xl md:text-3xl font-normal text-black">
          Ready to <span className="font-bold">Speak to an Expert?</span>
        </h2>

        <div className="gap-4 flex">
          <p className="font-bold mt-1 text-xl">Contact Now</p>

          <a
            href="tel:+917604921773"
            className="inline-flex items-center bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] text-white px-4 py-2 rounded-md text-sm shadow hover:shadow-lg transition-all duration-300"
          >
            {/* SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            +91-76049 21773
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 text-center bottom-0 z-20 hidden md:block">
        <Image
          src="/images/Call.png"
          alt="Speak to Expert"
          width={350}
          height={350}
          className="max-w-[350px] h-[350px] object-contain block mx-auto transform -translate-y-"
        />
      </div>

    </div>
    </div>
  )
}

export default About
