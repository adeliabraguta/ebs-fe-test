import {useFetchProducts} from "../../hooks/useFetchProducts.ts";
import { useState} from "react";
import ProductComponent from "../productComponent/ProductComponent.tsx";
import {Product} from "../../types/productTypes.ts";
import {HomeContainer, Pagination, ProductsContainer} from "./HomePage.styled.tsx";
import PaginationButton from "../UI/PaginationButton.tsx";

const HomePage = () => {
    const {products, isLoading, error} = useFetchProducts('https://fakestoreapi.com/products')
    const limit = 8;
    const [page, setPage] = useState<number>(1);
    const startIndex: number = (page - 1) * limit
    const endIndex: number = startIndex + limit
    const paginatedProducts: Product[] = products.slice(startIndex, endIndex)
    const totalPagesNr: number = Math.ceil(Number(products.length) / limit)
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

    return (
        <HomeContainer>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ProductsContainer>
                {paginatedProducts.map((product: Product) => (
                    <ProductComponent key={product.id} product={product}/>
                ))}
            </ProductsContainer>

            <Pagination>
                <PaginationButton disabled={page === 1}
                                  onClick={handleBackPage}>Back</PaginationButton>

                {totalPages.map((p, index) => (
                    <PaginationButton $isCurrent={p === page} key={index}
                                      onClick={() => handleCurrentPage(p)}>{p}</PaginationButton>
                ))}

                <PaginationButton disabled={endIndex >= products.length}
                                  onClick={handleNextPage}>Next</PaginationButton>
            </Pagination>
        </HomeContainer>
    );
};

export default HomePage;
