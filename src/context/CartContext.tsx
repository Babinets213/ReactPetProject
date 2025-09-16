"use client";

import { CartItem } from "@/types/courses";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cart: CartItem[];
  addToCart: (course: CartItem) => void;
  deleteFromCart: (courseId: number) => void;
};
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = function (course: CartItem) {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === course.id)) return prevCart;
      return [...prevCart, course];
    });
  };

  const deleteFromCart = function (courseId: number) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== courseId));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
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
