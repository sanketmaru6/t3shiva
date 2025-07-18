import React from 'react';

const GymPage = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .header {
          background: url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260') no-repeat center center/cover;
          color: white;
          padding: 100px 20px;
          text-align: center;
        }

        .header h1 {
          font-size: 3rem;
          margin-bottom: 10px;
        }

        .header p {
          font-size: 1.2rem;
        }

        .btn {
          display: inline-block;
          background-color: #2563eb;
          color: white;
          padding: 10px 20px;
          margin-top: 20px;
          text-decoration: none;
          border-radius: 5px;
        }

        .section {
          padding: 60px 20px;
          max-width: 1000px;
          margin: auto;
        }

        .section-title {
          text-align: center;
          margin-bottom: 30px;
          font-size: 2rem;
        }

        .testimonials blockquote {
          background: #f0f0f0;
          padding: 20px;
          border-left: 5px solid #2563eb;
          margin-bottom: 20px;
        }

        .pricing {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .pricing-card {
          background: #f9f9f9;
          border: 1px solid #ddd;
          padding: 20px;
          width: 300px;
          text-align: center;
          border-radius: 8px;
        }

        .pricing-card h3 {
          margin-bottom: 10px;
          font-size: 1.5rem;
        }

        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .pricing-card ul li {
          margin-bottom: 10px;
        }

        .pricing-card .btn {
          background-color: #111;
        }

        .footer {
          background-color: #2563eb;
          color: white;
          text-align: center;
          padding: 40px 20px;
        }

        .footer h2 {
          margin-bottom: 10px;
          font-size: 1.5rem;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <h1>Expert Fitness Coaches</h1>
        <p>Dedicated theme for gyms, fitness, and sport clubs</p>
        <a href="#" className="btn">Get Started</a>
      </header>

      {/* Challenge Section */}
      <section className="section">
        <h2 className="section-title">Are You Ready To Take The Challenge?</h2>
        <p style={{ textAlign: 'center' }}>
          Join to get the results you’re looking for with our powerful, members-only resources and expert guidance.
        </p>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <h2 className="section-title">What Our Fit Customers Say</h2>
        <blockquote>
          "I've lost 35 lbs in the past year with a great diet plan and support."
          <br /><br />
          <strong>- Diego Monta, Web Developer</strong>
        </blockquote>
        <blockquote>
          "I dropped from 184lbs to 155lbs and still love going to the gym!"
          <br /><br />
          <strong>- Franklin Hicks, Digital Marketer</strong>
        </blockquote>
      </section>

      {/* Pricing Section */}
      <section className="section pricing">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p><strong>$19/mo</strong></p>
          <ul>
            <li>Up to 100 Members</li>
            <li>100GB Storage</li>
            <li>Unlimited Meetings</li>
            <li>Premium Support</li>
          </ul>
          <a href="#" className="btn">Get Started</a>
        </div>

        <div className="pricing-card">
          <h3>Unlimited</h3>
          <p><strong>$99/mo</strong></p>
          <ul>
            <li>Unlimited Members</li>
            <li>Unlimited Storage</li>
            <li>Unlimited Meetings</li>
            <li>Priority Support</li>
          </ul>
          <a href="#" className="btn">Get Started</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>Ready to get healthy?</h2>
        <p>Train with the best personal trainers and motivators.</p>
        <a href="#" className="btn">Let's Talk</a>
      </footer>
    </>
  );
};

export default GymPage;
