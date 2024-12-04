import styled from "styled-components";

export const FilterContainer = styled.div`
    position: relative;
    
    span {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        transition: var(--transition);

        &:hover {
            color: #CB6E17;
        }
    }
`
