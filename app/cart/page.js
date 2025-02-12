"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CartItem from "../../components/CartItem";
// import { addToCart } from "../../redux/cartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
     
        dispatch({ type: "cart/setCartItems", payload: JSON.parse(storedCart) });
      }
    }
  }, [dispatch]);

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