import React, {createContext, ReactNode, useState} from "react";
import {Product, SortType} from "../types/productTypes.ts";

export type CartProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rete: number;
        count: number
    },
    quantity: number;
}
export type GlobalContextType = {
    cart: CartProduct[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (product: CartProduct) => void;
    checkCart: (product: CartProduct) => boolean;
    filterParam: string
    addFilterParam: (param: string) => void;
    sortParam: SortType
    addSortParam: (param: SortType) => void
    totalPrice: number
    countTotalPrice: () => void;
    increaseQuantity: (product: CartProduct) => void
    decreaseQuantity: (product: CartProduct) => void
    clearCart: () => void;
    applyPromoCode: () => void;
}

export const GlobalContext = createContext<GlobalContextType | null>(null)

const GlobalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [filterParam, setFilterParam] = useState<string>('');
    const [sortParam, setSortParam] = useState<SortType>('')
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const addToCart = (product: CartProduct) => {
        product.quantity = 1
        if (!cart.some(p => p.id === product.id)) {
            setCart(prev => [...prev, product])
        }
        console.log(cart)
    }

    const removeFromCart = (product: CartProduct) => {
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

    const increaseQuantity = (product: CartProduct) => {
        const currentProduct = cart.findIndex(p => p.id === product.id)
        const updatedCart = [...cart]
        updatedCart[currentProduct].quantity += 1
        setCart(updatedCart)
    }

    const decreaseQuantity = (product: CartProduct) => {
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
        setTotalPrice((prev:number) => {
            const price = prev - (prev * (15 / 100))
            return Number(price.toFixed(2))
        })
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
            applyPromoCode
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
