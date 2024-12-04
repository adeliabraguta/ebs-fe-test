import styled from "styled-components";

export const PopupContainer = styled.div`
    position: fixed;
    z-index: 1;
    bottom: 70px;
    right: -500px;
    background-color: #FCE588;
    padding: 8px 12px;
    width: 500px;
    transform: rotate(-25deg);
    display: flex;
    justify-content: center;
    animation: appear 5s ease;
    animation-delay: 5s;
    animation-duration: 30s;

    span {
        color: #B44D12;
        font-weight: 500;
    }
    
    @keyframes appear {
        0% {
            right: -500px;
        }

        10% {
            right: -70px;
        }

        90% {
            right: -70px;
        }

        100% {
            right: -500px;
        }
    }
`
