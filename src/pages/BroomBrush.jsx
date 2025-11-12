import React from 'react';
import { Link } from 'react-router-dom';
import './css/BroomBrush.css';

function BroomBrush() {
  return (
    <div className="broom-brush-page">
      <div className="image-gallery">
        <div className="gallery-item main-item">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="green-text">Broom</span>
                <br />
                <span className="green-text">&</span>
                <br />
                <span className="green-text">Brush</span>
              </h2>
              <div className="description">
                <p>Industrial cleaning solutions and specialized brushes for every application.</p>
                <p>From manual to fully automated production lines.</p>
              </div>
              <div className="action-buttons">
                <Link to="/industrial-brushes" className="action-btn">Industrial Brushes</Link>
                <Link to="/cleaning-tools" className="action-btn">Cleaning Tools</Link>
                <Link to="/specialized-brushes" className="action-btn">Specialized Brushes</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item first-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="red-text">Robust</span>
                <br />
                <span className="red-text">design</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="gallery-item side-item second-side">
          <div className="overlay">
            <div className="text-content">
              <h2 className="headline">
                <span className="purple-text">Precision</span>
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
                <span className="blue-text">Custom</span>
                <br />
                <span className="blue-text">solutions</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BroomBrush;
