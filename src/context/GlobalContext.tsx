import React, {createContext, ReactNode, useState} from "react";
import {Product, SortType} from "../types/productTypes.ts";

export type GlobalContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    checkCart: (product: Product) => boolean;
    filterParam: string
    addFilterParam: (param: string) => void;
    sortParam: SortType
    addSortParam: (param: SortType) => void
}

export const GlobalContext = createContext<GlobalContextType | null>(null)

const GlobalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [filterParam, setFilterParam] = useState<string>('');
    const [sortParam, setSortParam] = useState<SortType>('')
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

    const addFilterParam = (param: string) => {
        if (param !== filterParam) {
            setFilterParam(param)
        } else {
            setFilterParam('')
        }
    }

    const addSortParam = (param: SortType) => {
        setSortParam(param)
    }

    return (
        <GlobalContext.Provider value={{cart, addToCart, removeFromCart, checkCart, addFilterParam, filterParam, sortParam, addSortParam}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
