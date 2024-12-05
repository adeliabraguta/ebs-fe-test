import {Product, SortType} from "../../../types/productTypes.ts";
import {vitest} from "vitest";
import {mockCart} from "./CartPage.test.tsx";

export const mockContext = {
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
