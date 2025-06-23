"use client";

import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Code, Smartphone, Zap, Users, Globe, Rocket, Star, Phone, BarChart, DollarSign, MessageSquare, Award, Target, Lightbulb, Settings, CheckCircle, Shield, Clock, Eye, Handshake, Building2, Heart, GraduationCap, ShoppingCart, Dumbbell, Package, Factory, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactPopup from '@/components/ContactPopup';
import FAQ from './FAQ';
import Image from 'next/image';

const MobileApp = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
            
              const openPopup = () => setIsPopupOpen(true);
              const closePopup = () => setIsPopupOpen(false);
        
        useEffect(() => {
            AOS.init({ duration: 1000, once: true });
          }, []);


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
      </div>
    
      {/* Floating minimal icons with orbital animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-[orbit-1_8s_linear_infinite]">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
            <Code className="w-4 h-4 text-gray-600" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-[orbit-2_12s_linear_infinite]">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
            <Smartphone className="w-4 h-4 text-blue-600" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-[orbit-3_10s_linear_infinite]">
          <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center shadow-sm">
            <Zap className="w-4 h-4 text-purple-600" />
          </div>
        </div>
        <div className="absolute bottom-1/4 right-1/3 animate-[orbit-4_14s_linear_infinite]">
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center shadow-sm">
            <Globe className="w-4 h-4 text-green-600" />
          </div>
        </div>
      </div>
      <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div 
              data-aos="fade-right"
              className="inline-flex items-center px-4 py-2 bg-brandGreen rounded-full text-white text-sm font-medium">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Premium Mobile App Development Company
              </div>
              
              <h1 
              data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Best
                <span className="text-brandBlue"> Mobile App </span>
                Development Company in Trichy
              </h1>
              
              <p 
              data-aos="fade-up"
              className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Tekno Spot stands out as the Leading Mobile App Development Company in Trichy. We excel in crafting exceptional mobile app solutions that deliver impressive outcomes. As the preferred choice for clients across India, we prioritize customer satisfaction, employing a strategic app development approach and a committed team to create captivating apps that enhance your business&#39;s digital presence.
              </p>
            </div>

            <div 
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
              onClick={openPopup}
              size="lg" className="bg-brandBlue hover:bg-brandGreen text-white px-8 py-4 rounded-lg font-semibold group transition-all duration-300 shadow-lg hover:shadow-xl">
                Enquiry Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            
          </div>

          {/* Right content - Clean illustration */}
          <div className="relative">
            <div className="relative z-10 flex items-center justify-center">
              {/* Main illustration container */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Central mockup */}
                <div data-aos="fade-left">
                    <Image
                    width={400}
                    height={400}
                    src="/images/MobileAppDevelopmentCompany.png" alt="Mobile App Development Company in Trichy" />
                </div>
                {/* Clean floating elements with orbital animation */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center shadow-lg animate-[float-1_6s_ease-in-out_infinite]">
                  <Rocket className="w-6 h-6 text-yellow-600" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg animate-[float-2_8s_ease-in-out_infinite]">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center shadow-md animate-[float-3_7s_ease-in-out_infinite]">
                  <Smartphone className="w-4 h-4 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <h2 
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Find outstanding developers to meet your mobile app development requirements.
              </h2>
              
              <p 
              data-aos="fade-up"
              className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Schedule a meeting with our skilled mobile app developers to discuss your ideas and explore creative solutions that can boost both innovation and efficiency in your business.
              </p>
            </div>

            <div 
            data-aos="fade-right"
            className="pt-4">
              <Button size="lg" className="bg-brandBlue hover:bg-brandGreen text-white px-10 py-4 rounded-lg font-semibold group transition-all duration-300 shadow-lg hover:shadow-xl">
                <Phone className="mr-3 h-5 w-5" />
                +91-76049 21773
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* How Mobile Apps Can Boost Your Business Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 
              data-aos="fade-right"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                How Mobile Apps Can Boost Your
                <span className="text-blue-600"> Business Opportunities</span>
              </h2>
              
              <p 
              data-aos="fade-up"
              className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Mobile app development solutions offer a wide range of advantages for businesses in different sectors. Here are some of the main benefits:
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Business Assessment */}
              <Card 
              data-aos="fade-up"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Business Assessment</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Mobile applications enable companies to collect detailed information about user interactions, 
                        behaviors, sales trends, app performance, and other metrics. This data helps enhance their 
                        services and provides customers with a more enjoyable app experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Increase Revenue */}
              <Card 
              data-aos="fade-up"
              data-aos-delay="200"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Increase Revenue</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Research indicates that individuals are more likely to look for products or services on 
                        their smartphones instead of laptops. Having your business app readily available could 
                        significantly increase your sales opportunities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Improved Customer Engagement */}
              <Card 
               data-aos="fade-up"
              data-aos-delay="400"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Improved Customer Engagement</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Mobile applications provide customers with a convenient way to connect with your business. 
                        They can deliver tailored experiences, keep users updated on the latest promotions through 
                        push notifications, enhance customer support, and offer a variety of additional benefits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stand Out From the Crowd */}
              <Card 
               data-aos="fade-up"
              data-aos-delay="600"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Stand Out From the Crowd</h3>
                      <p className="text-gray-600 leading-relaxed">
                        A mobile application enhances brand exposure, acts as a direct marketing avenue, provides 
                        users with easy access to your services, and, with personalized features, becomes a strong 
                        asset to differentiate yourself in a competitive market.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="relative z-10 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 
               data-aos="fade-up"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What makes Tekno Spot the right choice for
                <span className="text-blue-600"> Digitizing your Product?</span>
              </h2>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Main timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
              
              <div className="space-y-16">
                {/* Step 1 - Personalized Choices */}
                <div className="relative flex flex-row items-center">
                  <div className="w-1/2 pr-12">
                    <Card 
                    data-aos="fade-right"
                    className="border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                            <Target className="w-6 h-6 text-brandRed" />
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">Personalized Choices</h3>
                            <p className="text-gray-600 leading-relaxed">
                              As a dedicated mobile app development agency based in Trichy, we offer tailored solutions that include distinctive features to meet your needs.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brandRed rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2 pl-12">
                    <div 
                    data-aos="fade-left"
                    className="flex items-center justify-start">
                      <div className="text-6xl font-bold text-red-100 select-none">01</div>
                    </div>
                  </div>
                </div>

                {/* Step 2 - Innovative Marketing Approaches */}
                <div className="relative flex flex-row-reverse items-center">
                  <div className="w-1/2 pl-12">
                    <Card 
                    data-aos="fade-left"
                    className="border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <Lightbulb className="w-6 h-6 text-brandBlue" />
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">Innovative Marketing Approaches</h3>
                            <p className="text-gray-600 leading-relaxed">
                              We are committed to delivering the most effective marketing strategies that can grow alongside your esteemed business.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brandBlue rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2 pr-12">
                    <div 
                    data-aos="fade-right"
                    className="flex items-center justify-end">
                      <div className="text-6xl font-bold text-blue-100 select-none">02</div>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Dynamic Code */}
                <div className="relative flex flex-row items-center">
                  <div className="w-1/2 pr-12">
                    <Card 
                    data-aos="fade-right"
                    className="border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                            <Settings className="w-6 h-6 text-brandYellow" />
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">Dynamic Code</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Our codes are designed to be lightweight, but they possess a surprising strength that challenges the typical perceptions of what lightweight codes can achieve.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brandYellow rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2 pl-12">
                    <div 
                    data-aos="fade-left"
                    className="flex items-center justify-start">
                      <div className="text-6xl font-bold text-yellow-100 select-none">03</div>
                    </div>
                  </div>
                </div>

                {/* Step 4 - Flawless Applications */}
                <div className="relative flex flex-row-reverse items-center">
                  <div className="w-1/2 pl-12">
                    <Card 
                    data-aos="fade-left"
                    className="border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                      <CardContent className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-brandGreen" />
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-xl font-bold text-gray-900">Flawless Applications</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Once the app is launched, we prioritize regular updates and actively engage with the community that forms around it.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brandGreen rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2 pr-12">
                    <div 
                    data-aos="fade-right"
                    className="flex items-center justify-end">
                      <div className="text-6xl font-bold text-green-100 select-none">04</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Timeline with Scrolling */}
            <div className="lg:hidden">
              <ScrollArea className="h-[600px] w-full">
                <div className="relative px-4 pb-8">
                  {/* Vertical timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                  
                  <div className="space-y-8">
                    {/* Step 1 - Personalized Choices */}
                    <div className="relative flex items-start space-x-6 animate-fade-in">
                      <div className="flex-shrink-0 w-8 h-8 bg-brandRed rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1 min-h-[120px]">
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-red-100 select-none">01</span>
                        </div>
                        <Card className="border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                <Target className="w-5 h-5 text-brandRed" />
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-lg font-bold text-gray-900">Personalized Choices</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  As a dedicated mobile app development agency based in Trichy, we offer tailored solutions that include distinctive features to meet your needs.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Step 2 - Innovative Marketing Approaches */}
                    <div className="relative flex items-start space-x-6 animate-fade-in">
                      <div className="flex-shrink-0 w-8 h-8 bg-brandBlue rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1 min-h-[120px]">
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-blue-100 select-none">02</span>
                        </div>
                        <Card className="border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                <Lightbulb className="w-5 h-5 text-brandBlue" />
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-lg font-bold text-gray-900">Innovative Marketing Approaches</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  We are committed to delivering the most effective marketing strategies that can grow alongside your esteemed business.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Step 3 - Dynamic Code */}
                    <div className="relative flex items-start space-x-6 animate-fade-in">
                      <div className="flex-shrink-0 w-8 h-8 bg-brandYellow rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1 min-h-[120px]">
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-yellow-200 select-none">03</span>
                        </div>
                        <Card className="border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                                <Settings className="w-5 h-5 text-brandYellow" />
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-lg font-bold text-gray-900">Dynamic Code</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  Our codes are designed to be lightweight, but they possess a surprising strength that challenges the typical perceptions of what lightweight codes can achieve.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Step 4 - Flawless Applications */}
                    <div className="relative flex items-start space-x-6 animate-fade-in">
                      <div className="flex-shrink-0 w-8 h-8 bg-brandGreen rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <div className="flex-1 min-h-[120px]">
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-green-200 select-none">04</span>
                        </div>
                        <Card className="border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-brandGreen" />
                              </div>
                              <div className="space-y-2">
                                <h3 className="text-lg font-bold text-gray-900">Flawless Applications</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  Once the app is launched, we prioritize regular updates and actively engage with the community that forms around it.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>

      {/* Why Tekno Spot Section */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 
              data-aos="fade-up"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Why Tekno Spot as Your Perfect
                <span className="text-brandBlue"> Mobile App Development Partner</span>
              </h2>
              
              <p 
               data-aos="fade-up"
              className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Choose Tekno Spot for your customized mobile app development requirements and benefit from our proven track record, skilled experts, and commitment to delivering creative solutions that improve your business processes.
              </p>
            </div>

            {/* Features Grid */}
            <div 
             data-aos="fade-up"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Strong Infrastructure */}
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8 h-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <Shield className="w-8 h-8 text-brandBlue" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Strong Infrastructure</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        Our modern infrastructure includes the latest hardware, sophisticated application tools, and secure networking solutions, all designed to maintain seamless development processes and protect data integrity during every phase of the project.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experienced Experts */}
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8 h-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Experienced Experts</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        No matter if you&#39;re creating a native iOS app, an Android app, or a cross-platform solution, our developers possess more than just coding expertise; they are committed to keeping abreast of the latest trends and best practices in mobile app development technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timely Delivery */}
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8 h-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <Clock className="w-8 h-8 text-brandGreen" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Timely Delivery</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        We effectively track the project&#39;s progress and keep you informed by following agile best practices and using advanced productivity tools for project planning. This method enables us to deliver your mobile app punctually while ensuring it meets the highest quality standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            
              {/* Transparency and Understanding */}
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8 h-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                      <Eye className="w-8 h-8 text-brandYellow" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Transparency and Understanding</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        We prioritize complete transparency by providing clear updates on our progress, timelines, and deliverables, while also incorporating your feedback to improve the project.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Adaptable Collaboration Frameworks */}
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8 h-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                      <Handshake className="w-8 h-8 text-brandRed" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Adaptable Collaboration Frameworks</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        We prioritize our clients&#39; needs by providing the flexibility to select engagement models that suit them best. This allows them to adapt and switch between options as their requirements evolve, fostering a long-term and dependable partnership.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support & Maintenance */}
              <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-8 h-full">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                      <Settings className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">Support & Maintenance</h3>
                      <p className="text-gray-600 leading-relaxed text-justify">
                        Our commitment doesn&#39;t end at deployment. We provide round-the-clock support and regular maintenance services to ensure your app remains up-to-date, secure, and performing optimally as your business grows and evolves.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Button */}
            <div 
             data-aos="fade-right"
            className="text-center mt-12">
              <Button 
              onClick={openPopup}
              size="lg" className="bg-brandBlue hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold group transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sectors We Collaborate With Section */}
      <div className="relative z-10 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center space-y-6 mb-16">
              <h2 
               data-aos="fade-up"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Sectors We
                <span className="text-brandBlue"> Collaborate With</span>
              </h2>
              
              <p 
               data-aos="fade-up"
              className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                We work across diverse industries, delivering innovative mobile solutions tailored to each sector&#39;s unique challenges and opportunities.
              </p>
            </div>

            {/* Sectors Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* FPO */}
              <Card 
               data-aos="fade-right"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-yellow-200 transition-colors duration-300">
                      <Wheat className="w-8 h-8 text-brandYellow" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">FPO</h3>
                    <p className="text-gray-600 text-sm">Farmer producer organization solutions</p>
                  </div>
                </CardContent>
              </Card>
              {/* Real Estate */}
              <Card 
              data-aos="fade-right"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                      <Building2 className="w-8 h-8 text-brandBlue" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Real Estate</h3>
                    <p className="text-gray-600 text-sm">Property management and sales platforms</p>
                  </div>
                </CardContent>
              </Card>

              {/* Healthcare */}
              <Card 
              data-aos="fade-right"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-red-200 transition-colors duration-300">
                      <Heart className="w-8 h-8 text-brandRed" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Healthcare</h3>
                    <p className="text-gray-600 text-sm">Medical apps and patient care solutions</p>
                  </div>
                </CardContent>
              </Card>

              {/* Education */}
              <Card 
              data-aos="fade-right"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-purple-200 transition-colors duration-300">
                      <GraduationCap className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Education</h3>
                    <p className="text-gray-600 text-sm">E-learning and educational platforms</p>
                  </div>
                </CardContent>
              </Card>

              {/* Grocery */}
              <Card 
              data-aos="fade-left"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors duration-300">
                      <ShoppingCart className="w-8 h-8 text-brandGreen" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Grocery</h3>
                    <p className="text-gray-600 text-sm">Online grocery and delivery apps</p>
                  </div>
                </CardContent>
              </Card>

              {/* Fitness */}
              <Card 
              data-aos="fade-left"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-orange-200 transition-colors duration-300">
                      <Dumbbell className="w-8 h-8 text-brandRed" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Fitness</h3>
                    <p className="text-gray-600 text-sm">Health tracking and workout apps</p>
                  </div>
                </CardContent>
              </Card>

              {/* E-Commerce */}
              <Card 
              data-aos="fade-left"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-pink-200 transition-colors duration-300">
                      <Package className="w-8 h-8 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">E-Commerce</h3>
                    <p className="text-gray-600 text-sm">Online retail and marketplace solutions</p>
                  </div>
                </CardContent>
              </Card>

              {/* Manufacturing */}
              <Card 
              data-aos="fade-left"
              className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-indigo-200 transition-colors duration-300">
                      <Factory className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Manufacturing</h3>
                    <p className="text-gray-600 text-sm">Industrial automation and tracking</p>
                  </div>
                </CardContent>
              </Card>

              
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p 
              data-aos="fade-up"
              className="text-lg text-gray-600 mb-6">
                Don&#39;t see your industry? We adapt our expertise to any sector.
              </p>
              <Button 
              data-aos="fade-left"
              onClick={openPopup}
              size="lg" className="bg-brandBlue hover:bg-brandGreen text-white px-8 py-3 rounded-lg font-semibold group transition-all duration-300 shadow-lg hover:shadow-xl">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* FAQs */}
      <div data-aos="fade-up">
        <FAQ/>
      </div>
      

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes orbit-1 {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(40px, -20px) rotate(90deg); }
            50% { transform: translate(20px, -40px) rotate(180deg); }
            75% { transform: translate(-20px, -20px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          
          @keyframes orbit-2 {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-30px, 25px) rotate(90deg); }
            50% { transform: translate(-60px, 0) rotate(180deg); }
            75% { transform: translate(-30px, -25px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          
          @keyframes orbit-3 {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(35px, 15px) rotate(90deg); }
            50% { transform: translate(0, 30px) rotate(180deg); }
            75% { transform: translate(-35px, 15px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          
          @keyframes orbit-4 {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-25px, -30px) rotate(90deg); }
            50% { transform: translate(-50px, 0) rotate(180deg); }
            75% { transform: translate(-25px, 30px) rotate(270deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          
          @keyframes float-1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes float-2 {
            0%, 100% { transform: translateX(0px) rotate(0deg); }
            50% { transform: translateX(15px) rotate(-180deg); }
          }
          
          @keyframes float-3 {
            0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
            33% { transform: translate(10px, -10px) rotate(120deg); }
            66% { transform: translate(-10px, -5px) rotate(240deg); }
          }
          
          @keyframes animate-pulse {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.5); }
          }
          
          @keyframes animate-bounce {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `
      }} />
    </div>
  )
}

export default MobileApp