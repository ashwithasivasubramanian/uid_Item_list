import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
  });

  // State to store the list of items
  const [items, setItems] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.name && formData.description && formData.quantity) {
      const newItem = {
        name: formData.name,
        description: formData.description,
        quantity: parseInt(formData.quantity),
      };

      // Add new item to the list
      setItems([...items, newItem]);

      // Reset form fields
      setFormData({ name: '', description: '', quantity: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="app-container">
      <h1>Item List</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="item-form">
        <div className="form-group">
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            min="1"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Add Item</button>
      </form>

      {/* Items List Section */}
      <div className="item-list">
        <h2>Items:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.description} (Quantity: {item.quantity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

