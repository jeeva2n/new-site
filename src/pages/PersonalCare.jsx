import React from 'react';
import { Link } from 'react-router-dom';
import './css/PersonalCare.css';

function PersonalCare() {
  return (
    <div className="personal-care-page">
      <div className="image-gallery">
        <div className="gallery-item main-item">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="green-text">Personal</span>
                <br />
                <span className="green-text">Care</span>
                <br />
                <span className="green-text">Solutions</span>
              </h2>
              <div className="description">
                <p>From toothbrushes to specialized grooming products, our personal care machines deliver efficiency and quality.</p>
              </div>
              <div className="action-buttons">
                <Link to="/toothbrushes" className="action-btn">Toothbrushes</Link>
                <Link to="/hairbrushes" className="action-btn">Hair Brushes</Link>
                <Link to="/cosmetic-tools" className="action-btn">Cosmetic Tools</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item first-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="red-text">Automated</span>
                <br />
                <span className="red-text">production</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item second-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="purple-text">Specialized</span>
                <br />
                <span className="purple-text">tools</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item third-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="blue-text">Quality</span>
                <br />
                <span className="blue-text">products</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalCare;
