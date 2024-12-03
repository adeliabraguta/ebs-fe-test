import {Product} from "../../types/productTypes.ts";
import {CartButton, ProductContainer} from "./ProductComponent.styled.tsx";
import {BsCartPlus} from "react-icons/bs";

const ProductComponent = ({product}: { product: Product }) => {
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
                <CartButton><BsCartPlus className={"icon"}/></CartButton>
            </div>

        </ProductContainer>
    );
};

export default ProductComponent;
