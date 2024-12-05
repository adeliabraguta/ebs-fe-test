import styled from "styled-components";

type Props = {
     $isInCart?: boolean;
 }

export const ProductContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr max-content;
    position: relative;
    @media screen and (max-width: 1100px) {
        gap:8px;
    }
    div:first-of-type {
        display: flex;
        flex-direction: column;

        img {
            width: 150px;
            height: 150px;
            object-fit: contain;
            align-self: center;
            justify-self: center;
            @media screen and (max-width: 1100px) {
                height: 150px;
                width: 150px;
            }
        }
        
        h3{
            @media screen and (max-width: 1100px) {
                font-size: 16px;
            } 
        }

        p {
            color: #7E7E7E;
            padding-top: 24px;
        }
    }

    div:last-of-type {
        display: flex;
        justify-content: space-between;

        span {
            font-size: 18px;
            color: #DE911D;
        }
    }

`

export const CartButton = styled.button<Props>`
    background-color: transparent;
    border: none;
    width: min-content;

    .icon {
        cursor: pointer;
        color: ${({$isInCart}) => ($isInCart ? "#B44D12" : "#cb6e17")};
        width: 24px;
        height: 24px;
        transition: var(--transition);
        &:hover{
            color: ${({$isInCart}) => ($isInCart ? " #EF4E4E" : "#F0B429")};
        }
    }
`
