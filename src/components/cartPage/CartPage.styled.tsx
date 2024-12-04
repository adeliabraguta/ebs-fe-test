import styled from "styled-components";

export const CartPageContainer = styled.div`
    h2{
        padding-bottom: 48px;
    }
    a{
        color: #222;
        text-decoration: none;
        transition: var(--transition);
        &:hover{
                color: #CB6E17;
                border-color: #CB6E17;
        }
    }
    p{
        text-align: center;
        padding: 48px;
        font-size: 24px;
    }
    .cart-options{
        display: flex;
        justify-content: space-between;
        div{
            display: flex;
            gap: 48px;
            p{
                font-size: 20px;
                padding: 0;
            }
            span{
                color: #CB6E17;
            }
        }
    }
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-bottom: 48px;
`
