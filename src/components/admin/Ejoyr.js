import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './ejoyr.css';

const Ejoyr = () => {
  const apiId = process.env.REACT_APP_EJOYR_API;
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    brand: '',
    supplier: '',
    specification: '',
    price: null,
    discount: null,
    stock: null,
    rating: null,
    ratingCount: null,
    affiliate: null,
    images: ['', '', '']
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(null);

  // Categories
  const categories = ['Electronics', 'Home Decor', 'Fashion', 'Other'];

  // Fetch all products
  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiId);
      setProducts(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [apiId]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image URL changes
  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({
      ...formData,
      images: newImages
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      brand: '',
      supplier: '',
      specification: '',
      price: 0,
      discount: 0,
      stock: 0,
      rating: 0,
      ratingCount: 0,
      affiliate: '',
      images: ['', '', '']
    });
    setEditingProduct(null);
  };

  // Submit form (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(`${apiId}/${editingProduct._id}`, formData);
      } else {
        await axios.post(apiId, formData);
      }
      setDone("Submitted Successfully ✅");
      setTimeout(() => {
        resetForm();
        setDone(null);
        fetchProducts();
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  // Edit product
  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      category: product.category,
      brand: product.brand,
      supplier: product.supplier,
      specification: product.specification,
      price: product.price,
      discount: product.discount,
      stock: product.stock,
      rating: product.rating || 0,
      ratingCount: product.ratingCount || 0,
      affiliate: product.affiliate || '',
      images: [...product.images, '', ''].slice(0, 3)
    });
  };

  // Delete product
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`${apiId}/${id}`);
        setDone("Deleted Successfully ✅")
        setTimeout(() => {
          setDone(null)
          fetchProducts();
        }, 2000);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  if (isLoading)
    return <>
      <div className="ej-loading-container">
        <div className="formatter-loading-spinner"></div>
        <p>Loading..</p>
      </div>
    </>;
  if (error)
    return <>
      <div className="ej-loading-container">
        <p style={{color:'red'}}>Error Loading..</p>
      </div>
    </>;

  return (
    <div className="ej-admin-container">
      <div className="ej-products-list">
        <h2>Products List</h2>
        <div className="ej-products-table-container">
          <table className="ej-products-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    {product.images[0] && (
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="ej-product-thumbnail"
                      />
                    )}
                  </td>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>₹{product.price.toFixed(2)}</td>
                  <td>{product.stock}</td>
                  <td className="ej-actions-cell">
                    <button
                      onClick={() => handleEdit(product)}
                      className="ej-edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="ej-delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {done && (
        <div className="success-animation">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
          <h1>{done}</h1>
        </div>
      )}
      <div className="ej-admin-form-container">
        <h2 style={{color:'black'}}>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
        <form onSubmit={handleSubmit} className="ej-admin-form">
          <div className="ej-form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="ej-form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="ej-form-row">
            <div className="ej-form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {formData.category === 'Other' && (
                <input
                  type="text"
                  name="customCategory"
                  placeholder="Enter custom category"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              )}
            </div>

            <div className="ej-form-group">
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="ej-form-row">
            <div className="ej-form-group">
              <label>Supplier</label>
              <input
                type="text"
                name="supplier"
                value={formData.supplier}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="ej-form-group">
              <label>Specification (comma separated)</label>
              <input
                type="text"
                name="specification"
                value={formData.specification}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="ej-form-row">
            <div className="ej-form-group">
              <label>Price (₹)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className="ej-form-group">
              <label>Discount (%)</label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                min="0"
                max="100"
                required
              />
            </div>

            <div className="ej-form-group">
              <label>Stock</label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}
                min="0"
                required
              />
            </div>
          </div>

          <div className="ej-form-row">
            <div className="ej-form-group">
              <label>Rating (1-5)</label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                min="0"
                max="5"
                step="0.1"
              />
            </div>

            <div className="ej-form-group">
              <label>Rating Count</label>
              <input
                type="number"
                name="ratingCount"
                value={formData.ratingCount}
                onChange={handleInputChange}
                min="0"
              />
            </div>

            <div className="ej-form-group">
              <label>Affiliate Link</label>
              <input
                type="text"
                name="affiliate"
                value={formData.affiliate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="ej-form-group">
            <label>Image URLs</label>
            {formData.images.map((image, index) => (
              <input
                key={index}
                type="url"
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                placeholder={`Image URL ${index + 1}`}
              />
            ))}
          </div>

          <div className="ej-form-actions">
            <button type="submit" className="ej-submit-btn">
              {editingProduct ? 'Update Product' : 'Add Product'}
            </button>
            {editingProduct && (
              <button type="button" onClick={resetForm} className="ej-cancel-btn">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ejoyr;