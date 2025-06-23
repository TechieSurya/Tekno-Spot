"use client";
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Dumbbell, Factory, GraduationCap, Heart, Package, ShoppingCart, Wheat } from 'lucide-react';
import ContactPopup from '@/components/ContactPopup';


const Sectors = () => {

     const [isPopupOpen, setIsPopupOpen] = useState(false);
                
                  const openPopup = () => setIsPopupOpen(true);
                  const closePopup = () => setIsPopupOpen(false);
            
            useEffect(() => {
                AOS.init({ duration: 1000, once: true });
              }, []);
  return (
    <div>
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
                We work across diverse industries, delivering innovative digital solutions tailored to each sector&#39;s unique challenges and opportunities.
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
              <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sectors