import PaginationButton from "../../UI/paginationButton/PaginationButton.tsx";
import {Product} from "../../../types/productTypes.ts";
import {Dispatch, SetStateAction} from "react";
import {handleScrollToTop} from "../scrollToTop.ts";
import {PaginationContainer} from "./PaginatitonComponent.styled.tsx";

type Props = {
    finalProducts: Product[]
    page: number
    setPage: Dispatch<SetStateAction<number>>
    endIndex: number
    limit: number
}

const PaginationComponent = ({finalProducts, setPage, page, endIndex, limit}: Props) => {
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
        console.log(page)
        handleScrollToTop()
    }

    return (
        <PaginationContainer>

            <PaginationButton disabled={page === 1}
                              onClick={handleBackPage}>Back</PaginationButton>

            {totalPages.map((p, index) => (
                <PaginationButton $isCurrent={p === page} key={index}
                                  onClick={() => {
                                      handleCurrentPage(page)
                                  }}>{p}</PaginationButton>
            ))}

            <PaginationButton disabled={endIndex >= finalProducts.length}
                              onClick={handleNextPage}>Next</PaginationButton>
        </PaginationContainer>
    );
};

export default PaginationComponent;
