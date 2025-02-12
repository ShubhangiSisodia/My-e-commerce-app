"use client"; 
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./cart.css"

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
