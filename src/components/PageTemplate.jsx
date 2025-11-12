// src/components/PageTemplate.jsx
import { Link } from 'react-router-dom';
import './PageTemplate.css';

function PageTemplate({ title, headline, description, imageBg, textColor }) {
  return (
    <div className="page-container">
      <div className="page-header" style={{ backgroundImage: `url(${imageBg})` }}>
        <div className="overlay">
          <h1 className="page-title" style={{ color: textColor }}>{title}</h1>
          <p className="page-headline">{headline}</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="content-wrapper">
          <h2>{title}</h2>
          <p>{description}</p>
          
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button">Contact Us</Link>
            <Link to="/downloads" className="cta-button secondary">Download Brochures</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTemplate;
