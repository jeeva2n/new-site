import React, { useEffect } from "react";
import "./company.css";

function Company() {
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="company-page">
      <div className="page-container">
        
        {/* ====================== HEADER ====================== */}
        <div className="company-header">
          <div className="header-overlay">
            <h2 className="header-subtitle">PERFECTLY DIFFERENT</h2>
            <h1 className="header-title">We are DAKS NDT </h1>
            <div className="header-divider"></div>
            <p className="header-tagline">
              Precision • Reliability • Innovation
            </p>
          </div>
        </div>

        {/* ====================== CONTENT ====================== */}
        <div className="company-content">
          <div className="content-inner">
            
            {/* ========== FEATURES ========== */}
            <section className="company-section reveal">
              <div className="section-header">
                <h2 className="section-title">Our Expertise</h2>
                <p className="section-subtitle">Leading the industry with cutting-edge solutions</p>
              </div>
              
              <div className="features-grid">
                <div className="feature-card hardware-accelerated">
                  <div className="feature-icon">🚀</div>
                  <div className="feature-content">
                    <h3>Advanced Technology</h3>
                    <p>Leveraging AI-powered systems and automated solutions for precision testing.</p>
                  </div>
                </div>
                
                <div className="feature-card hardware-accelerated">
                  <div className="feature-icon">🛡️</div>
                  <div className="feature-content">
                    <h3>Reliability & Safety</h3>
                    <p>Ensuring structural integrity across aerospace, automotive, and energy sectors.</p>
                  </div>
                </div>
                
                <div className="feature-card hardware-accelerated">
                  <div className="feature-icon">🌍</div>
                  <div className="feature-content">
                    <h3>Global Presence</h3>
                    <p>Operating worldwide with certified solutions and rapid response capabilities.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ========== STATS ========== */}
            <section className="company-section stats-section reveal">
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number" data-count="120+">120+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="10K+">10K+</div>
                  <div className="stat-label">Systems Installed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="4K+">4K+</div>
                  <div className="stat-label">Global Customers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number" data-count="50+">50+</div>
                  <div className="stat-label">Countries Served</div>
                </div>
              </div>
            </section>

            {/* ========== INDUSTRIES ========== */}
            <section className="company-section industries-section reveal">
              <div className="section-header">
                <h2 className="section-title">Industries We Serve</h2>
                <p className="section-subtitle">Delivering excellence across multiple sectors</p>
              </div>
              
              <div className="industries-grid">
                <div className="industry-card hardware-accelerated">
                  <div className="industry-card-inner">
                    <div className="industry-icon">✈️</div>
                    <h3>Aerospace</h3>
                    <p>Critical component testing and safety compliance for aviation industry.</p>
                  </div>
                </div>
                
                <div className="industry-card hardware-accelerated">
                  <div className="industry-card-inner">
                    <div className="industry-icon">🚗</div>
                    <h3>Automotive</h3>
                    <p>Quality assurance and defect detection for automotive manufacturers.</p>
                  </div>
                </div>
                
                <div className="industry-card hardware-accelerated">
                  <div className="industry-card-inner">
                    <div className="industry-icon">⚡</div>
                    <h3>Energy</h3>
                    <p>Infrastructure inspection and maintenance for power generation.</p>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </div>

        {/* ====================== FOOTER ====================== */}
        <div className="company-footer">
          <p>© 2025 Company. All rights reserved.</p>
        </div>
        
      </div>
    </div>
  );
}

export default Company;
