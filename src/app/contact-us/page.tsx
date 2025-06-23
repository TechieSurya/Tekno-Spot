import React from 'react'
import ContactInfo from './ContactInfo'
import EnquiryForm from './EnquiryForm'
import MapSection from './MapSelection'

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Enhanced Header */}
      <div className="backdrop-blur-sm shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-800 mb-6 tracking-wide">
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              We&#39;d love to connect with you. Reach out and let&#39;s start a conversation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information - Takes 1 column */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-1">
            <EnquiryForm/>
          </div>
        </div>
            {/* Map Section - Full width */}
        <div className="mt-20">
          <MapSection />
        </div>
      </div>

    </div>
  )
}

export default page