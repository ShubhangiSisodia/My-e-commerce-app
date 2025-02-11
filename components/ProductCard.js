"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "./productCard.css";
import Link from "next/link";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      {/* Product Image */}
      <img
        src={product.image || "https://via.placeholder.com/640x480"}
        alt={product.title}
        className="product-image"
      />

      {/* Product Info */}
      <div className="product-info">
        <Link href={`/product/${product.id}`} className="product-title">
          {product.title}
        </Link>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        {/* Display Rating */}
        <div className="product-rating">
          ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
        </div>

        {/* Add to Cart Button */}
        <button
          className="add-to-cart"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
