import {FilterPopupContainer} from "./FilterPopup.styled.tsx";
import {useFetchCategories} from "../../../../hooks/useFetchCategories.ts";
import React, {useContext, useState} from "react";
import {GlobalContext, GlobalContextType} from "../../../../context/GlobalContext.tsx";

const FilterPopup = ({isOpen}: { isOpen: boolean }) => {
    const {addFilterParam} = useContext(GlobalContext) as GlobalContextType
    const {categories} = useFetchCategories('https://fakestoreapi.com/products/categories')
    const [selectedCheckbox, setSelectedCheckbox] = useState<string| null>(null)

    const handleParams = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedParam = (e.target as HTMLInputElement).value
        addFilterParam(selectedParam)
    }

    const toggleCheckboxes = (val: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCheckbox(prev => prev === val ? null : val)
        handleParams(e)
    }

    return (
        <FilterPopupContainer $isOpen={isOpen}>
                {categories.map((category, index) => (
                    <div key={index}><input type={"checkbox"} value={category} name={'category'} checked={selectedCheckbox === category}
                                            onChange={(e) => toggleCheckboxes(category, e)}/> <span>{category}</span></div>
                ))}
        </FilterPopupContainer>
    );
};

export default FilterPopup;
