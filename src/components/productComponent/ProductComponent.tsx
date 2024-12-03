import {Product} from "../../types/productTypes.ts";
import {CartButton, ProductContainer} from "./ProductComponent.styled.tsx";
import {BsCartPlus, BsCartX} from "react-icons/bs";
import {useContext} from "react";
import {GlobalContext, GlobalContextType} from "../../context/GlobalContext.tsx";

const ProductComponent = ({product}: { product: Product }) => {
    const {addToCart, removeFromCart, checkCart} = useContext(GlobalContext) as GlobalContextType;

    const addProductToCart = (product: Product) => {
        addToCart(product)
    }

    const removeProductFromCart = (product: Product) => {
        removeFromCart(product)
    }

    const isInCart = checkCart(product)

    return (
        <ProductContainer>
            <div>
                <img src={product.image} alt={product.title}/>
                <div>
                    <p>{product.category}</p>
                    <h3>{product.title}</h3>
                </div>
            </div>
            <div>
                <span>$ {product.price}</span>
                {isInCart ? <CartButton $isInCart={isInCart} onClick={() => removeProductFromCart(product)}><BsCartX
                        className={"icon"}/></CartButton> :
                    <CartButton $isInCart={isInCart} onClick={() => addProductToCart(product)}><BsCartPlus className={"icon"}/></CartButton>
                }
            </div>

        </ProductContainer>
    );
};

export default ProductComponent;
