import React, { useState } from 'react';
import './css/Blog.css';
function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="overlay">
          <h1>ZAHORANSKY Blog</h1>
          <p>Industry insights, company news, and technical articles</p>
        </div>
      </div>
      
      <div className="blog-content">
        <div className="blog-filters">
          <div className="search-bar">
            <input type="text" placeholder="Search articles..." />
            <button className="search-btn">Search</button>
          </div>
          
          <div className="category-filters">
            <span 
              className={`filter ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </span>
            <span 
              className={`filter ${activeFilter === 'company-news' ? 'active' : ''}`}
              onClick={() => setActiveFilter('company-news')}
            >
              Company News
            </span>
            <span 
              className={`filter ${activeFilter === 'technical' ? 'active' : ''}`}
              onClick={() => setActiveFilter('technical')}
            >
              Technical Articles
            </span>
            <span 
              className={`filter ${activeFilter === 'industry' ? 'active' : ''}`}
              onClick={() => setActiveFilter('industry')}
            >
              Industry Trends
            </span>
            <span 
              className={`filter ${activeFilter === 'events' ? 'active' : ''}`}
              onClick={() => setActiveFilter('events')}
            >
              Events
            </span>
          </div>
        </div>
        
        <div className="featured-article">
          <div className="featured-image"></div>
          <div className="featured-content">
            <span className="category">Industry Trends</span>
            <h2>The Future of Automated Manufacturing in Personal Care</h2>
            <p>Exploring how automation is transforming the personal care industry with increased efficiency and unprecedented precision.</p>
            <div className="article-meta">
              <span className="date">June 15, 2023</span>
              <span className="author">By Dr. Michael Zahoransky</span>
            </div>
            <button className="read-more">Read Article</button>
          </div>
        </div>
        
        <div className="article-grid">
          <div className="article-card">
            <div className="article-image company-news-img"></div>
            <div className="article-content">
              <span className="category">Company News</span>
              <h3>ZAHORANSKY Opens New Innovation Center in Germany</h3>
              <p>State-of-the-art facility to accelerate product development and customer collaboration.</p>
              <div className="article-meta">
                <span className="date">May 28, 2023</span>
              </div>
            </div>
          </div>
          
          <div className="article-card">
            <div className="article-image technical-img"></div>
            <div className="article-content">
              <span className="category">Technical Articles</span>
              <h3>Advances in Mold Technology for Healthcare Applications</h3>
              <p>How precision molds are enabling next-generation medical devices.</p>
              <div className="article-meta">
                <span className="date">May 12, 2023</span>
              </div>
            </div>
          </div>
          
          <div className="article-card">
            <div className="article-image events-img"></div>
            <div className="article-content">
              <span className="category">Events</span>
              <h3>ZAHORANSKY at Interbrush 2023: Highlights and Innovations</h3>
              <p>Recap of our successful exhibition at the industry's premier event.</p>
              <div className="article-meta">
                <span className="date">April 30, 2023</span>
              </div>
            </div>
          </div>
          
          <div className="article-card">
            <div className="article-image industry-img"></div>
            <div className="article-content">
              <span className="category">Industry Trends</span>
              <h3>Sustainability in Brush Manufacturing: New Approaches</h3>
              <p>Exploring eco-friendly materials and production methods for the brush industry.</p>
              <div className="article-meta">
                <span className="date">April 15, 2023</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pagination">
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <span className="page-number">3</span>
          <span className="page-number">4</span>
          <span className="page-number">Next →</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
