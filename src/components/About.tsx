import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Our Story
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We Know How Everything Works And Why Your Business Is Failing Over And Over Again.
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We share common trends and strategies for improving your development workflow and making sure you stay ahead of the competition. 
              With lots of unique blocks, you can easily build a page without coding.
            </p>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="bg-cyan-100 rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;