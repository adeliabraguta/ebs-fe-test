import styled from "styled-components";

export const ProductPageContainer = styled.div`
    display: grid;
    grid-template-columns: 0.9fr min-content 1fr;
    justify-items: center;
    align-content: center;
    gap: 32px;
    padding: 0 100px;

    .product-title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 32px;

        div {
            
            h3 {
                font-size: 32px;
            }

            p {
                color: #7E7E7E;
                padding-top: 24px;
            }
        }
    }

    img {
        height: 350px;
        width: 250px;
        object-fit: contain;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            color: #7E7E7E;
            padding-top: 24px;
        }
    }

    .cart {
        padding-bottom: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 24px;
            color: #DE911D;
        }

        .icon {
            width: 32px;
            height: 32px;
        }
    }

    @media screen and (max-width: 1100px) {
        padding: 0;
        grid-template-columns: 1fr;
        gap: 8px;
        
        img {
            height: 250px;
            width: 150px;
        }

        .product-title {
            padding-bottom: 0;
            gap: 32px;
        }

        .cart {
            padding-top: 24px;
        }
    }
`
