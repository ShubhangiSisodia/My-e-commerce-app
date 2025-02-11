"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import "./product.css"

export default function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");
        const data = await response.json();
        setProduct(data);

        const relatedRes = await fetch("https://fakestoreapi.com/products");
        const relatedData = await relatedRes.json();
        const filteredRelated = relatedData.filter(
          (item) => item.category === data.category && item.id !== data.id
        );
        setRelatedProducts(filteredRelated.slice(0, 4)); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  // Loading state
  if (loading) return <p className="loading">Loading product details...</p>;

  // Error state
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="product-detail-container">
      <div className="product-main">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-rating">Rating: ⭐{product.rating.rate} ({product.rating.count} reviews)</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.map((item) => (
            <Link href={`/product/${item.id}`} key={item.id} className="related-card">
              <img src={item.image} alt={item.title} className="related-image" />
              <p className="related-title">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
