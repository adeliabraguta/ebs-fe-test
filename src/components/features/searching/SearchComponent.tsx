import {SearchContainer} from "./SearchComponent.styled.tsx";
import {FormEvent, useState} from "react";
import {useGlobalContext} from "../../../context/GlobalContext.tsx";

type SearchType = {
    isSearchOpen: boolean,
    setIsSearchOpen: (isSearchOpen: boolean) => void
}

const SearchComponent = ({isSearchOpen, setIsSearchOpen}: SearchType) => {
    const {addSearchParam} = useGlobalContext();
    const [param, setParam] = useState<string>("")

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addSearchParam(param)
        setParam('')
        setIsSearchOpen(false)
    }

    return (
        <SearchContainer $isSearchOpen={isSearchOpen} onSubmit={(e) => handleSearch(e)}>
            <input type={"search"} value={param} placeholder={"Search by title"}
                   onChange={(e) => setParam(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </SearchContainer>
    )
}

export default SearchComponent;
