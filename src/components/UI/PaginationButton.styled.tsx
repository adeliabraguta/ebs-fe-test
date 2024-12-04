import styled from "styled-components";

type Props = {
    $isCurrent?: boolean
};

export const Button = styled.button<Props>`
    min-width: 50px;
    border: none;
    background-color: transparent;
    color: ${({$isCurrent }) => ($isCurrent ? "#CB6E17" : "#626262")} ;
    border-bottom: 2px solid ${({$isCurrent }) => ($isCurrent ? "#CB6E17" : "#626262")};
    transition: var(--transition);
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;

    &:hover {
        color: #CB6E17;
        border-color: #CB6E17;
    }

    &:disabled {
        color: #B1B1B1;
        border-color: #B1B1B1;
    }
`
