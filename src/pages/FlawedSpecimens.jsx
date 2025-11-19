import { useState, useEffect } from "react";
import SimpleProductModal from "./SimpleProductModal";
import "./FlawedSpecimens.css";

function BroomBrush() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Categories inside flawed specimens
  const categories = [
    "All",
    "Welded Specimens",
    "Base Material Flawed Specimens",
    "Advanced NDT Validation Specimens",
    "POD & Training Specimens"
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch flawed specimens products
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/products?type=flawed_specimens"
      );
      const data = await response.json();

      if (data.success) {
        setProducts(data.products);
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
      setLoading(false);
    }
  };

  // Filter by category + search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="broom-brush-container">
      <div className="page-header">
        <h1>Flawed Specimens</h1>
        <p>
          Browse our complete range of flawed specimens for NDT validation and
          training
        </p>
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
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
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
                    <p className="product-description">
                      {product.description}
                    </p>
                    <p className="product-category">
                      {product.category} • {product.subcategory}
                    </p>

                    <button
                      className="view-details-btn"
                      onClick={() => {
                        console.log(
                          "Open details for product ID:",
                          product.id
                        );
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

      {/* Simple Modal */}
      {selectedProductId && (
        <SimpleProductModal
          product={products.find((p) => p.id === selectedProductId)}
          onClose={() => setSelectedProductId(null)}
        />
      )}
    </div>
  );
}

export default BroomBrush;
