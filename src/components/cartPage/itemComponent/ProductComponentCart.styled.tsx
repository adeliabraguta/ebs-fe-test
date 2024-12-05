import styled from "styled-components";

export const ProductCart = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    align-items: center;
    padding-bottom: 32px;
    border-bottom: 2px solid #E1E1E1;
    img{
        height: 100px;
        width: 100px;
        object-fit: contain;
    }
    .info-container{
        display: flex;
        gap: 32px;
    }
    
    .quantity{
        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
        button {
            background-color: transparent;
            color: #9E9E9E;
            font-size: 24px;
            font-weight: 500;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: var(--transition);
            &:hover{
                color: #515151
            }
        }
        span{
            font-size: 20px;
        }
    }
    .price{
        font-size: 20px;
    }
    .remove-product{
        cursor: pointer;
        font-size: 24px;
        color: #9E9E9E;

        &:hover{
            color: #515151
        }
    }
    
`
