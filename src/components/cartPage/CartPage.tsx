import {useContext} from "react";
import {GlobalContext, GlobalContextType} from "../../context/GlobalContext.tsx";
import ProductComponentCart from "./itemComponent/ProductComponentCart.tsx";
import {CartContainer, CartPageContainer} from "./CartPage.styled.tsx";
import PaginationButton from "../UI/PaginationButton.tsx";
import {Link} from "react-router-dom";
import {HiChevronLeft} from "react-icons/hi";

const CartPage = () => {
    const {cart, countTotalPrice, clearCart} = useContext(GlobalContext) as GlobalContextType;

    const totalPrice = countTotalPrice()

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
