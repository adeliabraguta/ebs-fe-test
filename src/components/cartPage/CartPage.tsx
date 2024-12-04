import {useContext, useEffect, useState} from "react";
import {GlobalContext, GlobalContextType} from "../../context/GlobalContext.tsx";
import ProductComponentCart from "./itemComponent/ProductComponentCart.tsx";
import {CartContainer, CartPageContainer} from "./CartPage.styled.tsx";
import PaginationButton from "../UI/PaginationButton.tsx";
import {Link} from "react-router-dom";
import {HiChevronLeft} from "react-icons/hi";

enum PromoCode {
    PERCENTAGE15 = "PasS",
}

const CartPage = () => {
    const {
        cart,
        totalPrice,
        countTotalPrice,
        clearCart,
        applyPromoCode
    } = useContext(GlobalContext) as GlobalContextType;
    const [promoCode, setPromoCode] = useState<string>('');
    useEffect(() => {
        countTotalPrice()
    }, [promoCode])

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
                <Link to={"/"}><HiChevronLeft/>CONTINUE SHOPPING</Link>
                {cart.length > 0 &&
                    (<div>
                        <div className={"promocode-container"}>
                            <input placeholder={"Add PromoCode"} value={promoCode}
                                   onChange={(e) => setPromoCode(e.target.value)}/>
                            <button onClick={handlePromoCode}>Apply</button>
                        </div>
                        <p><span>Total: </span>$ {totalPrice}</p>
                        <PaginationButton onClick={() => clearCart()}>Clear cart</PaginationButton>
                    </div>)
                }
            </div>
            {cart.length === 0 && <p>Your cart is empty!</p>}

        </CartPageContainer>
    );
};

export default CartPage;
