import styled from "styled-components";

export const LoaderStyled = styled.div`
    width: 40px;
    height: 40px;
    border: 4px solid #B44D12;
    border-right: none;
    border-bottom: none;
    border-radius: 50%;
    animation: rotate 1s linear infinite;

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`
