import {HeaderContainer} from "./Header.styled.tsx";
import {HiOutlineSearch, HiOutlineShoppingBag} from "react-icons/hi";

const Header = () => {

    return (
        <HeaderContainer>
            <div>
                <HiOutlineShoppingBag className={"header-icon"}/>
                <HiOutlineSearch className={"header-icon"}/>
            </div>
            <h2>C</h2>
        </HeaderContainer>
    );
};

export default Header
