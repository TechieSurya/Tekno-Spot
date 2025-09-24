import React from 'react'
import Image from 'next/image';
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Discover",
    description:
      "Market research, brand positioning & audience analysis",
    icon: CheckCircleIcon,
  },
  {
    name: "Strategize",
    description:
      "Campaign blueprint aligned with business objectives",
    icon: CheckCircleIcon,
  },
  {
    name: "Design & Develop",
    description:
      "Crafting visuals, content, and user journeys",
    icon: CheckCircleIcon,
  },
  {
    name: "Deploy",
    description:
      "Launching across chosen platforms",
    icon: CheckCircleIcon,
  },
  {
    name: "Analyze",
    description:
      "Data‑driven performance tracking",
    icon: CheckCircleIcon,
  },
  {
    name: "Optimize",
    description:
      "Refining for better reach, results, and ROI",
    icon: CheckCircleIcon,
  },
];

const Mission = () => {
  return (
    <div className="w-full bg-white py-12 mt-2 px-5">
    <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-between gap-16">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <p
        data-aos="fade-right"
          className="w-15 h-1 space-y-4 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500
              text-transparent mb-4"
        ></p>
        <p 
        data-aos="fade-up"
        className='font-bold text-brandBlue text-xl'>Why Tekno Spot?</p>
        <h2 
        data-aos="fade-up"
        className="text-3xl md:text-4xl text-gray-900 mb-2">
          Your <span className="font-bold">Mission </span>our
          <span className="font-bold"> Vision </span> Process
        </h2>

        <p 
        data-aos="fade-right"
        className="text-lg text-yellow-500 font-semibold mb-2">
          Our Best Digital Marketing services in Trichy, that increase your business growth.

        </p>
        <div 
        data-aos="fade-right"
        className="text-gray-700 text-base/8 -tracking-tight">
          Average Digital Marketing doesn’t work – You need an experienced
          growth partner who knows what it takes to help your business grow!
          <p className="text-gray-700 text-base/8 tracking-widest ">
          With over milestones of success, we have refined our process to ensure
          your digital marketing campaigns are successful. In addition, we take
          the time to understand your business model, challenges, goals, and
          audience behaviors. Our Digital Marketing Agency creates a tailor-made
          strategy that captures attention and delivers real, measurable, and
          profitable results.</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt 
                        data-aos="fade-right"
                        className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute left-1 top-1 size-5 text-brandGreen"
                          />
                          {feature.name}
                        </dt>{" "} - 
                        <dd 
                        data-aos="fade-right"
                        className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>

        </div>
      </div>

      {/*Image */}
      <div className="relative inset-0 ">
        <Image
        width={100}
        height={100}
        src="/images/Ellipsee.png" alt="Ellipsee" className="absolute -mt-0 z-10"/>
      </div>

      {/* Image Section */}

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div 
        data-aos="fade-left"
        className="relative overflow-hidden">
          <Image width={400} height={300} src="/images/TeknoSpot-Tech.png" alt="Tekno Spot Tech Solutions" className="sm:w-[45rem] md:-ml-4 lg:-ml-0"/>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Mission
