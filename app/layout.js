"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="min-h-screen flex flex-col">
        <Provider store={store} >
        <Navbar /> 
          {children}
        </Provider>

        {/* <h1 className="text-red-500">Tailwind is Working?</h1> */}
      </body>
      </html>
  );
}
