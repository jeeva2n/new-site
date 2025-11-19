import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaInfoCircle, FaUserTie, FaHome } from "react-icons/fa";
import "./Header.css";
import daksLogo from '../assets/primary/daks.png';

// ⚠️ ASSUMPTION: The path for these assets should be relative to the component, 
// similar to daksLogo, or just 'assets/primary/hX.png'.
// Corrected Imports to match usage (using names h1, h2, h3, h4 for simplicity)
import h4 from '../assets/primary/h4.png';
import h3 from '../assets/primary/h3.png';
import h2 from '../assets/primary/h2.png';
import h1 from '../assets/primary/h1.png'; // Used as 'h1' in the JSX

function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

const handleAdminClick = () => {
  navigate("/admin/dashboard");
};

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src={daksLogo}
              alt="DAKS NDT Services Logo"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Navigation - Updated with NDT Categories */}
        <nav className="main-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/flawed-specimens">Flawed Specimens</Link></li>
            <li>
              <Link to="/CalibrationBlocks">Calibration Blocks</Link>
            </li>

            <li><Link to="/product-catalogue">Product Catalogue</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">

          {/* Home Button */}
          <div className="home-button" onClick={handleHomeClick}>
            <FaHome />
          </div>

          {/* Admin Button - Updated */}
          <div className="contact-button" onClick={handleAdminClick} title="Admin Login">
            <FaUserTie />
          </div>

          {/* Envelope Hover Panel */}
          <div
            className="contact-button contact-dropdown-trigger"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <FaInfoCircle />
            <span className="dropdown-arrow">▼</span>

            {contactOpen && (
              <div className="contact-panel-dropdown">

                {/* Left Section - Company Information */}
                <div className="contact-company-info">
                  <div className="company-section">
                    <h3 className="company-title">DAKS NDT Services</h3>

                    <p className="company-subtitle">
                      Advanced Non-Destructive Testing Solutions • Inspection • Safety • Reliability
                    </p>
                    <p className="contact-label">Address</p>
                    <p className="company-address">
                      Babu Garden, No.163,<br />
                      Narasimman Street, 2nd St,<br />
                      Sikkarayapuram, Tamil Nadu 600128<br />
                      India
                    </p>

                    <div className="company-contact">
                      <p className="contact-label">Phone</p>
                      <p className="contact-value">087784 23621</p>

                      <p className="contact-label">Email</p>
                      <p className="contact-value">jeevaoff22@gmail.com</p>

                      <p className="contact-label">Hours</p>
                      <p className="contact-value">Open 24 Hours</p>
                    </div>
                  </div>

                  <div className="divider"></div>
                  <br />
                  <div className="company-section">
                    <h3 className="company-title">NDT Services Offered</h3>

                    <ul className="ndt-services-list">
                      <li>Ultrasonic Testing (UT)</li>
                      <li>Radiographic Testing (RT)</li>
                      <li>Magnetic Particle Testing (MT)</li>
                      <li>Dye Penetrant Testing (PT)</li>
                      <li>Visual Inspection (VT)</li>
                      <li>Eddy Current Testing (ECT)</li>
                    </ul>
                  </div>
                </div>

                {/* Right Section - Get in Touch */}
                <div className="contact-get-in-touch">
                  <h3 className="get-in-touch-heading">Get in Touch With Us</h3>

                  {/* Block 1: NDT Inspection Support */}
                  <div className="contact-panel-item">
                    <img
                      // 💡 CORRECTION: Use the imported variable name 'h1'
                      src={h1} 
                      alt="NDT Support"
                      className="contact-item-image"
                    />
                    <div className="contact-item-info">
                      <h4>NDT Inspection Support</h4>
                      <p>
                        Reliable testing, expert technicians, and fast service — anytime, guaranteed quality.
                      </p>
                    </div>
                  </div>

                  {/* Block 2: Contact & Service Areas */}
                  <div className="contact-panel-item">
                    <img
                      // 💡 CORRECTION: Use the imported variable name 'h2'
                      src={h2} 
                      alt="Service Areas"
                      className="contact-item-image"
                    />
                    <div className="contact-item-info">
                      <h4>Contact & Service Areas</h4>
                      <p>
                        We provide on-site NDT services across Tamil Nadu and throughout India, wherever your project is located.
                      </p>
                    </div>
                  </div>

                  {/* Block 3: Careers */}
                  <div className="contact-panel-item">
                    <img
                      // 💡 CORRECTION: Use the imported variable name 'h3'
                      src={h3} 
                      alt="Career"
                      className="contact-item-image"
                    />
                    <div className="contact-item-info">
                      <h4>Careers</h4>
                      <p>
                        Join our dedicated team of NDT professionals and build your career at the forefront of quality assurance.
                      </p>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="career-additional">
                    <p className="career-text animated-text">
                      Build your future in a high-demand industry with DAKS NDT Services.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;