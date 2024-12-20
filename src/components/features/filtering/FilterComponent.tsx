import {FilterContainer} from "./FilterComponent.styled.tsx";
import {FiFilter} from "react-icons/fi";
import FilterPopup from "./filterPopup/FilterPopup.tsx";
import {useEffect, useRef, useState} from "react";

const FilterComponent = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const filerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handler = (event:FocusEvent) => {
            if (!filerRef.current?.contains(event.target as Node)) {
                setIsFilterOpen(false);
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [isFilterOpen])

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen)
    }

    return (
        <FilterContainer ref={filerRef}>
            <span onClick={toggleFilter}><FiFilter/>Filter</span>
            <FilterPopup isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}/>
        </FilterContainer>
    )
}

export default FilterComponent;
