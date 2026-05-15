import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <h2>Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: [info@example.com](mailto:info@example.com)</p>
      </div>
      <div className="social">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="#" target="_blank" rel="noreferrer"><FaFacebook size={24} /></a></li>
          <li><a href="#" target="_blank" rel="noreferrer"><FaTwitter size={24} /></a></li>
          <li><a href="#" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;