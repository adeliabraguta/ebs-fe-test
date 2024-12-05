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
import PaginationButton from "../UI/paginationButton/PaginationButton.tsx";
import {PaginationContainer} from "./pagination/PaginatitonComponent.styled.tsx";

const HomePage = () => {
    const {filterParam, sortParam, searchParam, addSearchParam} = useGlobalContext()
    const [page, setPage] = useState<number>(1);
    const limit = 8;
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

    const totalPagesNr: number = Math.ceil(Number(finalProducts.length) / limit)
    const totalPages: number[] = Array.from({length: totalPagesNr}, (_, i) => i + 1) ?? []

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
                </div>}

            <ProductsContainer>
                {paginatedProducts.map((product: Product) => (
                    <ProductComponent key={product.id} product={product}/>
                ))}

            </ProductsContainer>

            {products.length > 0 && (
                <PaginationContainer>

                    <PaginationButton disabled={page === 1}
                                      onClick={handleBackPage}>Back</PaginationButton>

                    {totalPages.map((p, index) => (
                        <PaginationButton isCurrent={p === page} key={index}
                                          onClick={() => handleCurrentPage(p)}>{p}</PaginationButton>
                    ))}

                    <PaginationButton disabled={endIndex >= finalProducts.length}
                                      onClick={handleNextPage}>Next</PaginationButton>
                </PaginationContainer>
            )}
        </HomeContainer>
    );
};

export default HomePage;
