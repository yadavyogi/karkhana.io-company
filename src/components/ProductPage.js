import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: {id}</p>
      {/* Fetch product details by ID */}
    </div>
  );
}

export default ProductPage;
