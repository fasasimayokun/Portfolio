// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-5">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
          Contact Me
        </h2>

        <p className="text-lg text-gray-700 mb-6 text-center">
          I'd love to hear from you! Whether it's a question, a suggestion, or an opportunity —
          feel free to reach out using any of the methods below.
        </p>

        <div className="space-y-4 text-base text-gray-700">
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:maykay.fash@gmail.com"
              className="text-blue-600 hover:underline"
            >
              maykay.fash@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">Phone:</span> 07085135605
          </p>

          <p>
            <span className="font-semibold">Address:</span>{' '}
            25 Aina Falege Street, Agiliti Estate, Mile 12, Lagos
          </p>
        </div>

        <p className="mt-8 text-sm text-gray-500 italic text-center">
          You can copy the email above and send me a message directly. I’ll respond as soon as I can!
        </p>
      </div>
    </section>
  );
};

export default Contact;
