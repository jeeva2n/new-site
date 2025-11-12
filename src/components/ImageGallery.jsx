import { Link } from 'react-router-dom';
import './ImageGallery.css';

function ImageGallery() {
  return (
    <div className="image-gallery">
      <div className="gallery-item main-item">
        <div className="overlay">
          <div className="text-content">
            <h2 className="headline">
              <span className="green-text">We</span>
              <br />
              <span className="green-text">simplify</span>
              <br />
              <span className="green-text">production</span>
            </h2>
            <div className="description">
              <p>From proven hand operated machines to complete automation lines,</p>
              <p>ZAHORANSKY is the right choice</p>
            </div>
            <div className="action-buttons">
              <Link to="/home" className="action-btn">Home</Link>
              <Link to="/broom-brush" className="action-btn">Broom & Brush</Link>
              <Link to="/healthcare" className="action-btn">HealthCare</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-item side-item first-side-item">
        <div className="overlay">
          <div className="text-content">
            <h2 className="headline">
              <span className="red-text">We</span>
              <br />
              <span className="red-text">deliver</span>
              <br />
              <span className="red-text">solutions</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="gallery-item side-item second-side-item">
        <div className="overlay">
          <div className="text-content">
            <h2 className="headline">
              <span className="purple-text">We</span>
              <br />
              <span className="purple-text">automate</span>
              <br />
              <span className="purple-text">molds</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="gallery-item side-item third-side-item">
        <div className="overlay">
          <div className="text-content">
            <h2 className="headline">
              <span className="blue-text">We</span>
              <br />
              <span className="blue-text">are</span>
              <br />
              <span className="blue-text">ZAHO</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
