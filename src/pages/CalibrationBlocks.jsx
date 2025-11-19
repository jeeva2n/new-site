import { useState, useEffect } from "react";
import ProductModal from "../components/ProductModal";
import "./CalibrationBlocks.css";
import SimpleProductModal from "./SimpleProductModal";

function CalibrationBlocks() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Standard Calibration Block",
    "Custom / Non-Standard Blocks",
    "Application Based Blocks",
    "Specialized Blocks"
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/products?type=calibration_blocks"
      );
      const data = await response.json();

      if (data.success) {
        setProducts(data.products);
        console.log("Fetched products:", data.products);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="calibration-blocks-container">
      <div className="page-header">
        <h1>Calibration Blocks</h1>
        <p>Browse our complete range of calibration blocks for NDT testing standards</p>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => {
                console.log("Selected category:", category);
                setSelectedCategory(category);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product List */}
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div 
                    className="product-image"
                    onClick={() => {
                      console.log("Clicking product thumbnail:", product.id);
                      setSelectedProductId(product.id);
                    }}
                  >
                    <img
                      src={`http://localhost:5001${product.image_url}`}
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                  </div>

                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-category">
                      {product.category} • {product.subcategory}
                    </p>

                    <button
                      className="view-details-btn"
                      onClick={() => {
                        console.log("Clicking view details:", product.id);
                        setSelectedProductId(product.id);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      )}

      {/* Debug log before modal */}
      {console.log("Selected Product ID:", selectedProductId)}

      {/* Modal */}

        {selectedProductId && (
        <SimpleProductModal
          product={products.find((p) => p.id === selectedProductId)}
          onClose={() => setSelectedProductId(null)}
        />
      )}
    </div>
  );
}

export default CalibrationBlocks;
