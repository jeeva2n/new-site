import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductCatalogue.css';

function ProductCatalogue() {
  return (
    <div className="product-catalogue">
      <h1>Product Catalogue</h1>
      
      <div className="catalogue-categories">
        <div className="category-card">
          <div className="category-image personal-care-img"></div>
          <h3>Personal Care Products</h3>
          <p>Browse our range of personal care manufacturing solutions</p>
          <Link to="/personal-care" className="category-link">View Products</Link>
        </div>
        
        <div className="category-card">
          <div className="category-image broom-brush-img"></div>
          <h3>Broom & Brush Equipment</h3>
          <p>Discover our industrial cleaning tool production machinery</p>
          <Link to="/broom-brush" className="category-link">View Products</Link>
        </div>
        
        <div className="category-card">
          <div className="category-image healthcare-img"></div>
          <h3>Healthcare Solutions</h3>
          <p>Explore our medical and healthcare manufacturing equipment</p>
          <Link to="/healthcare" className="category-link">View Products</Link>
        </div>
        
        <div className="category-card">
          <div className="category-image automation-img"></div>
          <h3>Automation Systems</h3>
          <p>Complete automation solutions for industrial applications</p>
          <Link to="/automation" className="category-link">View Products</Link>
        </div>
      </div>
      
      <div className="catalogue-downloads">
        <h2>Download Complete Catalogues</h2>
        <div className="download-options">
          <a href="/downloads/personal-care-catalogue.pdf" className="download-btn">Personal Care Catalogue</a>
          <a href="/downloads/broom-brush-catalogue.pdf" className="download-btn">Broom & Brush Catalogue</a>
          <a href="/downloads/healthcare-catalogue.pdf" className="download-btn">Healthcare Catalogue</a>
          <a href="/downloads/full-product-catalogue.pdf" className="download-btn primary">Complete Product Catalogue</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCatalogue;
