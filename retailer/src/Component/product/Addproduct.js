import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    sub_catid: '',
    retid: '',
    productname: '',
    price: '',
    qty: '',
    company: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/retailer/products', productData);
      setMessage(response.data.message); // Show success message
      setProductData({ sub_catid: '', retid: '', productname: '', price: '', qty: '', company: '' }); // Reset form
    } catch (err) {
      setMessage('Failed to create product');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Create New Product</h1>
      {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="sub_catid"
          placeholder="Sub Category ID"
          value={productData.sub_catid}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="retid"
          placeholder="Retailer ID"
          value={productData.retid}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="productname"
          placeholder="Product Name"
          value={productData.productname}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="number"
          name="qty"
          placeholder="Quantity"
          value={productData.qty}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={productData.company}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;