import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-login without password
    handleAutoLogin();
  }, []);

  const handleAutoLogin = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ autoLogin: true }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleDirectAccess = () => {
    handleAutoLogin();
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Access</h2>
        <p>Click below to access the admin dashboard</p>
        <button 
          onClick={handleDirectAccess} 
          className="login-btn"
        >
          Enter Admin Dashboard
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
