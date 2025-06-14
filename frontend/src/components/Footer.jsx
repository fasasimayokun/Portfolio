// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-5 mt-10">
      {/* background color: light gray; center text; vertical padding */}

      <p>
        © {new Date().getFullYear()} Fasasi Mayokun. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
