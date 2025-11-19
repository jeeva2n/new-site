import { useState, useEffect } from 'react';
import './ProductModal.css';

function ProductModal({ productId, onClose }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/products/${productId}`);
      const data = await response.json();
      console.log('Product details:', data); // Debug log
      
      if (data.success) {
        setProduct(data.product);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product details:', error);
      setLoading(false);
    }
  };

  // Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (loading) {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
          <div className="loading">Loading product details...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content">
          <div className="error">Product not found</div>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img 
              src={`http://localhost:5001${product.image_url}`} 
              alt={product.name}
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg';
              }}
            />
          </div>
          
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="product-category-tag">
              {product.category} • {product.subcategory}
            </p>
            
            <div className="product-details">
              <h3>Description</h3>
              <p>{product.description}</p>
              
              {product.specifications && (
                <>
                  <h3>Specifications</h3>
                  <p>{product.specifications}</p>
                </>
              )}
              
              {product.price > 0 && (
                <div className="product-price">
                  <h3>Price</h3>
                  <p className="price-value">₹{product.price.toLocaleString()}</p>
                </div>
              )}
              
              <div className="product-status">
                <span className={`status-badge ${product.in_stock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.in_stock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <div className="product-meta">
                <p><strong>Product Type:</strong> {product.product_type === 'calibration_blocks' ? 'Calibration Block' : 'Flawed Specimen'}</p>
                <p><strong>Added:</strong> {new Date(product.created_at).toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="modal-actions">
              <button className="btn-contact">Contact for Quote</button>
              <button className="btn-download">Download Specs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
