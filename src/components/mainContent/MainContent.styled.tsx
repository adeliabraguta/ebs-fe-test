import styled from "styled-components";

export const ContentContainer = styled.div`
    margin-left: 100px;
    padding: 48px 64px;
    display: grid;
    min-height: calc(100vh - 115px);
    
    @media screen and (max-width: 1100px) {
        padding: 32px 32px;
        margin-left: 50px;
    }
`

