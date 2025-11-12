import React from 'react';
import './css/Career.css';

function Career() {
  return (
    <div className="career-page">
      <div className="career-header">
        <div className="overlay">
          <h1>Join Our Team</h1>
          <p>Discover career opportunities at ZAHORANSKY</p>
        </div>
      </div>
      
      <div className="career-content">
        <div className="intro-section">
          <h2>Work With Us</h2>
          <p>At ZAHORANSKY, we believe that our employees are our most valuable asset. We foster a culture of innovation, collaboration, and continuous learning, providing opportunities for professional growth and development. Join our global team and be part of a company that's shaping the future of manufacturing technology.</p>
        </div>
        
        <div className="benefits-section">
          <h2>Employee Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon development-icon"></div>
              <h3>Professional Development</h3>
              <p>Continuous learning opportunities and career advancement paths</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon balance-icon"></div>
              <h3>Work-Life Balance</h3>
              <p>Flexible working arrangements and generous time-off policies</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon global-icon"></div>
              <h3>Global Opportunities</h3>
              <p>Chances to work across our international locations</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon compensation-icon"></div>
              <h3>Competitive Compensation</h3>
              <p>Attractive salary packages and performance bonuses</p>
            </div>
          </div>
        </div>
        
        <div className="openings-section">
          <h2>Current Openings</h2>
          <div className="job-list">
            <div className="job-card">
              <h3>Mechanical Engineer</h3>
              <div className="job-details">
                <span className="location">Todtnau, Germany</span>
                <span className="department">R&D Department</span>
              </div>
              <p>Design and develop innovative mechanical systems for our next-generation manufacturing equipment.</p>
              <button className="apply-btn">Apply Now</button>
            </div>
            
            <div className="job-card">
              <h3>Automation Specialist</h3>
              <div className="job-details">
                <span className="location">Barcelona, Spain</span>
                <span className="department">Engineering</span>
              </div>
              <p>Develop and implement automation solutions for industrial manufacturing processes.</p>
              <button className="apply-btn">Apply Now</button>
            </div>
            
            <div className="job-card">
              <h3>Sales Engineer</h3>
              <div className="job-details">
                <span className="location">Shanghai, China</span>
                <span className="department">Sales</span>
              </div>
              <p>Promote and sell ZAHORANSKY solutions to customers throughout the Asia-Pacific region.</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
