import React from "react";
import './styles.scss'
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button><Link href={product.name}>View more</Link></button>
    </div>
  );
};

export default ProductCard;
