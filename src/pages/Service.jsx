import React from 'react';
import './css/Service.css';

function Service() {
  return (
    <div className="service-page">
      <div className="service-header">
        <div className="overlay">
          <h1>Customer Service</h1>
          <p>Support and services for ZAHORANSKY equipment</p>
        </div>
      </div>
      
      <div className="service-content">
        <div className="service-intro">
          <h2>Comprehensive Support Solutions</h2>
          <p>At ZAHORANSKY, we're committed to providing outstanding service throughout the entire lifecycle of your equipment. Our global service network ensures prompt assistance wherever you are located.</p>
        </div>
        
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon tech-support-icon"></div>
            <h3>Technical Support</h3>
            <p>Remote diagnostic services and technical assistance from our expert engineering team</p>
            <a href="/technical-support" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon maintenance-icon"></div>
            <h3>Maintenance Services</h3>
            <p>Preventive maintenance programs and on-site service visits</p>
            <a href="/maintenance" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon spare-parts-icon"></div>
            <h3>Spare Parts</h3>
            <p>Original spare parts with rapid worldwide delivery</p>
            <a href="/spare-parts" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon training-icon"></div>
            <h3>Training Programs</h3>
            <p>Comprehensive training for operators and maintenance personnel</p>
            <a href="/training" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon upgrade-icon"></div>
            <h3>Machine Upgrades</h3>
            <p>Retrofit solutions to enhance the capabilities of your existing equipment</p>
            <a href="/upgrades" className="service-link">Learn More</a>
          </div>
          
          <div className="service-card">
            <div className="service-icon emergency-icon"></div>
            <h3>24/7 Emergency Support</h3>
            <p>Around-the-clock assistance for critical production situations</p>
            <a href="/emergency-support" className="service-link">Learn More</a>
          </div>
        </div>
        
        <div className="service-contact">
          <h2>Contact Service Department</h2>
          <div className="contact-options">
            <div className="contact-option">
              <h3>Technical Hotline</h3>
              <p>+49 7674 9278-100</p>
              <p>Available Monday-Friday, 8:00-17:00 CET</p>
            </div>
            <div className="contact-option">
              <h3>Service Email</h3>
              <p>service@zahoransky.com</p>
              <p>Response within 24 hours</p>
            </div>
            <div className="contact-option">
              <h3>Emergency Support</h3>
              <p>+49 7674 9278-911</p>
              <p>Available 24/7 for critical issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
