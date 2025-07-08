import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Stars */}
        <div className="flex justify-center space-x-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-2xl lg:text-3xl text-gray-900 font-medium leading-relaxed mb-12">
          "OMG! I cannot believe that I have got a brand new landing page after getting T3 Shiva. 
          It was super easy to edit and publish."
        </blockquote>

        {/* Author */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Franklin Hicks" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center">
            <h4 className="text-gray-900 font-semibold text-lg">Franklin Hicks</h4>
            <p className="text-gray-600">Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;