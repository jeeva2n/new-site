import { FaLinkedin, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/imprint">Imprint</Link></li>
            <li><Link to="/gtc">GTC & Conditions of Purchase</Link></li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
