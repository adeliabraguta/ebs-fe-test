import {FooterContainer, IconsContainer, InfoContainer} from "./Footer.styled.ts";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <InfoContainer>
                <div>
                    <span>&#169; Copyright 2024</span>
                    <p>| BY BRAGUTA ADELIA</p>
                </div>
            <a className={"email"} href="mailto:adeliabraguta@gmail.com">adeliabraguta@gmail.com</a>
            </InfoContainer>
            <IconsContainer>
                <a href="https://github.com/adeliabraguta?tab=repositories" target="_blank">
                    <FaGithub className={"icon"}></FaGithub>
                </a>
                <a href="https://www.linkedin.com/in/adelia-bragu%C8%9Ba-251a2422b/" target="_blank">
                    <FaLinkedinIn  className={"icon"}></FaLinkedinIn >
                </a>
            </IconsContainer>
        </FooterContainer>
    );
};

export default Footer;
