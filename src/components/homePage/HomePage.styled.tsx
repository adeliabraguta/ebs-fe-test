import styled from "styled-components";


export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: calc(100vh - 115px);
    
    .no-products{
        
        button{
            background-color: transparent;
            border: none;
            color: #7E7E7E;
            font-size: 16px;
            padding-bottom: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: var(--transition);
            
            &:hover{
                color: #DE911D;
            }
            
            .icon{
                font-size: 20px;
            }
        }
    }
    
    @media screen and (max-width: 1100px) {
        gap:12px;
    }
`

export const ProductsFilter = styled.section`
    align-self: end;
    padding-bottom: 32px;
    display: flex;
    gap: 24px;
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, min-content);
    column-gap: 48px;
    row-gap: 64px;
    
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4, min-content);
        column-gap: 48px;
        row-gap: 64px;  
    }
`

