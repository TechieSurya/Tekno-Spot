"use client";


const MapSection = () => {
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      
      <div className="h-100 bg-gradient-to-br from-gray-100 to-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.764579400906!2d78.5987944!3d10.752618600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa61060ad60697%3A0x22fb1c61e16e5a7c!2sTekno%20Spot%20-%20Best%20Web%20Design%2C%20Web%20Development%2C%20App%20Development%2C%20SEO%2C%20Digital%20Marketing%20Company%20in%20Trichy!5e0!3m2!1sen!2sin!4v1750002257360!5m2!1sen!2sin" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-b-xl"
          />
      </div>
    </div>
  );
};

export default MapSection;
