import React from "react";
import {useGlobalContext} from "../../../context/GlobalContext.tsx";
import {SortType} from "../../../types/productTypes.ts";
import {SortContainer, SortSelector} from "./SortComponent.styled.tsx";
import {MdOutlineSort} from "react-icons/md";

const SortComponent = () => {
    const {addSortParam} = useGlobalContext()

    const handleParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedParam = (e.target as HTMLSelectElement).value
        addSortParam(selectedParam as SortType)
    }

    return (
        <SortContainer>
            <MdOutlineSort className={"icon"}/>
            <SortSelector onChange={(e) => handleParam(e)}>
                <option value="">
                    Sort by price
                </option>
                <option value="asc">Price (Asc)</option>
                <option value="desc">Price (Desc)</option>
            </SortSelector>
        </SortContainer>
    )
}

export default SortComponent;
