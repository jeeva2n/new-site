import React, { useState, useEffect } from 'react';
import './css/ProductCatalogue.css';
import ImageTrail from '../components/ImageTrail';

function ProductCatalogue() {
  const [imageTrailKey] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const imageItems = [
    'https://5.imimg.com/data5/SELLER/Default/2024/3/404330532/UJ/GK/VI/37115419/3-inch-12mm-sv-but-joint-pipe-to-pipe-rt-flawed-specimens-500x500.jpg',
    'https://tiimg.tistatic.com/fp/2/009/187/aws-resolution-reference-test-block-009.jpg',
    'https://img500.exportersindia.com/product_images/bc-500/2024/10/13913273/ultrasonic-testing-1727934518-7625674.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCRD7ZUy3h8-_ZzWl4Ap6pQh4hybLkQR96w&s',
    'https://tiimg.tistatic.com/fp/2/009/186/usaf-general-purpose-eddy-current-standard-test-block-758.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2025/5/508963192/HA/CL/FM/141219968/cnc-machining-service-500x500.png',
    'https://images.jdmagicbox.com/quickquotes/images_main/-7wmxpfr4.jpg',
    'https://5.imimg.com/data5/SELLER/Default/2021/12/HZ/UI/OZ/37115419/vaccum-box-testing-250x250.jpg',
  ];

  // Enhanced product details
  const productDetails = {
    "Technical Support": {
      title: "Technical Support",
      description: "Our comprehensive technical support services provide remote diagnostic assistance and expert guidance from our specialized engineering team. We offer real-time troubleshooting, performance optimization, and operational guidance to ensure your equipment runs at peak efficiency.",
      features: [
        "24/7 remote diagnostic services",
        "Real-time troubleshooting support",
        "Performance optimization guidance",
        "Expert engineering consultations",
        "Software updates and maintenance",
        "Operational best practices"
      ],
      images: [
        imageItems[0],
        imageItems[1],
        imageItems[2],
        imageItems[3],
        imageItems[4]
      ],
      contact: "techsupport@dakstools.com",
      phone: "+1-800-TECH-SUPPORT"
    },
    "Maintenance Services": {
      title: "Maintenance Services",
      description: "Keep your equipment in optimal condition with our preventive maintenance programs and on-site service visits. Our certified technicians ensure maximum uptime and extended equipment lifespan through regular inspections and proactive maintenance.",
      features: [
        "Preventive maintenance programs",
        "On-site service visits",
        "Certified technician support",
        "Equipment performance audits",
        "Predictive maintenance solutions",
        "Emergency repair services"
      ],
      images: [
        imageItems[1],
        imageItems[2],
        imageItems[3],
        imageItems[4],
        imageItems[5]
      ],
      contact: "maintenance@dakstools.com",
      phone: "+1-800-MAINTENANCE"
    },
    "Spare Parts": {
      title: "Spare Parts",
      description: "Genuine original spare parts with rapid worldwide delivery. Our extensive inventory ensures you get the right parts when you need them, backed by comprehensive warranties and technical support.",
      features: [
        "Original manufacturer parts",
        "Worldwide rapid delivery",
        "Comprehensive warranty coverage",
        "Extensive parts inventory",
        "Technical installation support",
        "Competitive pricing"
      ],
      images: [
        imageItems[2],
        imageItems[3],
        imageItems[4],
        imageItems[5],
        imageItems[6]
      ],
      contact: "parts@dakstools.com",
      phone: "+1-800-SPARE-PARTS"
    },
    "Training Programs": {
      title: "Training Programs",
      description: "Comprehensive training programs designed for operators and maintenance personnel. Enhance your team's skills with hands-on training, certification programs, and continuous learning opportunities.",
      features: [
        "Operator training courses",
        "Maintenance certification",
        "Hands-on practical sessions",
        "Customized training programs",
        "Online learning modules",
        "Continuous skill development"
      ],
      images: [
        imageItems[3],
        imageItems[4],
        imageItems[5],
        imageItems[6],
        imageItems[7]
      ],
      contact: "training@dakstools.com",
      phone: "+1-800-TRAINING"
    },
    "Machine Upgrades": {
      title: "Machine Upgrades",
      description: "Modernize your existing equipment with our retrofit solutions and machine upgrades. Enhance capabilities, improve efficiency, and extend the productive life of your machinery with our advanced upgrade packages.",
      features: [
        "Retrofit solutions",
        "Performance enhancements",
        "Technology integration",
        "Custom upgrade packages",
        "Minimal downtime installation",
        "ROI optimization"
      ],
      images: [
        imageItems[4],
        imageItems[5],
        imageItems[6],
        imageItems[7],
        imageItems[0]
      ],
      contact: "upgrades@dakstools.com",
      phone: "+1-800-UPGRADES"
    },
    "24/7 Emergency Support": {
      title: "24/7 Emergency Support",
      description: "Around-the-clock emergency support for critical production situations. Our rapid response team is always available to minimize downtime and get your operations back on track quickly.",
      features: [
        "24/7 emergency hotline",
        "Rapid response team",
        "Critical situation management",
        "Minimum downtime guarantee",
        "Global support coverage",
        "Priority service handling"
      ],
      images: [
        imageItems[5],
        imageItems[6],
        imageItems[7],
        imageItems[0],
        imageItems[1]
      ],
      contact: "emergency@dakstools.com",
      phone: "+1-800-EMERGENCY"
    }
  };

  const cards = [
    { title: "Technical Support", desc: "Remote diagnostic services and technical assistance.", img: imageItems[0] },
    { title: "Maintenance Services", desc: "Preventive maintenance programs and on-site service visits.", img: imageItems[1] },
    { title: "Spare Parts", desc: "Original spare parts with rapid worldwide delivery.", img: imageItems[2] },
    { title: "Training Programs", desc: "Comprehensive training for operators and maintenance personnel.", img: imageItems[3] },
    { title: "Machine Upgrades", desc: "Retrofit solutions to enhance the capabilities of your existing equipment.", img: imageItems[4] },
    { title: "24/7 Emergency Support", desc: "Around-the-clock assistance for critical production situations.", img: imageItems[5] },
  ];

  // Scroll reveal effect
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll('.product-catalogue-card-img');
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    reveal();
    
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  // Handlers
  const handleLearnMore = (productTitle) => {
    const product = productDetails[productTitle];
    if (product.image && !product.images) {
      product.images = [product.image];
    }
    setSelectedProduct(product);
    setSelectedImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSelectedImageIndex(0);
    document.body.style.overflow = 'auto';
  };

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProduct && selectedProduct.images) {
      setSelectedImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="product-catalogue-page">
      <div className="page-container">
        
        {/* HEADER IMAGE TRAIL */}
        <div className="product-catalogue-header-trail-container">
          <ImageTrail key={imageTrailKey} items={imageItems} variant={6} />
          <div className="overlay">
            <h1>Product Catalogue</h1>
            <p>Support and services for DAKS TOOLS equipment</p>
          </div>
        </div>

        {/* INTRO SECTION */}
        <div className="product-catalogue-content">
          <div className="content-inner">
            <div className="product-catalogue-intro">
              <h2>Comprehensive Support Solutions</h2>
              <p>
                At DAKS TOOLS, we're committed to providing outstanding service
                throughout the lifecycle of your equipment. Our global service network 
                ensures prompt assistance wherever you are located.
              </p>
            </div>

            {/* GRID */}
            <div className="product-catalogue-grid">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="product-catalogue-card-img hardware-accelerated"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="product-catalogue-overlay">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleLearnMore(card.title);
                      }}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="product-catalogue-footer">
          <p>© 2024 DAKS TOOLS. All rights reserved.</p>
        </div>

        {/* PRODUCT DETAILS MODAL */}
        {isModalOpen && selectedProduct && (
          <div className="product-catalogue-modal-overlay" onClick={closeModal}>
            <div className="product-catalogue-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedProduct.title}</h2>
                <button className="modal-close-btn" onClick={closeModal}>×</button>
              </div>
              <div className="modal-content">
                {/* Enhanced Image Gallery */}
                <div className="modal-image-gallery">
                  <div className="main-image-container">
                    <img 
                      src={selectedProduct.images ? selectedProduct.images[selectedImageIndex] : selectedProduct.image} 
                      alt={`${selectedProduct.title} - Image ${selectedImageIndex + 1}`} 
                      className="modal-main-image"
                      onClick={handleImageClick}
                    />
                    {selectedProduct.images && selectedProduct.images.length > 1 && (
                      <>
                        <button className="gallery-nav-btn prev" onClick={handlePrevImage}>‹</button>
                        <button className="gallery-nav-btn next" onClick={handleNextImage}>›</button>
                        <div className="image-counter">
                          {selectedImageIndex + 1} / {selectedProduct.images.length}
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnail Strip */}
                  {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <div className="thumbnail-container">
                      {selectedProduct.images.map((image, index) => (
                        <div
                          key={index}
                          className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                          onClick={() => handleImageChange(index)}
                        >
                          <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 360 View Indicator */}
                  <div className="view-indicator">
                    {/* <span className="icon-360">360°</span> */}
                    {/* <span className="view-text">Click and drag to rotate</span> */}
                  </div>
                </div>

                {/* Product Details */}
                <div className="modal-details">
                  <div className="modal-description">
                    <p>{selectedProduct.description}</p>
                  </div>
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="contact-info">
                    <h4>Contact Information:</h4>
                    <p><strong>Email:</strong> {selectedProduct.contact}</p>
                    <p><strong>Phone:</strong> {selectedProduct.phone}</p>
                  </div>
                  <div className="modal-actions">
                    <button className="modal-btn primary">Contact Sales</button>
                    <button className="modal-btn secondary">Download Brochure</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Fullscreen View */}
            {isFullscreen && (
              <div className="fullscreen-overlay" onClick={closeFullscreen}>
                <img 
                  src={selectedProduct.images ? selectedProduct.images[selectedImageIndex] : selectedProduct.image} 
                  alt="Fullscreen view"
                  className="fullscreen-image"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCatalogue;
