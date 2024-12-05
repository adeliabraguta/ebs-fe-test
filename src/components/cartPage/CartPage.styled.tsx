import styled from "styled-components";

export const CartPageContainer = styled.div`
    h2 {
        padding-bottom: 48px;
    }

    p {
        text-align: center;
        padding: 48px;
        font-size: 24px;
    }

    input {
        padding: 4px;
        background-color: #fff;
        border: 2px solid #F7C948;
        color: #222;

        &:focus {
            outline: none;
            border-color: #DE911D;
        }
    }


    .cart-options {
        display: flex;
        justify-content: space-between;

        div {
            display: flex;
            gap: 48px;

            p {
                font-size: 20px;
                padding: 0;
            }

            span {
                color: #CB6E17;
            }
        }


        .promocode-container {
            display: flex;
            gap: 8px;

            button {
                padding: 4px;
                background-color: #F7C948;
                color: #fff;
                border: 2px solid #F7C948;
                cursor: pointer;
                transition: var(--transition);

                &:hover {
                    background-color: #CB6E17;
                    border-color: #CB6E17;
                }
            }
        }

        @media screen and (max-width: 1100px) {
            display: none;
        }
    }

    .cart-options_mobile {
        display: none;
        .promocode-container {
            padding: 24px 0;
            button {
                padding: 4px;
                background-color: #F7C948;
                color: #fff;
                border: 2px solid #F7C948;
                cursor: pointer;
                transition: var(--transition);

                &:hover {
                    background-color: #CB6E17;
                    border-color: #CB6E17;
                }
            }
        }
            .mobile-price{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

        p {
            padding: 4px;
        }

        @media screen and (max-width: 1100px) {
            display: block;
        }
    }

`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-bottom: 48px;
`
