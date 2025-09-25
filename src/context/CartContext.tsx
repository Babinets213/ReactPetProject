"use client";

import { CartItem } from "@/types/courses";
import { createContext, useContext, useState, useEffect, useMemo } from "react";

const CART_STORAGE_KEY = "cart";

type CartContextType = {
  cart: CartItem[];
  addToCart: (course: CartItem) => void;
  deleteFromCart: (courseId: string) => void;
  clearCart: () => void;
  totalCartPrice: number;
};
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = function (course: CartItem) {
    setCart((prevCart) => {
      if (prevCart.some((item) => String(item.id) === String(course.id)))
        return prevCart;
      return [...prevCart, course];
    });
  };

  const deleteFromCart = function (courseId: string) {
    setCart((prevCart) =>
      prevCart.filter((item) => String(item.id) !== String(courseId)),
    );
  };

  const clearCart = () => setCart([]);

  const totalCartPrice = useMemo(() => {
    return cart.reduce((total, item) => {
      const price = Number(item.price) || 0;
      return total + price;
    }, 0);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteFromCart, clearCart, totalCartPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
