import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Products List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Product ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Product Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Quantity</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Company</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.pid}>
              <td className="px-4 py-2">{product.pid}</td>
              <td className="px-4 py-2">{product.productname}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">{product.qty}</td>
              <td className="px-4 py-2">{product.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetProducts;