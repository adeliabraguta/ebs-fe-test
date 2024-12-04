import {HeaderContainer} from "./Header.styled.tsx";
import {HiOutlineSearch, HiOutlineShoppingBag} from "react-icons/hi";
import {Link} from "react-router-dom";
import SearchComponent from "../features/searching/SearchComponent.tsx";
import {useEffect, useRef, useState} from "react";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
    const searchRef = useRef<HTMLDivElement | null>(null)
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }

    useEffect(() => {
        const handler = (event: FocusEvent) => {
            if (!searchRef.current?.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [isSearchOpen]);

    return (
        <HeaderContainer>
            <div className={"top-elements"}>
                <Link to={"/cart"}><HiOutlineShoppingBag className={"header-icon"}/></Link>
                <div ref={searchRef}>
                    <SearchComponent isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
                    <HiOutlineSearch onClick={toggleSearch} className={"header-icon search"}/>
                </div>
            </div>
            <h2>C</h2>
        </HeaderContainer>
    );
};

export default Header
