import React from 'react';
import './ProductCard.css'; // We'll create this CSS file next

// This component receives props: image, title, and price
function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">{price}</p>
        <button className="product-button">View Item</button>
      </div>
    </div>
  );
}

export default ProductCard;