import {HeaderContainer} from "./Header.styled.tsx";
import {HiOutlineSearch, HiOutlineShoppingBag} from "react-icons/hi";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <HeaderContainer>
            <div>
                <Link to={"/cart"}><HiOutlineShoppingBag className={"header-icon"}/></Link>
                <HiOutlineSearch className={"header-icon"}/>
            </div>
            <h2>C</h2>
        </HeaderContainer>
    );
};

export default Header
