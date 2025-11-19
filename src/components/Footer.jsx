import { FaLinkedin, FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";
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
          <a
            href="https://in.linkedin.com/company/daks-tools"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a href="https://wa.me/8778423621" target="_blank" rel="noopener noreferrer" className="social-icon FaWhatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <FaFacebookF />
          </a>
          <a
            href="https://www.alphasonix.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon alpha-sonix"
          >
            <span className="as-icon">AS</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
