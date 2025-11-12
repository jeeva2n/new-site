import React, { useState } from 'react';
import './css/Downloads.css';

function Downloads() {
  const [activeTab, setActiveTab] = useState('product-brochures');
  
  return (
    <div className="downloads-page">
      <div className="downloads-header">
        <div className="overlay">
          <h1>Downloads</h1>
          <p>Access product information, manuals, and technical resources</p>
        </div>
      </div>
      
      <div className="downloads-content">
        <div className="download-categories">
          <div 
            className={`category-tab ${activeTab === 'product-brochures' ? 'active' : ''}`}
            onClick={() => setActiveTab('product-brochures')}
          >
            Product Brochures
          </div>
          <div 
            className={`category-tab ${activeTab === 'technical-manuals' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical-manuals')}
          >
            Technical Manuals
          </div>
          <div 
            className={`category-tab ${activeTab === 'software-updates' ? 'active' : ''}`}
            onClick={() => setActiveTab('software-updates')}
          >
            Software Updates
          </div>
          <div 
            className={`category-tab ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            Certificates
          </div>
          <div 
            className={`category-tab ${activeTab === 'media-library' ? 'active' : ''}`}
            onClick={() => setActiveTab('media-library')}
          >
            Media Library
          </div>
        </div>
        
        <div className="download-search">
          <input type="text" placeholder="Search downloads..." />
          <button className="search-btn">Search</button>
        </div>
        
        <div className="download-list">
          <div className="download-item">
            <div className="download-icon pdf"></div>
            <div className="download-info">
              <h3>Personal Care Product Catalogue 2023</h3>
              <p>Complete overview of our personal care machinery portfolio</p>
              <div className="download-meta">
                <span className="file-type">PDF</span>
                <span className="file-size">12.5 MB</span>
                <span className="file-date">Updated: May 2023</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="download-item">
            <div className="download-icon pdf"></div>
            <div className="download-info">
              <h3>Broom & Brush Manufacturing Solutions</h3>
              <p>Detailed information about our broom and brush machinery</p>
              <div className="download-meta">
                <span className="file-type">PDF</span>
                <span className="file-size">10.8 MB</span>
                <span className="file-date">Updated: April 2023</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="download-item">
            <div className="download-icon pdf"></div>
            <div className="download-info">
              <h3>Healthcare Manufacturing Equipment</h3>
              <p>Brochure for our healthcare industry solutions</p>
              <div className="download-meta">
                <span className="file-type">PDF</span>
                <span className="file-size">14.2 MB</span>
                <span className="file-date">Updated: June 2023</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="download-item">
            <div className="download-icon pdf"></div>
            <div className="download-info">
              <h3>Z.PACK Packaging Systems</h3>
              <p>Automatic packaging solutions for all industries</p>
              <div className="download-meta">
                <span className="file-type">PDF</span>
                <span className="file-size">8.7 MB</span>
                <span className="file-date">Updated: March 2023</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
          
          <div className="download-item">
            <div className="download-icon pdf"></div>
            <div className="download-info">
              <h3>Automation Solutions Overview</h3>
              <p>Complete range of automation systems and components</p>
              <div className="download-meta">
                <span className="file-type">PDF</span>
                <span className="file-size">15.3 MB</span>
                <span className="file-date">Updated: February 2023</span>
              </div>
            </div>
            <button className="download-btn">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Downloads;
