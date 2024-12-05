import {describe, it} from 'vitest'
import CartPage from "../CartPage.tsx";
import {fireEvent, render, screen} from "@testing-library/react";
import {GlobalContext} from "../../../context/GlobalContext.tsx";
import {MemoryRouter} from "react-router-dom";
import {mockContext} from "./mockContext.ts";

export const mockCart = [
    {
        id: 1,
        title: 'Product 1',
        price: 10,
        description: "la lalalla",
        category: "electronics",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
            rete: 5,
            count: 5
        },
        quantity: 1
    },
    {
        id: 2,
        title: 'Product 2',
        price: 20,
        description: "la lalalla ddgddd",
        category: "electronics",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
            rete: 5,
            count: 5
        },
        quantity: 2
    },
]



describe("CartPage", () => {
    beforeEach(() => {
        render(
            <GlobalContext.Provider value={mockContext}>
                <MemoryRouter>
                    <CartPage/>
                </MemoryRouter>
            </GlobalContext.Provider>
        )
    })

    it("render CartPage", () => {
        expect(screen.getByText('Shopping Cart')).toBeInTheDocument()
        expect(screen.getByText('Product 1')).toBeInTheDocument()
        expect(screen.getByText('Product 2')).toBeInTheDocument()
        expect(screen.getByText('$ 30')).toBeInTheDocument()
    })

    it("removes all products when Clear cart is clicked",() =>{
        const removeBtn = screen.getByRole('button', { name: `Clear cart` })
        fireEvent.click(removeBtn)
        expect(mockContext.clearCart).toHaveBeenCalled()
        expect(mockContext.clearCart).toHaveBeenCalledTimes(1)
    })

    it("increase quantity when + button is clicked", () =>{
        const increaseBtn = screen.getByTestId('increase-quantity-1')
        fireEvent.click(increaseBtn)
        expect(mockContext.cart[0].quantity).toBe(2)
    })

    it("decrease quantity when + button is clicked", () =>{
        const decreaseBtn = screen.getByTestId('decrease-quantity-2')
        fireEvent.click(decreaseBtn)
        expect(mockContext.cart[1].quantity).toBe(1)
    })
})

