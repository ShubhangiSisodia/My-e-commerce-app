"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { fetchProducts } from "../lib/fetchProducts";
import "./productCard.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState(""); // filter state

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(currentPage, sortBy, category);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [currentPage, sortBy, category]);

  return (
    <div>
      <h1 style={{ margin: "2rem", fontSize: "1.5rem" }}>Products</h1>

      {/* Sorting and Filtering */}
      <div
        style={{
          margin: "2rem",
          fontSize: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2"
        >
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
