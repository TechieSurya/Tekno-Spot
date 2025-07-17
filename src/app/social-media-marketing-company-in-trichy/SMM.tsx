"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent} from '@/components/ui/card';
import { Users, TrendingUp, Target, Zap,  ArrowRight,  Camera, Video, Palette, Search,  Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ContactPopup from '@/components/ContactPopup';
import FAQ from './FAQ';

const SMM = () => {
  
    const [isPopupOpen, setIsPopupOpen] = useState(false);
              
                const openPopup = () => setIsPopupOpen(true);
                const closePopup = () => setIsPopupOpen(false);
          
          useEffect(() => {
              AOS.init({ duration: 1000, once: true });
            }, []);

  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Social Media Audit",
      description: "A successful social media strategy starts with a comprehensive audit of your online presence. We analyze your platforms, focusing on audience demographics, performance metrics, engagement rates, and competitor activities. This reveals insights for growth and highlights strengths and weaknesses in your strategy. Using our findings, we can boost your online visibility to align with your business goals. Companies that conduct regular audits often see engagement rates rise by up to 25% in six months.",
      delay:"0"
    },
    {
      icon: <Palette className="w-8 h-8 text-green-600" />,
      title: "Innovative Content Creation",
      description: "A social media marketing agency must create visually appealing posts that resonate with your audience. Research shows visual content is shared 40 times more than other types. Our creative team uses a data-driven approach to ensure your content is seen and shared, focusing on striking graphics and engaging copy.",
      delay:"200"
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-600" />,
      title: "Photography",
      description: "High-quality images are essential in social media marketing. Stunning photography establishes your brand's tone and visual identity. Our services provide professionally captured images that effectively showcase your business. Research shows that 67% of consumers believe product image quality affects their purchasing decisions, highlighting the importance of exceptional visuals.",
      delay:"400"
    },
    {
      icon: <Video className="w-8 h-8 text-orange-600" />,
      title: "Videography",
      description: "Video content is a powerful way to engage audiences. As a social media marketing agency, we create eye-catching videos that grab attention. With 91% of marketers viewing it as essential for social media, we produce promotional clips, behind-the-scenes looks, and product showcases to elevate your brand on Instagram, Facebook, and YouTube.",
      delay:"600"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Graphics Design",
      description: "Visuals in digital marketing are more effective than words. Our agency's skilled graphic designers transform your brand's vision into eye-catching images. Innovative layouts enhance brand visibility and make your content pop in busy feeds. Studies show that posts with relevant images receive 94% more engagement, highlighting the crucial role of design in social media marketing.",
      delay:"800"
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Influencer Marketing",
      description: "Increase your brand's visibility and worth. Working with influencers can greatly elevate your brand awareness and recognition. Team up with our social media specialists to develop a powerful influencer marketing strategy and build solid connections with influencers.",
      delay:"1000"
    }
  ];

 
  const whyChooseUs = [
    {
      stat: "4.8B",
      label: "Social Media Users Globally",
      description: "Vast audience potential across major platforms",
      delay:"0"
    },
    {
      stat: "73%",
      label: "Marketers Find It Effective",
      description: "Proven track record of success",
      delay:"200"
    },
    {
      stat: "93%",
      label: "Consider It Indispensable",
      description: "Essential for modern business growth",
      delay:"400"
    },
    {
      stat: "71%",
      label: "Buy Based on Social Recommendations",
      description: "Direct impact on purchasing decisions",
      delay:"600"
    }
  ];

  return (
    <div className="min-h-screen">
    

      {/* Hero Section - Similar to SEO Page */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-green-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div 
              data-aos="fade-right"
              className="inline-flex items-center px-4 py-2 bg-brandGreen border border-blue-200 rounded-full text-white text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                #1 Social Media Marketing Agency in Trichy
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 
                data-aos="fade-up"
                className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Get Social with the
                  <br />
                  <span className="text-brandBlue">Top Social Media Marketing Agency in Trichy</span>
                </h1>
              </div>
              
              {/* Description */}
              <p 
              data-aos="fade-up"
              className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl text-justify">
                Social Media Marketing Agencies play a vital role in the growth of businesses. Although 73% of marketers consider social media marketing effective, a significant 93% regard it as indispensable. These agencies support businesses in developing captivating content and overseeing online communities, enabling them to establish a robust online presence and engage with their audience.
              </p>
              
              {/* CTA Button */}
             <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                data-aos="fade-up"
                onClick={openPopup}
                size="lg"
                className="bg-brandBlue hover:bg-brandGreen text-white px-4 py-4 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                SPEAK TO AN EXPERT
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
               <ContactPopup isOpen={isPopupOpen} onClose={closePopup}/>
            </div>
            </div>
            
            {/* Right Column - Visual Elements */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Visual Card */}
                <div 
                data-aos="fade-left"
                className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Social Media Growth</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-sm">📈</div>
                        <div>
                          <div className="font-medium text-gray-900">Engagement Rate</div>
                          <div className="text-sm text-gray-600">+245% Growth</div>
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-500 ml-auto" />
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 font-bold text-sm">👥</div>
                        <div>
                          <div className="font-medium text-gray-900">Followers</div>
                          <div className="text-sm text-gray-600">+180% Increase</div>
                        </div>
                        <Users className="w-5 h-5 text-green-500 ml-auto" />
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600 font-bold text-sm">💰</div>
                        <div>
                          <div className="font-medium text-gray-900">Lead Generation</div>
                          <div className="text-sm text-gray-600">+320% Growth</div>
                        </div>
                        <Target className="w-5 h-5 text-green-500 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Info Section  */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 
              data-aos="fade-right"
              className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Featured <span className="text-brandBlue">Social Media Marketing Services</span>
              </h2>
              <h3 
              data-aos="fade-up"
              className="text-xl lg:text-2xl font-semibold text-brandGreen">
                Comprehensive Digital Marketing Solutions
              </h3>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Description */}
              <div 
              data-aos="fade-up"
              className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  A successful digital marketing strategy depends on diverse social media services tailored to corporate needs. It&#39;s crucial to select a social marketing agency that can handle all aspects of your strategy, whether you need content creation or online presence enhancement.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Research shows that 71% of consumers are more likely to buy based on social media recommendations, underscoring the importance of a strong social media presence. Our comprehensive approach ensures your brand connects with your audience across all major platforms.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Tekno Spot, our dedicated social media professionals combine top-notch design with captivating copy to consistently engage your audience with dynamic content. We ensure that every post we create aligns with your business objectives, target demographic, unique value propositions, and visual storytelling.
                </p>
              </div>

              {/* Right Column - Benefits Cards */}
              <div className="space-y-4">
                <Card 
                data-aos="fade-left"
                className="border-l-4 border-brandBlue shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="w-8 h-8 text-brandBlue mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Increased Engagement</h4>
                        <p className="text-gray-600">Drive meaningful interactions with your target audience across all platforms</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                data-aos="fade-left"
                data-aos-delay="200"
                className="border-l-4 border-brandGreen shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Users className="w-8 h-8 text-brandGreen mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Brand Awareness</h4>
                        <p className="text-gray-600">Build recognition and trust with your ideal customers in Trichy and beyond</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                data-aos="fade-left"
                data-aos-delay="400"
                className="border-l-4 border-brandYellow shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Target className="w-8 h-8 text-brandYellow mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Lead Generation</h4>
                        <p className="text-gray-600">Convert social media followers into qualified leads and customers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us Statistics */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 
                data-aos="fade-right"
                className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Why work with our <span className="text-brandBlue">Social Media Marketing agency in Trichy?</span>
                </h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <p 
                  data-aos="fade-up"
                  className="text-lg text-gray-600 leading-relaxed">
                    Organic social media is a powerful way to enhance brand visibility within your marketing strategy. Why is this important? With 4.8 billion social media users globally, a number that continues to grow, many of these individuals could become your customers. Share your products and services with a vast audience across major platforms like Facebook, Instagram, Youtube and LinkedIn.
                  </p>

                  {/* Stats Grid */}
                  <div 
                  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
                    {whyChooseUs.map((item, index) => (
                      <div 
                      data-aos="fade-up"
                      data-aos-delay={item.delay}
                      key={index} className="text-center">
                        <div className="text-4xl font-bold text-brandGreen mb-2">{item.stat}</div>
                        <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                        <div className="text-gray-600">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Our Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 pt-16 border-t border-gray-200">
            <div className="text-center space-y-4">
              <h3 
              data-aos="fade-right"
              className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className="text-brandBlue">Social Media Services</span>
              </h3>
              <p 
              data-aos="fade-up"
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive social media framework is designed to elevate your brand presence, attract valuable engagement, and deliver measurable results across all major platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                data-aos="fade-up"
                data-aos-delay={service.delay}
                key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 ">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-blue-200 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div data-aos="fade-up">
      <FAQ/>
    </div>
    </div>
  );
};

export default SMM