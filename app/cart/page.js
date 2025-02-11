"use client";

import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems); 

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
}

