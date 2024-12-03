import React, {createContext, ReactNode, useState} from "react";
import {Product} from "../types/productTypes.ts";

export type GlobalContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    checkCart: (product: Product) => boolean;
}

export const GlobalContext = createContext<GlobalContextType | null>(null)

const GlobalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        if (!cart.some(p => p.id === product.id)) {
            setCart(prev => [...prev, product])
        }
    }

    const removeFromCart = (product: Product) => {
        setCart(prev => prev.filter(p => p.id !== product.id))
    }

    const checkCart = (product: Product) => {
        return cart.some(p => p.id === product.id)
    }

    return (
        <GlobalContext.Provider value={{cart, addToCart, removeFromCart, checkCart}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
