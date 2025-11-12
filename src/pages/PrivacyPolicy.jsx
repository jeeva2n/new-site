import React from 'react';
import './css/Legal.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page privacy-policy">
      <div className="legal-header">
        <h1>Privacy Policy</h1>
      </div>
      
      <div className="legal-content">
        <div className="last-updated">Last Updated: August 1, 2023</div>
        
        <div className="legal-section">
          <h2>1. Introduction</h2>
          <p>ZAHORANSKY AG ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website and tells you about your privacy rights and how the law protects you.</p>
        </div>
        
        <div className="legal-section">
          <h2>2. The Data We Collect About You</h2>
          <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped as follows:</p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address, telephone numbers, and address.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          </ul>
        </div>
        
        <div className="legal-section">
          <h2>3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>Where we need to perform a contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </div>
        
        <div className="legal-section">
          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
        </div>
        
        <div className="legal-section">
          <h2>5. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access to, correction of, or erasure of your personal data.</p>
        </div>
        
        <div className="legal-section">
          <h2>6. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact our data protection officer at privacy@zahoransky.com.</p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
