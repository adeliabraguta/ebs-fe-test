import styled from "styled-components";

export const SortContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    
    .icon{
        color: #222;
        width: 18px;
        height: 18px;
    }
`

export const SortSelector = styled.select`
    appearance: none;
    background-color: transparent;
    color: #222222;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: var(--transition);
    outline: none;
`
