import React from 'react';

const TestimonialFull = () => {
  return (
    <section className="bg-gray-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <blockquote className="text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-12">
          "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users. 
          Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users. 
          Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users."
        </blockquote>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Franklin Hicks" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg">Digital Marketer</h4>
            <p className="text-gray-300">Franklin Hicks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialFull;