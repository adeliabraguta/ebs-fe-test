import {useFetchProducts} from "../../hooks/useFetchProducts.ts";
import {useContext, useState} from "react";
import ProductComponent from "../productComponent/ProductComponent.tsx";
import {Product} from "../../types/productTypes.ts";
import {HomeContainer, PaginationContainer, ProductsContainer, ProductsFilter} from "./HomePage.styled.tsx";
import PaginationButton from "../UI/PaginationButton.tsx";
import FilterComponent from "../features/filtering/FilterComponent.tsx";
import {GlobalContext, GlobalContextType} from "../../context/GlobalContext.tsx";
import Popup from "./popup/Popup.tsx";
import SortComponent from "../features/sorting/SortComponent.tsx";
import {HiChevronLeft} from "react-icons/hi";

const HomePage = () => {
    const {filterParam, sortParam, searchParam, addSearchParam} = useContext(GlobalContext) as GlobalContextType
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

    const limit = 8;
    const [page, setPage] = useState<number>(1);
    const startIndex: number = (page - 1) * limit
    const endIndex: number = startIndex + limit
    const paginatedProducts: Product[] = finalProducts && finalProducts.slice(startIndex, endIndex)
    const totalPagesNr: number = Math.ceil(Number(finalProducts.length) / limit)
    const totalPages: number[] = Array.from({length: totalPagesNr}, (_, i) => i + 1) ?? []

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const handleNextPage = () => {
        setPage((prev) => prev + 1)
        handleScrollToTop()
    }

    const handleBackPage = () => {
        setPage((prev) => prev - 1)
        handleScrollToTop()
    }

    const handleCurrentPage = (p: number) => {
        setPage(p)
        handleScrollToTop()
    }

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
            {paginatedProducts.length === 0 &&
                <div className={"no-products"}>
                    <button onClick={handleBackToAllProducts}><HiChevronLeft className={"icon"}/>Back to all products</button>
                    <p>No products found with title <b>" {searchParam} "</b></p>
                </div>}

            <ProductsContainer>
                {paginatedProducts.map((product: Product) => (
                    <ProductComponent key={product.id} product={product}/>
                ))}

            </ProductsContainer>

            {paginatedProducts.length > 0 && (

                <PaginationContainer>

                    <PaginationButton disabled={page === 1}
                                      onClick={handleBackPage}>Back</PaginationButton>

                    {totalPages.map((p, index) => (
                        <PaginationButton $isCurrent={p === page} key={index}
                                          onClick={() => handleCurrentPage(p)}>{p}</PaginationButton>
                    ))}

                    <PaginationButton disabled={endIndex >= products.length}
                                      onClick={handleNextPage}>Next</PaginationButton>
                </PaginationContainer>
            )}
        </HomeContainer>
    );
};

export default HomePage;
