import React, {createContext, ReactNode, useContext, useState} from "react";
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
    totalPrice: number
    countTotalPrice: () => void;
    increaseQuantity: (product: Product) => void
    decreaseQuantity: (product: Product) => void
    clearCart: () => void;
    applyPromoCode: () => void;
    searchParam: string
    addSearchParam: (param: string) => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null)

const GlobalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [filterParam, setFilterParam] = useState<string>('');
    const [sortParam, setSortParam] = useState<SortType>('')
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [searchParam, setSearchParam] = useState<string>('')

    const addToCart = (product: Product) => {
        product.quantity = 1
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

    const countTotalPrice = () => {
        setTotalPrice(Number(cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)))
    }

    const increaseQuantity = (product: Product) => {
        const currentProduct = cart.findIndex(p => p.id === product.id)
        const updatedCart = [...cart]
        updatedCart[currentProduct].quantity += 1
        setCart(updatedCart)
    }

    const decreaseQuantity = (product: Product) => {
        const currentProduct = cart.findIndex(p => p.id === product.id)
        const updatedCart = [...cart]
        if (updatedCart[currentProduct].quantity > 1) {
            updatedCart[currentProduct].quantity -= 1
        }
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const applyPromoCode = () => {
        setTotalPrice((prev: number) => {
            const price = prev - (prev * (15 / 100))
            return Number(price.toFixed(2))
        })
    }

    const addSearchParam = (param: string) => {
        setSearchParam(param)
    }

    return (
        <GlobalContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            checkCart,
            addFilterParam,
            filterParam,
            sortParam,
            addSortParam,
            totalPrice,
            countTotalPrice,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
            applyPromoCode,
            searchParam,
            addSearchParam
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        console.warn('useGlobalContext must be used within a GlobalContext.Provider');

        return {
            cart: [] as Product[],
            addToCart: () => {},
            removeFromCart: () => {},
            checkCart: () => false,
            filterParam: '',
            addFilterParam: () => {},
            sortParam: '' as SortType,
            addSortParam: () => {},
            totalPrice: 0,
            countTotalPrice: () => {},
            increaseQuantity: () => {},
            decreaseQuantity: () => {},
            clearCart: () => {},
            applyPromoCode: () => {},
            searchParam: '',
            addSearchParam: () => {},
        };
    }

    return context;
};
export default GlobalProvider;
