import React from 'react';
import { Link } from 'react-router-dom';
import './css/HealthCare.css';

function HealthCare() {
  return (
    <div className="healthcare-page">
      <div className="image-gallery">
        <div className="gallery-item main-item">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="green-text">Health</span>
                <br />
                <span className="green-text">Care</span>
                <br />
                <span className="green-text">Innovations</span>
              </h2>
              <div className="description">
                <p>Advanced medical and healthcare manufacturing solutions.</p>
                <p>Precision-engineered equipment for the healthcare industry.</p>
              </div>
              <div className="action-buttons">
                <Link to="/medical-tools" className="action-btn">Medical Tools</Link>
                <Link to="/diagnostic-equipment" className="action-btn">Diagnostic Equipment</Link>
                <Link to="/healthcare-automation" className="action-btn">Healthcare Automation</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item first-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="red-text">Medical</span>
                <br />
                <span className="red-text">precision</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item second-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="purple-text">Sterile</span>
                <br />
                <span className="purple-text">manufacturing</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item third-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="blue-text">Patient</span>
                <br />
                <span className="blue-text">care</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthCare;
