import styled from "styled-components";

type Props = {
    $isOpen?: boolean
}

export const FilterPopupContainer = styled.div<Props>`
    position: absolute;
    visibility: ${({$isOpen}) => ($isOpen ? "visible" : "hidden")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    transition:
            visibility 0.3s ease-in-out,
            opacity 0.3s ease-in-out,
            transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) =>
            $isOpen ? "translateY(20px)" : "translate(0px)"};
    z-index: 1;
    padding: 12px 24px;
    right: 0;
    top: 30px;
    height: 200px;
    width: 210px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 8px;

    div {
        display: flex;
        gap: 8px;

        span {
            text-transform: capitalize;
        }
    }
`
