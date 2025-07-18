import React from 'react';

const About = () => {
  return (
    <>
      <style>{`
        .about-section {
          background-color: #f9fafb;
          padding: 6rem 0;
        }

        .about-section .container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-section .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .left-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .tagline {
          display: inline-block;
          background-color: #dbeafe;
          color: #2563eb;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .left-content h2 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.25;
        }

        @media (min-width: 1024px) {
          .left-content h2 {
            font-size: 3rem;
          }
        }

        .left-content p {
          font-size: 1.25rem;
          color: #4b5563;
          line-height: 1.75;
        }

        .right-content .image-wrapper {
          background-color: #cffafe;
          padding: 2rem;
          border-radius: 1rem;
        }

        .right-content img {
          width: 100%;
          height: 16rem;
          object-fit: cover;
          border-radius: 0.75rem;
        }
      `}</style>

      <section className="about-section">
        <div className="container">
          {/* Left content */}
          <div className="left-content">
            <div className="tagline">Our Story</div>
            <h2>
              We Know How Everything Works And Why Your Business Is Failing Over And Over Again.
            </h2>
            <p>
              We share common trends and strategies for improving your development workflow and making sure you stay ahead of the competition. 
              With lots of unique blocks, you can easily build a page without coding.
            </p>
          </div>

          {/* Right content */}
          <div className="right-content">
            <div className="image-wrapper">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500" 
                alt="Team collaboration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
