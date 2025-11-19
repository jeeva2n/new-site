import './SimpleProductModal.css';

function SimpleProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="simple-modal-overlay" onClick={onClose}>
      <div className="simple-modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="simple-modal-close" onClick={onClose}>&times;</span>
        
        <img 
          src={`http://localhost:5001${product.image_url}`} 
          alt={product.name}
          className="simple-modal-image"
        />
        
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Subcategory:</strong> {product.subcategory}</p>
        
        <button onClick={onClose} className="simple-modal-button">Close</button>
      </div>
    </div>
  );
}

export default SimpleProductModal;
