import {useEffect, useState} from "react";
import {useGlobalContext} from "../../context/GlobalContext.tsx";
import ProductComponentCart from "./ProductComponent/ProductComponentCart.tsx";
import {CartContainer, CartPageContainer} from "./CartPage.styled.tsx";
import PaginationButton from "../UI/paginationButton/PaginationButton.tsx";
import ContinueShoppingButton from "../UI/continueShoppingButton/continueShoppingButton.tsx";

enum PromoCode {
    PERCENTAGE15 = "PasS",
}

const CartPage = () => {
    const {
        cart,
        totalPrice,
        countTotalPrice,
        clearCart,
        applyPromoCode,
        increaseQuantity,
        decreaseQuantity
    } = useGlobalContext();

    const [promoCode, setPromoCode] = useState<string>('');

    useEffect(() => {
        countTotalPrice()
    }, [promoCode, increaseQuantity, decreaseQuantity])

    const handlePromoCode = () => {
        if (promoCode === PromoCode.PERCENTAGE15) {
            applyPromoCode()
        }
        setPromoCode('')
    }

    return (
        <CartPageContainer>
            <h2>Shopping Cart</h2>
            <CartContainer>
                {cart.map((product) => (
                    <ProductComponentCart key={product.id} product={product}/>
                ))}
            </CartContainer>
            <div className={"cart-options"}>
                <ContinueShoppingButton/>
                {cart.length > 0 &&
                    (
                        <div>
                            <div className={"promocode-container"}>
                                <input placeholder={"Add PromoCode"} value={promoCode}
                                       onChange={(e) => setPromoCode(e.target.value)}/>
                                <button onClick={handlePromoCode}>Apply</button>
                            </div>
                            <p><span>Total: </span>$ {totalPrice}</p>
                            <PaginationButton onClick={() => clearCart()}>Clear cart</PaginationButton>
                        </div>
                    )
                }
            </div>
            <div className={"cart-options_mobile"}>
                <ContinueShoppingButton/>
                {cart.length > 0 &&
                    (
                        <div>
                            <div className={"promocode-container"}>
                                <input placeholder={"Add PromoCode"} value={promoCode}
                                       onChange={(e) => setPromoCode(e.target.value)}/>
                                <button onClick={handlePromoCode}>Apply</button>
                            </div>
                            <div className={"mobile-price"}>
                                <p><span>Total: </span>$ {totalPrice}</p>
                                <PaginationButton onClick={() => clearCart()}>Clear cart</PaginationButton>
                            </div>
                        </div>
                    )
                }
            </div>
            {cart.length === 0 && <p>Your cart is empty!</p>}

        </CartPageContainer>
    );
};

export default CartPage;
