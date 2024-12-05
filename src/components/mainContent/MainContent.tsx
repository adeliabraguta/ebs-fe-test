import {ContentContainer} from "./MainContent.styled.tsx";
import {Outlet} from "react-router-dom";

const MainContent = () => {
    return (
        <ContentContainer>
            <Outlet/>
        </ContentContainer>
    )
}

export default MainContent;
