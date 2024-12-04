import {HiMinusSmall, HiOutlinePlusSmall} from "react-icons/hi2";
import {IoCloseOutline} from "react-icons/io5";
import {ProductCart} from "./ProductComponentCart.styled.tsx";
import {useGlobalContext} from "../../../context/GlobalContext.tsx";
import {Product} from "../../../types/productTypes.ts";

const ProductComponentCart = ({product}: { product: Product }) => {
    const {increaseQuantity, decreaseQuantity, removeFromCart} = useGlobalContext()

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
                <button onClick={() => decreaseQuantity(product)} data-testid={`decrease-quantity-${product.id}`}><HiMinusSmall/></button>
                <span>{product.quantity}</span>
                <button  onClick={() => increaseQuantity(product)} data-testid={`increase-quantity-${product.id}`}><HiOutlinePlusSmall/></button>
            </div>

            <span className={"price"}>$ {product.price}</span>

            <span onClick={() => removeFromCart(product)} className={"remove-product"}><IoCloseOutline/></span>
        </ProductCart>
    );
};

export default ProductComponentCart;
