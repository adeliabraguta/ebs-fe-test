import {FilterPopupContainer} from "./FilterPopup.styled.tsx";
import {useFetchCategories} from "../../../../hooks/useFetchCategories.ts";
import React, {useState} from "react";
import {useGlobalContext} from "../../../../context/GlobalContext.tsx";

type FilterType = {
    isFilterOpen: boolean
    setIsFilterOpen: (isFilterOpen: boolean) => void
}

const FilterPopup = ({isFilterOpen, setIsFilterOpen}: FilterType) => {
    const {addFilterParam} = useGlobalContext()
    const {categories} = useFetchCategories('https://fakestoreapi.com/products/categories')
    const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null)

    const handleParams = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedParam = (e.target as HTMLInputElement).value
        addFilterParam(selectedParam)
    }

    const toggleCheckboxes = (val: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCheckbox(prev => prev === val ? null : val)
        handleParams(e)
        setIsFilterOpen(false)
    }

    return (
        <FilterPopupContainer $isOpen={isFilterOpen}>
            {categories.map((category, index) => (
                <div key={index}><input type={"checkbox"} value={category} name={'category'}
                                        checked={selectedCheckbox === category}
                                        onChange={(e) => toggleCheckboxes(category, e)}/> <span>{category}</span></div>
            ))}
        </FilterPopupContainer>
    );
};

export default FilterPopup;
