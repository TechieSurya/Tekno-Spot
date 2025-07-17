import React from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
    const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "surya@teknospot.in",
      link: "mailto:surya@teknospot.in",
      color: "text-brandBlue"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 76049 21773",
      link: "tel:+917604921773",
      color: "text-brandGreen"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "EDII - TABIF, Anbil Dharmalingam Agricultural College and Research Institute, Navalurkottapattu, Trichy-620009",
      link: "https://maps.app.goo.gl/fknwWWT2FGrbtZWcA",
      color: "text-brandRed"
    }
  ];
   return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-light text-gray-800 mb-8">Get in Touch</h2>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const IconComponent = detail.icon;
          return (
            <div key={index} className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className={`flex-shrink-0 w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform duration-200`}>
                <IconComponent className={`w-5 h-5 ${detail.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800 mb-1">{detail.title}</h3>
                <a 
                  href={detail.link}
                  className="text-gray-600 hover:text-gray-800 transition-colors text-base leading-relaxed block text-justify"
                >
                  {detail.value}
                </a>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-10 pt-8 border-t border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <Clock className="w-5 h-5 text-purple-500" />
          <h3 className="font-medium text-gray-800">Business Hours</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between items-center p-2 rounded hover:bg-gray-50 transition-colors">
            <span>Monday - Friday</span>
            <span className="font-medium">10:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded hover:bg-gray-50 transition-colors">
            <span>Saturday</span>
            <span className="font-medium">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded hover:bg-gray-50 transition-colors">
            <span>Sunday</span>
            <span className="font-medium text-red-500">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo