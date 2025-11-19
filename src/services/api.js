const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  // Helper method to handle responses
  async handleResponse(response) {
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }
    
    return data;
  }

  // Helper method to get auth headers
  getAuthHeaders() {
    const token = localStorage.getItem('adminToken');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }

  // Admin APIs
  async adminLogin(password) {
    const response = await fetch(`${API_BASE_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password })
    });
    return this.handleResponse(response);
  }

  async changePassword(currentPassword, newPassword) {
    const response = await fetch(`${API_BASE_URL}/admin/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.getAuthHeaders()
      },
      body: JSON.stringify({ currentPassword, newPassword })
    });
    return this.handleResponse(response);
  }

  // Product APIs
  async getProducts(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${API_BASE_URL}/products${queryString ? `?${queryString}` : ''}`);
    return this.handleResponse(response);
  }

  async getProductById(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return this.handleResponse(response);
  }

  async createProduct(formData) {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        ...this.getAuthHeaders()
      },
      body: formData
    });
    return this.handleResponse(response);
  }

  async updateProduct(id, formData) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        ...this.getAuthHeaders()
      },
      body: formData
    });
    return this.handleResponse(response);
  }

  async deleteProduct(id) {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        ...this.getAuthHeaders()
      }
    });
    return this.handleResponse(response);
  }
}

export default new ApiService();
