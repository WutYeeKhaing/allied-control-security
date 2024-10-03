import React from 'react';
import right from '../Assets/rightmark.png'
import star from '../Assets/star.png'
import security from '../Assets/security.png'
import key from '../Assets/key.png'
const SecServicesSection = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-16 lg:px-[60px]">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
        {/* Left Column (Text Content) */}
        <div className="w-full lg:w-3/5 xl:w-2/3 text-left mb-8 lg:mb-0">
          <div className="inline-block bg-black text-white px-3 sm:px-4 py-1 sm:py-1.5 mb-4 text-center rounded-full">
            <p className="text-xs font-semibold">Security Services</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 leading-tight">
            Experience Unmatched Security Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-custom-gray mb-6">
            Comprehensive security services to protect your home and business with 24/7 monitoring and advanced solutions
          </p>
          <button className="px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-full text-sm sm:text-base bg-gradient-to-r from-orange-600 to-yellow-600 transition duration-300 hover:from-orange-700 hover:to-yellow-700">
            Contact Us
          </button>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            {['Custom Security Solution', 'Emergency Support', 'Security Audits'].map((service, index) => (
              <div key={index} className="flex items-center">
                <img src={right} alt="Right mark" className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base">{service}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Column (Image) */}
        <div className="w-full lg:w-2/5 xl:w-1/3 relative mt-12 lg:mt-0 lg:mx-0 custom900:block hidden"> 
          {/* Background circle */}
          <div className="absolute right-0 lg:right-12 top-1/2 transform translate-y-[-40%] translate-x-[-5%] w-[200px] h-[200px] sm:w-[284px] sm:h-[276px] rounded-full bg-custom-yellow"></div>
          
          {/* Main image */}
          <div className="relative w-full max-w-[366px] h-[300px] sm:h-[413px] mx-auto lg:mx-0">
            <img
              src={security}
              alt="Security Services"
              className="w-full h-full object-cover rounded"
            />
          </div>
          
          {/* Top right small image */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20">
            <img
              src={key}
              alt="Security Detail 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          
          {/* Bottom left small image */}
          <div className="absolute -bottom-8 sm:-bottom-16 left-0 w-12 h-12 sm:w-16 sm:h-16">
            <img
              src={star}
              alt="Security Detail 2"
              className="w-full h-full object-cover rounded"
            />
          </div>
          
          {/* Text box */}
          <div className="absolute -bottom-10 sm:-bottom-14 right-0 bg-white rounded-[15px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] p-2 sm:p-[10px] w-[100px] sm:w-[127px] h-[60px] sm:h-[77px] flex flex-col items-center justify-center">
            <p className="text-lg sm:text-[20px] leading-tight sm:leading-[22.6px] text-center font-bold">99%</p>
            <p className="text-[10px] sm:text-[11px] leading-tight sm:leading-[15.07px] tracking-[-0.011em] w-full sm:w-[94px] text-center mt-1">
              Satisfied Clients Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
export default SecServicesSection;
