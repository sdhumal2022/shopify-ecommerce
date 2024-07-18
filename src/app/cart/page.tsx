"use client"
import React, { useEffect, useState } from 'react';
import CpCart from '../../component/cp-cart/cpCart';

interface CartItem {
  productId: string;
  productName: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartPage() {
  const [cartData, setCartData] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartData = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartData(cart);
    };

    fetchCartData();

    // Set up a storage event listener to update the cart data when localStorage changes
    const handleStorageChange = () => {
      fetchCartData();
    };

    window.addEventListener('storage', handleStorageChange);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <main>
      <h1>This is the cart page</h1>
      {cartData.map((item, index) => (
        <CpCart
          key={index}
          productName={item.productName}
          size={item.size}
          color={item.color}
          price={item.price}
          quantity={item.quantity}
          image={item.image}
        />
      ))}
    </main>
  );
}
