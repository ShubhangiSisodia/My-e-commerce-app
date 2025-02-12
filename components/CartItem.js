"use client";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
import "./cart.css"; 

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-details">
        {/* Product Image */}
        <img src={item.image} alt={item.title} className="cart-item-image" />

        {/* Product Details */}
        <div className="cart-item-info">
          <h2 className="cart-item-title">{item.title}</h2>
          <p className="cart-item-description">{item.description}</p>
          <p className="cart-item-price">${item.price}</p>

          {/* Display Rating */}
          <div className="cart-item-rating">
            ⭐ {item.rating?.rate} ({item.rating?.count} reviews)
          </div>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="cart-item-actions">
        <button
          onClick={() =>
            dispatch(
              updateQuantity({ id: item.id, quantity: item.quantity - 1 })
            )
          }
          className="quantity-btn"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          onClick={() =>
            dispatch(
              updateQuantity({ id: item.id, quantity: item.quantity + 1 })
            )
          }
          className="quantity-btn"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
