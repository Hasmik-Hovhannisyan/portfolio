import { useState, createContext, ReactNode, useContext } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  firstName: string;
  setFirstName: (c: string) => void;
  getCartItemIT: (id: number) => number;
  increaseQuality: (id: number) => void;
  decreaceQuality: (id: number) => void;
  total: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [firstName, setFirstName] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const total = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getCartItemIT(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuality(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaceQuality(id: number) {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        firstName,
        setFirstName,
        increaseQuality,
        getCartItemIT,
        decreaceQuality,
        total,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
