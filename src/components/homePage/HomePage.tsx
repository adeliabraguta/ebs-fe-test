import {useFetchProducts} from "../../hooks/useFetchProducts.ts";
import {useState} from "react";
import {Product} from "../../types/productTypes.ts";
import {HomeContainer, ProductsContainer, ProductsFilter} from "./HomePage.styled.tsx";
import FilterComponent from "../features/filtering/FilterComponent.tsx";
import {useGlobalContext} from "../../context/GlobalContext.tsx";
import Popup from "./popup/Popup.tsx";
import SortComponent from "../features/sorting/SortComponent.tsx";
import {HiChevronLeft} from "react-icons/hi";
import ProductComponent from "./productComponent/ProductComponent.tsx";
import {handleScrollToTop} from "./scrollToTop.ts";
import PaginationComponent from "./pagination/PaginationComponent.tsx";

const HomePage = () => {
    const {filterParam, sortParam, searchParam, addSearchParam} = useGlobalContext()
    const [page, setPage] = useState<number>(1)
    const limit = 8
    const startIndex: number = (page - 1) * limit
    const endIndex: number = startIndex + limit

    const {
        products,
        isLoading,
        error
    } = useFetchProducts(`https://fakestoreapi.com/products${filterParam ? `/category/${filterParam}` : ""}`)

    let finalProducts

    if (sortParam) {
        finalProducts = [...products].sort((a: Product, b: Product) => (sortParam === "asc" ? a.price - b.price : b.price - a.price))
    } else if (searchParam) {
        finalProducts = [...products].filter((product) => product.title.toLowerCase().includes(searchParam.toLowerCase()))
    } else {
        finalProducts = products
    }

    const paginatedProducts: Product[] = finalProducts && finalProducts.slice(startIndex, endIndex)

    const handleBackToAllProducts = () => {
        handleScrollToTop()
        addSearchParam('')
    }

    return (
        <HomeContainer>
            <Popup/>
            <ProductsFilter>
                <SortComponent/>
                <FilterComponent/>
            </ProductsFilter>

            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {finalProducts.length === 0 &&
                <div className={"no-products"}>
                    <button onClick={handleBackToAllProducts}><HiChevronLeft className={"icon"}/>Back to all products
                    </button>
                    <p>No products found</p>
                </div>
            }

            <ProductsContainer>
                {paginatedProducts.map((product: Product) => (
                    <ProductComponent key={product.id} product={product}/>
                ))}
            </ProductsContainer>

            {products.length > 0 && (
                <PaginationComponent finalProducts={finalProducts} page={page} setPage={setPage} endIndex={endIndex}
                                     limit={limit}/>
            )}
        </HomeContainer>
    )
}

export default HomePage;
