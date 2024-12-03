import styled from "styled-components";

export const FilterContainer = styled.div`
    align-self: end;
    padding-bottom: 32px;
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
