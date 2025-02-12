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
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        let data = await fetchProducts(currentPage);

        // console.log("Fetched products:", data);

        if (category) {
          data = data.filter((product) => {
            const lowerCategory = product.category.toLowerCase();
            if (category === "clothing") {
              return lowerCategory.includes("clothing");
            }
            if (category === "beauty") {
              return (
                lowerCategory.includes("beauty") ||
                lowerCategory.includes("jewel")
              );
            }
            return lowerCategory.includes(category);
          });
        }

        if (data.length === 0) {
          setError("No products found for this category.");
          setProducts([]);
          return;
        }

        // Apply sorting
        if (sortBy === "price-low") {
          data.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
          data.sort((a, b) => b.price - a.price);
        }

        setProducts(data);
        setError(null);
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
        {/* Sorting Dropdown */}
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2"
        >
          <option value="">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>

        {/* Category Filtering Dropdown */}
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
