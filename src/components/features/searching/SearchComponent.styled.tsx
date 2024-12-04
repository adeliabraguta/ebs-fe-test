import styled from "styled-components";

type Props = {
    $isSearchOpen: boolean;
}

export const SearchContainer = styled.form<Props>`
    position: fixed;
    background-color: #fff;
    left: 120px;
    top: 100px;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    border: 2px solid #CFCFCF;
    visibility: ${({$isSearchOpen}) => ($isSearchOpen ? " #visible" : "hidden")};;
    opacity: ${({ $isSearchOpen }) => ($isSearchOpen ? "1" : "0")};
    transition:
            visibility 0.3s ease-in-out,
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
    transform: ${({ $isSearchOpen }) =>
            $isSearchOpen ? "translateX(20px)" : "translateX(0px)"};
    
    input {
        padding: 12px;
        background-color: #fff;
        border: none;
        border-right: 2px solid #CFCFCF;
        color: #222;
        &:focus{
            outline: none;
            border-color: #CB6E17;
        }
    }
    &:focus-within{
        border-color: #CB6E17 ;
    }
    
    button {
        font-size: 16px;
        background-color: transparent;
        border: none;
        color: #222;
        cursor: pointer;
        transition: var(--transition);

        &:hover {
            color: #CB6E17;
        }
    }
`
