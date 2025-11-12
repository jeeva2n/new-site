import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Navigate to home
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              src="./src/assets/primary/daks.png"
              alt="ZAHORANSKY Logo"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="main-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/broom-brush">Broom & Brush</Link></li>
            <li><Link to="/healthcare">HealthCare</Link></li>
            <li><Link to="/product-catalogue">Product Catalogue</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          {/* ✅ Home Button (Replaces Language Selector) */}
          <div className="home-button" onClick={handleHomeClick}>
            <FaHome />
          </div>

          {/* Phone Button */}
          <div className="contact-button">
            <FaPhone />
          </div>

          {/* Envelope Hover Panel */}
          <div
            className="contact-button contact-dropdown-trigger"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <FaEnvelope />
            <span className="dropdown-arrow">▼</span>

            {contactOpen && (
              <div className="contact-panel-dropdown">
                {/* Left Section - Company Information */}
                <div className="contact-company-info">
                  <div className="company-section">
                    <h3 className="company-title">ZAHOBANSSY AG</h3>
                    <p className="company-subtitle">Intelligent for Group</p>
                    <p className="company-address">
                      Action-Zahoranday-Straise 1<br />
                      79542 Technical-Geschneerd<br />
                      Germany
                    </p>
                    <div className="company-contact">
                      <p className="contact-label">Phone</p>
                      <p className="contact-value">(+49) 7071 997 0</p>
                      <p className="contact-label">Mail</p>
                      <p className="contact-value">info@zahoranday.com</p>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="company-section">
                    <h3 className="company-title">ZAHOBANSSY</h3>
                    <p className="company-subtitle">Automatic & Mobile GmbH</p>
                    <p className="company-address">
                      Bebelstrasse 11a<br />
                      79108 Freiburg im Breitgau<br />
                      Germany
                    </p>
                    <div className="company-contact">
                      <p className="contact-label">Phone</p>
                      <p className="contact-value">(+49) 761 705 0</p>
                      <p className="contact-label">Mail</p>
                      <p className="contact-value">info@zahoranday.com</p>
                    </div>
                  </div>
                </div>

                {/* Right Section - Get in Touch */}
                <div className="contact-get-in-touch">
                  <h3 className="get-in-touch-heading">Get in touch with us</h3>

                  {/* Block 1: Customer Service */}
                  <div className="contact-panel-item">
                    <img
                      src="/images/customer-service.jpg"
                      alt="Customer Service"
                      className="contact-item-image"
                    />
                    <div className="contact-item-info">
                      <h4>Customer Service</h4>
                      <p>
                        Competent customer service by ZAHOBANSSY, anywhere on earth.
                      </p>
                      <Link to="/service" className="contact-link">
                        Service
                      </Link>
                    </div>
                  </div>

                  {/* Block 2: Contact & Locations */}
                  <div className="contact-panel-item">
                    <img
                      src="/images/contact-location.jpg"
                      alt="Contact & Locations"
                      className="contact-item-image"
                    />
                    <div className="contact-item-info">
                      <h4>Contact & Locations</h4>
                      <p>
                        Reach out for assistance, inquiries, or just to say hello!
                      </p>
                      <div className="link-group">
                        <Link to="/contact" className="contact-link">
                          Contact
                        </Link>
                        <Link to="/locations" className="contact-link">
                          Locations
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Block 3: Career */}
                  <div className="contact-panel-item">
                    <img
                      src="/images/career.jpg"
                      alt="Career"
                      className="contact-item-image"
                    />
                    <div className="contact-item-info">
                      <h4>Career</h4>
                      <p>Become a part of the ZAHOBANSSY family!</p>
                      <Link to="/career" className="contact-link">
                        Career
                      </Link>
                    </div>
                  </div>

                  {/* Additional Career Info */}
                  <div className="career-additional">
                    <p className="career-text">
                      Shape the future of a globally active and innovative technology provider!
                    </p>
                    <div className="career-links">
                      <Link to="/company" className="career-link">
                        Company
                      </Link>
                      <Link to="/open-positions" className="career-link">
                        Open positions
                      </Link>
                    </div>
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
