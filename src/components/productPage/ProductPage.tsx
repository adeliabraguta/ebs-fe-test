import {ProductPageContainer} from "./ProductPage.styled.tsx";
import {useParams} from "react-router-dom";
import {useFetchProduct} from "../../hooks/useFetchProduct.ts";
import {CartButton} from "../homePage/productComponent/ProductComponent.styled.tsx";
import {BsCartPlus, BsCartX} from "react-icons/bs";
import {useGlobalContext} from "../../context/GlobalContext.tsx";
import {Product} from "../../types/productTypes.ts";
import ContinueShoppingButton from "../UI/continueShoppingButton/continueShoppingButton.tsx";

const ProductPage = () => {
    const {id} = useParams()
    const {product, isLoading, error} = useFetchProduct(`https://fakestoreapi.com/products/${id}`)
    const {checkCart, addToCart, removeFromCart} = useGlobalContext()
    console.log("id", id)
    const addProductToCart = (product: Product) => {
        addToCart(product)
    }

    const removeProductFromCart = (product: Product) => {
        removeFromCart(product)
    }

    const isInCart = product ? checkCart(product as Product) : false

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {product && (
                <ProductPageContainer>
                    <div className={"product-title"}>
                        <div>
                            <p>{product.category}</p>
                            <h3>{product.title}</h3>
                        </div>
                        <ContinueShoppingButton/>
                    </div>
                    <img alt={product.title} src={product.image}/>
                    <div className={"product-info"}>
                        <p>{product.description}</p>
                        <div className={"cart"}>
                            <span>$ {product.price}</span>
                            {isInCart ?
                                <CartButton $isInCart={isInCart} onClick={() => removeProductFromCart(product)}><BsCartX
                                    className={"icon"}/></CartButton> :
                                <CartButton $isInCart={isInCart} onClick={() => addProductToCart(product)}><BsCartPlus
                                    className={"icon"}/></CartButton>
                            }
                        </div>
                    </div>
                </ProductPageContainer>
            )}
        </>
    );
};

export default ProductPage;
