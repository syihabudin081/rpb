import React from 'react';

export default function Navbar() {
  return (
    <header>
      <a href="#1" className="brand">RPB STORE</a>
      <div className="menu-btn" />
      <div className="navigation">
        <div className="navigation-items">
          <a href="home.html">Home</a>
          <a href="product.html">Product</a>
          <a href="#2">Order</a>
          <a href="#3">About</a>
          <a href="#4">Account</a>
        </div>
      </div>
    </header>
  );
}
