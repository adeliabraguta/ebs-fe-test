import React, {createContext, ReactNode, useState} from "react";
import {Product} from "../types/productTypes.ts";

type GlobalContextType = {
    cartProducts: Product[]
}

export const GlobalContext = createContext<GlobalContextType | null >(null)

const GlobalProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);

    return (
        <GlobalContext.Provider value={{cartProducts}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
