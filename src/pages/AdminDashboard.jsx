import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [productType, setProductType] = useState("flawed_specimens");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Welded Specimens",
    subcategory: "Butt Weld"
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getCategoryOptions = () => {
    if (productType === "flawed_specimens") {
      return [
        "Welded Specimens",
        "Base Material Flawed Specimens",
        "Advanced NDT Validation Specimens",
        "POD & Training Specimens"
      ];
    } else {
      return [
        "Standard Calibration Block",
        "Custom / Non-Standard Blocks",
        "Application Based Blocks",
        "Specialized Blocks"
      ];
    }
  };

  const getSubcategoryOptions = () => {
    const categoryMap = {
      "Welded Specimens": ["Butt Weld", "Fillet Weld", "Node & Nozzle", "Dissimilar Metal Weld"],
      "Base Material Flawed Specimens": ["Plate", "Pipe", "Forging/Casting", "Corrosion/Erosion"],
      "Advanced NDT Validation Specimens": ["PAUT/TOFT", "TFM/FMC", "ToF POD", "Multi-Technique"],
      "POD & Training Specimens": ["POD", "Training", "Skill-assessment", "Customised Flawed Specimens"],

      "Standard Calibration Block": ["ASME", "ASTM", "ISO", "AWS", "EN", "IIW"],
      "Custom / Non-Standard Blocks": ["Custom Reference Block", "Special Design Block", "Material Specific Blocks", "Client Specific Geometry Blocks"],
      "Application Based Blocks": ["PAUT", "TOFT", "UT", "MT/PT/ET/RT", "RFET", "IRIS", "MFL", "NFA/RFA/ECA"],
      "Specialized Blocks": ["Thickness Calibration Blocks", "Step-Wedge Calibration Blocks", "Velocity & Sensitivity Calibration Blocks", "Surface Finish Reference Blocks"]
    };

    return categoryMap[formData.category] || [];
  };

  useEffect(() => {
    fetchProducts();
  }, [productType]);

  useEffect(() => {
    const categories = getCategoryOptions();
    setFormData({
      ...formData,
      category: categories[0],
      subcategory: ""
    });
  }, [productType]);

  useEffect(() => {
    const subcategories = getSubcategoryOptions();
    setFormData({
      ...formData,
      subcategory: subcategories[0] || ""
    });
  }, [formData.category]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/products?type=${productType}`);
      const data = await response.json();
      if (data.success && data.products) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setProducts([]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("subcategory", formData.subcategory);
    formDataToSend.append("product_type", productType);
    if (selectedFile) {
      formDataToSend.append("image", selectedFile);
    }

    try {
      const response = await fetch("http://localhost:5001/api/products", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Product added successfully!");
        setFormData({
          name: "",
          description: "",
          category: getCategoryOptions()[0],
          subcategory: ""
        });
        setSelectedFile(null);
        document.querySelector('input[type="file"]').value = '';
        fetchProducts();
      } else {
        alert(data.message || "Error adding product");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Error adding product: " + err.message);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await fetch(`http://localhost:5001/api/products/${id}`, {
          method: "DELETE"
        });

        const data = await response.json();

        if (response.ok && data.success) {
          alert("Product deleted successfully!");
          fetchProducts();
        } else {
          alert(data.message || "Error deleting product");
        }
      } catch (err) {
        console.error("Error:", err);
        alert("Error deleting product");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="admin-dashboard">

      {/* CENTERED WRAPPER */}
      <div className="admin-wrapper">

        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>

        <div className="admin-content">

          <div className="product-type-selector">
            <button
              className={`type-btn ${productType === 'flawed_specimens' ? 'active' : ''}`}
              onClick={() => setProductType('flawed_specimens')}
            >
              Flawed Specimens
            </button>
            <button
              className={`type-btn ${productType === 'calibration_blocks' ? 'active' : ''}`}
              onClick={() => setProductType('calibration_blocks')}
            >
              Calibration Blocks
            </button>
          </div>

          <div className="add-product-section">
            <h2>Add New {productType === 'flawed_specimens' ? 'Flawed Specimen' : 'Calibration Block'}</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} rows="4" required />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleInputChange}>
                  {getCategoryOptions().map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Subcategory</label>
                <select name="subcategory" value={formData.subcategory} onChange={handleInputChange} required>
                  {getSubcategoryOptions().map(sub => <option key={sub} value={sub}>{sub}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Product Image</label>
                <input type="file" accept="image/*" onChange={handleFileChange} required />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Uploading..." : "Add Product"}
              </button>
            </form>
          </div>

          <div className="products-list-section">
            <h2>Existing {productType === 'flawed_specimens' ? 'Flawed Specimens' : 'Calibration Blocks'} ({products.length})</h2>

            {products.length > 0 ? (
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-item">
                    <img src={`http://localhost:5001${product.image_url}`} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="category">{product.category} - {product.subcategory}</p>
                    <button onClick={() => handleDelete(product.id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-products">No products yet. Add your first product above!</div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
