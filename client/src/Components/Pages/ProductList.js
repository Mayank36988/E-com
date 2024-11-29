import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.pid} className="bg-white border border-gray-300 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{product.productname}</h2>
            <p className="text-gray-600"><strong>Product ID:</strong> {product.pid}</p>
            <p className="text-gray-600"><strong>Price:</strong> ${product.price}</p>
            <p className="text-gray-600"><strong>Quantity:</strong> {product.qty}</p>
            <p className="text-gray-600"><strong>Company:</strong> {product.company}</p>
            <div className="mt-4 flex space-x-4">
              <button className="bg-green-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-green-600 transition duration-200">
                Edit
              </button>
              <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-orange-600 transition duration-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
