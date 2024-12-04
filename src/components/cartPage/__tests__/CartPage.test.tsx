import {describe, it, vitest} from 'vitest'
import CartPage from "../CartPage.tsx";
import {fireEvent, render, screen} from "@testing-library/react";
import {GlobalContext} from "../../../context/GlobalContext.tsx";
import {Product, SortType} from "../../../types/productTypes.ts";
import {MemoryRouter} from "react-router-dom";

const mockCart = [
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

const mockContext = {
    cart: mockCart,
    addToCart: vi.fn(),
    removeFromCart: vi.fn(),
    checkCart: vi.fn(),
    filterParam: '',
    addFilterParam: vi.fn(),
    sortParam: '' as SortType,
    addSortParam: vi.fn(),
    totalPrice: 30,
    countTotalPrice: vi.fn(() => {
        mockContext.totalPrice = Number(mockContext.cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2))
    }),
    increaseQuantity: (product: Product) => {
        const cartItem = mockCart.find((item) => item.id === product.id);
        if (cartItem) cartItem.quantity += 1;
    },
    decreaseQuantity: vi.fn((product: Product) => {
        const cartItem = mockCart.find((item) => item.id === product.id);
        if (cartItem) cartItem.quantity -= 1;
    }),
    clearCart: vitest.fn(),
    applyPromoCode: vi.fn(),
    searchParam: '',
    addSearchParam: vi.fn()
}

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

