import {HiMinusSmall, HiOutlinePlusSmall} from "react-icons/hi2";
import {IoCloseOutline} from "react-icons/io5";
import {ProductCart} from "./ProductComponentCart.styled.tsx";
import {useContext} from "react";
import { GlobalContext, GlobalContextType} from "../../../context/GlobalContext.tsx";
import {Product} from "../../../types/productTypes.ts";

const ProductComponentCart = ({product}: { product: Product }) => {
    const {increaseQuantity, decreaseQuantity, removeFromCart} = useContext(GlobalContext) as GlobalContextType;



    return (
        <ProductCart>
            <div className={"info-container"}>
                <img src={product.image} alt="product"/>
                <div className={"info"}>
                    <span>{product.category}</span>
                    <h3>{product.title}</h3>
                </div>
            </div>

            <div className={"quantity"}>
                <button onClick={() => decreaseQuantity(product)}><HiMinusSmall/></button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQuantity(product)}><HiOutlinePlusSmall/></button>
            </div>

            <span className={"price"}>$ {product.price}</span>

            <span onClick={() => removeFromCart(product)} className={"remove-product"}><IoCloseOutline/></span>
        </ProductCart>
    );
};

export default ProductComponentCart;
