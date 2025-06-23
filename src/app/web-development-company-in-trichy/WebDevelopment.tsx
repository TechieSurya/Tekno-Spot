"use client";

import ContactPopup from '@/components/ContactPopup';
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Check, ArrowRight } from "lucide-react";

import { 
  Code2, 
  Server, 
  Palette, 
  Cloud, 
  CheckCircle,
  Star
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { 
  ShoppingCart, 
  Calendar, 
  Building2, 
  Globe, 
  GraduationCap, 
  BarChart3 
} from "lucide-react";

import { Card, CardContent } from '@/components/ui/card';
import FAQ from './FAQ';
import Illustration from './Illustration';
import RoadmapSection from '@/components/RoadmapSection';
import Image from 'next/image';

const benefits = [
    "Affordable Strategy",
    "Varied Industry Expertise", 
    "Technological Adaptability and Enhanced Skillset",
    "Performance and Framework Integration Focused Development",
    "Global Expertise & Unified Communication"
];


const services = [
  {
    title: "Online Marketplace Platforms",
    icon: ShoppingCart,
    description: "Build robust e-commerce platforms that connect buyers and sellers with advanced features and secure payment processing.",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Event Ticketing Platforms",
    icon: Calendar,
    description: "Create comprehensive event management systems with real-time booking, seat selection, and automated notifications.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Business Directory and Listing Sites",
    icon: Building2,
    description: "Develop searchable directories with advanced filtering, reviews, and location-based services for businesses.",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Multilingual Websites",
    icon: Globe,
    description: "Design websites that speak to global audiences with seamless language switching and cultural adaptations.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "LMS Applications",
    icon: GraduationCap,
    description: "Build powerful Learning Management Systems with course creation, progress tracking, and interactive assessments.",
    gradient: "from-indigo-500 to-blue-600"
  },
  {
    title: "ERP System for Small Businesses",
    icon: BarChart3,
    description: "Streamline business operations with integrated resource planning, inventory management, and analytics dashboards.",
    gradient: "from-violet-500 to-purple-600"
  }
];

const webservices = [
  {
    title: "Front-End Development Services",
    icon: Palette,
    description: "Tekno Spot designs intuitive and user-friendly interfaces that provide a smooth user experience (UX). We leverage contemporary front-end frameworks such as React, Angular, and Vue.js to transform intricate concepts into beautiful applications.",
    gradient: "from-blue-500 to-cyan-600",
    features: ["React & Angular", "Next JS", "Responsive Design", "UX/UI Optimization"],
  },
  {
    title: "Back-End Development Services",
    icon: Server,
    description: "Our back-end development focuses on creating scalable, secure, and dependable solutions that ensure your application operates seamlessly. We leverage advanced technologies such as Node.js, Python, and SQL/NoSQL databases.",
    gradient: "from-green-500 to-teal-600",
    features: ["Node.js & Python", "SQL/NoSQL Databases", "Scalable Architecture", "High Performance"],
  },
  {
    title: "Custom Web App Development",
    icon: Code2,
    description: "Looking to develop one-of-a-kind applications tailored to your unique requirements? Our approach emphasizes adaptability, growth potential, and outstanding user experience with over ten years of expertise.",
    gradient: "from-purple-500 to-pink-600",
    features: ["Tailored Solutions", "5+ Years Experience", "E-commerce & Healthcare", "Finance Expertise"],
  },
  {
    title: "SaaS Application Development",
    icon: Cloud,
    description: "SaaS solutions provide the flexibility needed to accommodate your business expansion. Our cloud-native strategy ensures scalable, secure, and budget-friendly applications using AWS Lambda and Kubernetes.",
    gradient: "from-orange-500 to-red-600",
    features: ["Cloud-Native", "AWS Lambda", "Kubernetes", "Multi-Tenant Solutions"],
  },
  {
    title: "Web Portal Development",
    icon: Globe,
    description: "Our innovative web portals consolidate all your online services into a single, convenient location with real-time dashboards, tracking systems, and sophisticated reporting tools.",
    gradient: "from-indigo-500 to-blue-600",
    features: ["Real-time Dashboards", "Patient Portals", "LMS Systems", "Order Tracking"],
  },
];

const WebDevelopment = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
        
          const openPopup = () => setIsPopupOpen(true);
          const closePopup = () => setIsPopupOpen(false);
    
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
  return (
    
    <div className="min-h-screen bg-background py-16 px-6 md:px-12 lg:px-32 mx-auto ">
        {/* Hero Section */}
        <div className="relative overflow-hidden max-w-7xl mx-auto">
            <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-0 md:px-10 lg:px-20 py-2">
              {/* Left Side Content */}
              <div className="w-full md:w-1/2 max-w-lg text-left">
                <h1 data-aos="fade-up" className="text-yellow-500 text-md mb-4 font-inter font-semibold">
                  Trichy’s Leading Web Application Builders
                </h1>
                <h2 data-aos="fade-up" className="text-2xl md:text-4xl leading-tight font-inter">
                 Best  <span className="font-bold bg-gradient-to-r from-brandBlue via-purple-500 to-brandRed bg-clip-text text-transparent">Web Development
                  <br />
                 </span>
                    Company in Trichy                </h2>
        
                <p data-aos="fade-up" className="text-gray-600 mt-6 text-base leading-relaxed tracking-wide text-justify">
                  We offer technical consulting and tailored website development services, specifically designed for clients with unique back-end features that need integration.
                </p>
        
                <button
                data-aos="fade-right" 
                onClick={openPopup}
                className="mt-8 group flex items-center px-6 py-3 bg-brandBlue text-white font-medium rounded-lg hover:bg-brandGreen transition duration-300">
                  Enquiry Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
              </div>
        
              {/* Right Side Image */}
              <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="/images/WebDevelopmentCompany.png"
                  alt="Best Web Design Company in Trichy"
                  width={500}
                  height={500}
                  className="w-full max-w-md"
                />
              </div>
            </section>

        
          </div>
      {/* Searching for... */}
        <div className="relative overflow-hidden ">
      {/* Animated Background Gradient Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-300/15 to-cyan-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Side - Text Content */}
          <div 
          data-aos="fade-left"
          className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            {/* Gradient Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-brandBlue via-purple-500 to-brandRed rounded-full mb-6 mx-auto lg:mx-0"></div>
            
            <h1 className="text-2xl lg:text-4xl  leading-tight mb-6">
              Searching for a{" "}  Reliable <br className="hidden sm:block" />
              <span className="font-bold bg-gradient-to-r from-brandBlue via-purple-600 to-brandRed bg-clip-text text-transparent">
                Web
                Application Development <br className="hidden sm:block" />
              </span>
              Company?
            </h1>
            
            {/* CTA Button for mobile */}
            <div className="block lg:hidden mt-8">
              <button 
              onClick={() => (window.location.href = 'tel:+917604921773')}
              className="bg-brandBlue hover:to-brandGreen text-white px-4 py-4 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>

          {/* Right Side - Content Card */}
          <div 
          data-aos="fade-right"
          className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Character Image - Hidden on mobile for better layout */}
              <div className="hidden lg:block absolute -left-16 -top-28 z-20">
                <Image
                  src="/images/Charater.png"
                  alt="Character illustration"
                  width={200}
                  height={200}
                  className="w-44 h-56 object-contain transform scale-x-[-1] hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Main Content Card */}
              <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-20 blur-sm"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30"></div>

                {/* Text Content */}
                <div className="relative z-10 space-y-4">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    We prioritize an efficient workflow to guarantee accuracy throughout each phase of the development process. Partnering with us means you receive bespoke web applications designed to meet your unique business requirements. Our specialists adopt a mobile-first strategy, delivering an exceptional user experience on every device.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    If you&#39;re looking to create a minimum viable product (MVP) to explore your business idea or a proof of concept (PoC) to confirm your concept, we will collaborate with you closely. This partnership will help keep your project aligned from the beginning. We also incorporate tailored features into your app until it meets your needs. The personalized app can evolve and enhance as your business grows.
                  </p>

                  {/* Desktop CTA */}
                  <div className="hidden lg:block pt-4">
                    <button 
                    onClick={openPopup}
                    className="bg-brandBlue hover:bg-brandGreen text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                      Start Your Project
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className="hidden sm:block absolute -bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
        </div>
      {/* Custom Web Application */}
       <section 
       className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Custom Web Application Development
          </h2>
          <p 
          data-aos="fade-up"
          className="text-xl font-medium text-brandYellow max-w-4xl mx-auto">
            We specialize in building cutting-edge web applications tailored to your business needs
          </p>
        </div>
        
        <div 
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 rounded-full mx-auto`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
       </section>
       {/* Web Application Development Services */}
       <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
          data-aos="fade-up"
          className="inline-flex items-center gap-2 bg-darkBlue text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            Our Web Application Development Services
          </div>
          <h2 
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            We Turn Your Ideas Into
            <span className="bg-gradient-to-r from-brandBlue via-purple-600 to-brandRed bg-clip-text text-transparent"> Digital Realities</span>
          </h2>
          <p 
          data-aos="fade-up"
          className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Committed to guiding you from the initial concept all the way to launch. 
            Reach out to us today to explore our comprehensive web development services!
          </p>
        </div>

        {/* Services Carousel */}
        <div 
        data-aos="fade-up"
        className="relative">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-6">
              {webservices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/2">
                    <div className="h-full">
                      <div className="bg-card border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className={`h-1 w-16 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          {/* Mobile navigation hint */}
          <div className="text-center mt-6 md:hidden">
            <p className="text-sm text-muted-foreground">Swipe to see more services</p>
          </div>
        </div>
      </div>
       </section>
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-purple-600/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let&#39;s discuss how we can bring your vision to life with our custom web development solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-muted-foreground mb-6">Send us your project details and requirements</p>
              <Button 
              onClick={openPopup}
              variant="outline" className="group-hover:bg-brandBlue group-hover:text-white transition-all duration-300">
                Send Email
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Call Us</h3>
              <p className="text-muted-foreground mb-6">Speak directly with our development team</p>
              <Button 
              onClick={() => (window.location.href = 'tel:+917604921773')}
              variant="outline" className="group-hover:bg-brandGreen group-hover:text-white transition-all duration-300">
                Schedule Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      </section>
      {/* Why Choose Tekno Spot */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Illustration */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <Illustration/>
        </div>

        {/* Right Column - Content */}
        <div className="order-1 lg:order-2 space-y-8">
          {/* Purple accent line */}
          <div 
          data-aos="fade-left"
          className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
          
          {/* Main heading */}
          <div className="space-y-4">
            <h1 
            data-aos="fade-up"
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Tekno Spot
              </span>{" "}
              for Web Application Development?
            </h1>
          </div>

          {/* Description */}
          <p 
          data-aos="fade-up"
          className="text-lg text-gray-600 leading-relaxed text-justify">
            Tekno Spot merges extensive industry expertise with a commitment to technology and client 
            requirements. Continue reading to discover why we are your top choice for web application 
            development!
          </p>

          {/* Benefits list */}
          <div 
          data-aos="fade-up"
          className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 group cursor-pointer p-3 rounded-lg hover:bg-white/60 transition-all duration-300 hover:shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button 
            data-aos="fade-up"
            onClick={openPopup}
            className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-brandGreen hover:to-brandGreen text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started Today
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
      </div>
      <RoadmapSection/>
      {/* FAQ */}
      <FAQ/>
    </div>
  )
}

export default WebDevelopment