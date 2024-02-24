import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductItem;
