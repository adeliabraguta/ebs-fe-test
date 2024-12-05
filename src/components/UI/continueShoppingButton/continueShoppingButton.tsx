import {ContinueShoppingButtonContainer} from "./continueShoppingButton.styled.tsx";
import {Link} from "react-router-dom";
import {HiChevronLeft} from "react-icons/hi";

const ContinueShoppingButton = () => {
    return (
        <ContinueShoppingButtonContainer>
            <Link to={"/ebs-fe-test/"}><HiChevronLeft/>CONTINUE SHOPPING</Link>
        </ContinueShoppingButtonContainer>
    );
};

export default ContinueShoppingButton;
