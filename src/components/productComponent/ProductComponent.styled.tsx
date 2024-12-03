import styled from "styled-components";

export const ProductContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr max-content;
    position: relative;
    div:first-of-type {
        display: flex;
        flex-direction: column;

        img {
            width: 150px;
            height: 150px;
            object-fit: contain;
            align-self: center;
            justify-self: center;
        }

        h3 {
            cursor: pointer;
            font-size: 18px;
            color: #515151;
            justify-self: start;
            align-self: start;
            transition: var(--transition);

            &:hover {
                color: #222;
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

export const CartButton = styled.button`
    background-color: transparent;
    border: none;
    width: min-content;
    .icon{
        cursor: pointer;
        color: #B44D12;
        width: 24px;
        height: 24px;
        transition: var(--transition);
        &:hover{
            color: #2E7B06;
        }
    }
`
