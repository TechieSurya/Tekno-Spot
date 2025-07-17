"use client";
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, TrendingUp, Users, Award,Target, CheckCircle, DollarSign, Shield, MapPin, ShoppingCart, Video, Link, Code, FileText, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContactPopup from '@/components/ContactPopup';
import FAQ from './FAQ';


const SEO = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
            
              const openPopup = () => setIsPopupOpen(true);
              const closePopup = () => setIsPopupOpen(false);
        
        useEffect(() => {
            AOS.init({ duration: 1000, once: true });
          }, []);
  return (
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
              Trichy&#39;s Most Trusted SEO Agency
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 
              data-aos="fade-up"
              className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-brandBlue">#1 SEO Company </span>
                in Trichy
              </h1>
              
              <div 
              data-aos="fade-up"
              className="text-xl font-semibold text-green-600 bg-green-50 inline-block px-2 py-2 rounded-lg">
                Guaranteed 1st page Google Rankings in 90 days
              </div>
            </div>
            
            {/* Description */}
            <p 
            data-aos="fade-up"
            className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl text-justify">
              Every day, people turn to Google to search for products and services. Securing a position on Page 1 helps your business gain prominence. Greater visibility leads to more traffic, inquiries, and ultimately, increased sales.
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
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Google Search Results</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-sm">1</div>
                      <div>
                        <div className="font-medium text-gray-900">Your Business Name</div>
                        <div className="text-sm text-gray-600">www.yourbusiness.com</div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-500 ml-auto" />
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg opacity-60">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold text-sm">2</div>
                      <div>
                        <div className="font-medium text-gray-700">Competitor #1</div>
                        <div className="text-sm text-gray-500">www.competitor1.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg opacity-40">
                      <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-bold text-sm">3</div>
                      <div>
                        <div className="font-medium text-gray-700">Competitor #2</div>
                        <div className="text-sm text-gray-500">www.competitor2.com</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div 
              data-aos="fade-left"
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 ">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Monthly Visitors</div>
                    <div className="text-lg font-bold text-green-600">+245%</div>
                  </div>
                </div>
              </div>
              
              <div 
              data-aos="fade-right"
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Revenue Growth</div>
                    <div className="text-lg font-bold text-blue-600">+180%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is SEO Section */}
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 
            data-aos="fade-right"
            className="text-3xl lg:text-4xl font-bold text-gray-900">
              What is <span className="text-brandBlue">SEO</span>
            </h2>
            <h3 
            data-aos="fade-up"
            className="text-xl lg:text-2xl font-semibold text-brandGreen">
              Search Engine Optimization
            </h3>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <div 
            data-aos="fade-up"
            className="space-y-6 text-justify">
              <p className="text-lg text-gray-600 leading-relaxed">
                Search Engine Optimization (SEO) enhances your website&#39;s presence on search engine results pages (SERPs) such as Google. A higher ranking attracts more visitors, which can lead to increased traffic, potential leads, and sales.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Everyone aims for the top position in Google&#39;s search results, and it&#39;s easy to see why: the majority of users don&#39;t venture beyond the first page. Achieving a higher rank fosters trust with your audience, lending credibility to your site and driving more traffic and conversions.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                As a leading SEO agency in Trichy, ImPossible Marketing employs effective white-hat techniques to elevate your business online. Our comprehensive, results-oriented approach includes thorough keyword research, content optimization, on-page SEO, off-page SEO, and technical SEO. If your objective is to enhance brand visibility, you&#39;ve come to the right place — our SEO services are tailored specifically for that purpose.
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
                      <h4 className="font-semibold text-gray-900 mb-2">Increased Visibility</h4>
                      <p className="text-gray-600">Higher rankings on Google attract more visitors to your website</p>
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
                    <Target className="w-8 h-8 text-brandGreen mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Targeted Traffic</h4>
                      <p className="text-gray-600">Attract qualified leads who are actively searching for your services</p>
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
                    <CheckCircle className="w-8 h-8 text-brandYellow mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Build Trust & Credibility</h4>
                      <p className="text-gray-600">Top rankings establish your business as an authority in your industry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* SEO Strategies Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 
              data-aos="fade-right"
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-brandBlue">SEO Strategies</span>
              </h3>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div 
              data-aos="fade-up"
              className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  It&#39;s important to understand that SEO isn&#39;t a straightforward formula to follow. While there are established best practices, there&#39;s no one-size-fits-all approach that applies universally to every brand, company, or organization. Additionally, strategies that succeed in one sector may yield different results in another.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  At Tekno Spot, we&#39;ve developed a systematic approach to optimize your website effectively. We begin with a thorough SEO audit to pinpoint areas that need enhancement. This audit helps us uncover technical SEO issues such as missing XML sitemaps, slow loading times, and broken links. We also suggest relevant keywords for your metadata and enhance the on-page content of your target pages. Following this, we create a backlink acquisition strategy to support the modifications made to your site, ultimately boosting its rankings and attracting targeted visitors.
                </p>

        
              </div>
            </div>
          </div>

          {/* Benefits of Investing in SEO Services Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 
              data-aos="fade-right"
              className="text-3xl lg:text-4xl font-bold text-gray-900">
                The Benefits of Investing in <span className="text-brandBlue">SEO Services</span>
              </h3>
              <p
              data-aos="fade-up"
              className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transform your business growth with strategic SEO investment that delivers measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 - Increase Website Traffic */}
              <div 
              data-aos="fade-up"
              className="group relative bg-red-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-[fade-in-up_0.6s_ease-out_0.1s_both]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-600/10 rounded-full -mr-4 -mt-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brandRed rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Increase Website Traffic</h4>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Attract a consistent stream of potential clients who are actively looking for your products or services
                  </p>
                </div>
              </div>

              {/* Benefit 2 - Boost Leads and Sales */}
              <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="group relative bg-blue-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-[fade-in-up_0.6s_ease-out_0.2s_both]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-600/10 rounded-full -mr-4 -mt-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brandBlue rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Boost Your Leads and Sales</h4>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Turn Google into your 24/7 sales engine, effortlessly generating daily leads and sales without ongoing costs
                  </p>
                </div>
              </div>

              {/* Benefit 3 - Affordable Expansion */}
              <div 
              data-aos="fade-up"
              data-aos-delay="400"
              className="group relative bg-yellow-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-[fade-in-up_0.6s_ease-out_0.3s_both]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600/10 rounded-full -mr-4 -mt-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brandYellow rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Affordable Expansion</h4>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Generate consistent organic traffic and positive results without ongoing financial investment, making SEO a cost-effective and sustainable marketing strategy
                  </p>
                </div>
              </div>

              {/* Benefit 4 - Trust and Credibility */}
              <div 
              data-aos="fade-up"
              data-aos-delay="600"
              className="group relative bg-green-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-[fade-in-up_0.6s_ease-out_0.4s_both]">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-600/10 rounded-full -mr-4 -mt-4 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brandGreen rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Establish Trust and Credibility</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Rank high in search results to position your brand as a trusted authority and outpace competitors
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Our SEO Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 pt-16 border-t border-gray-200">
          <div className="text-center space-y-4">
            <h3 
            data-aos="fade-right"
            className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our <span className="text-brandBlue">SEO Services</span>
            </h3>
            <p 
            data-aos="fade-up"
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
              Our all-encompassing SEO framework is crafted to elevate business rankings, draw in valuable traffic, and deliver quantifiable outcomes. Although our packages encompass all essential SEO components, we customize strategies to align with your specific business requirements. For instance, Local SEO is vital for companies focusing on customers in Trichy, whereas International SEO supports those looking to grow on a global scale. Regardless of whether you operate a corporate website, an e-commerce platform, or a content site, we enhance every facet of your SEO campaign to ensure success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* On-Page SEO */}
            <Card 
            data-aos="fade-up"
            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-green-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">On-Page SEO</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  This encompasses all SEO enhancements applied directly to the web page. We will refine your website&#39;s content, meta tags, images, and internal links to boost relevance for target keywords and elevate search visibility.
                </p>
              </CardContent>
            </Card>

            {/* Off-Page SEO */}
            <Card 
            data-aos="fade-up"
              data-aos-delay="400"
            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Link className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Off-Page SEO</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Off-Page SEO encompasses elements beyond your website that influence search engine rankings and visibility, including backlinks and the quantity and quality of sites that link to you. We enhance your website&#39;s domain authority by building links and removing harmful links, thereby improving your search engine rankings.
                </p>
              </CardContent>
            </Card>

            {/* Technical SEO */}
            <Card 
            data-aos="fade-up"
              data-aos-delay="600"
            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-orange-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Technical SEO</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  A slow website can adversely affect user experience and search engine rankings because of delayed loading times and different technical issues. We will perform a comprehensive audit to pinpoint and fix site errors, boost loading speed, guarantee mobile responsiveness, and enhance crawlability.
                </p>
              </CardContent>
            </Card>

            {/* Local SEO */}
            <Card 
            data-aos="fade-up"
            data-aos-delay="800"
            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Local SEO</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  For companies focusing on Indian customers, we enhance your website for local search visibility, ensuring you show up in searches like &#39;Trichy&#39; and &#39;near me&#39;. This involves handling Google My Business profiles, local citations, customer feedback, and keywords specific to your location.
                </p>
              </CardContent>
            </Card>

            {/* E-Commerce SEO */}
            <Card 
            data-aos="fade-up"
            data-aos-delay="1000"
            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-indigo-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <ShoppingCart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">E-Commerce SEO</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We will enhance your product and category pages, along with their descriptions, to draw in the right customers for your E-Commerce business. By focusing on user experience and strategically targeting commercial keywords, we will increase traffic that leads to sales.
                </p>
              </CardContent>
            </Card>

            {/* Video SEO */}
            <Card 
            data-aos="fade-up"
              data-aos-delay="1200"
            className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 hover:border-pink-200 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-pink-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Video SEO</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  By enhancing your video titles, tags, descriptions, and thumbnails, we help your content achieve better rankings on platforms such as YouTube and Google search results.
                </p>
              </CardContent>
            </Card>
          </div>
        {/* CTA */}
      
      <div 
      data-aos="fade-up"
      className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 
          data-aos="fade-up"
          data-aos-delay="1500"
          className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-delay="1700"
          className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No matter if you operate a small business or a large corporation, our SEO services in Trichy—both local and global—can provide enduring benefits and help maintain your competitive edge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card 
          data-aos="fade-up"
          data-aos-delay="1900"
          className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
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
          
          <Card 
          data-aos="fade-up"
          data-aos-delay="2000"
          className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
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
     
        </div>
      </div>
    </section>
    <div data-aos="fade-up">
      <FAQ/>
    </div>
    
    </section>
    
  )
}

export default SEO