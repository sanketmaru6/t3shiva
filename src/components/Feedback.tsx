import React, { useState } from 'react';

const Feedback = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">We'd love your feedback!</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Styles */}
      <style>{`
        .feedback-container {
          max-width: 600px;
          margin: 80px auto;
          padding: 2rem;
          background: #f9fafb;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          text-align: center;
        }

        .feedback-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        .feedback-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .feedback-form input,
        .feedback-form textarea {
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s;
        }

        .feedback-form input:focus,
        .feedback-form textarea:focus {
          border-color: #2563eb;
        }

        .feedback-form textarea {
          height: 120px;
          resize: vertical;
        }

        .feedback-form button {
          background-color: #2563eb;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .feedback-form button:hover {
          background-color: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default Feedback;
