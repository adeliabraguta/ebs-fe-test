import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: fixed;
    background-color: #353535;
    width: 100px;
    height: 100vh;
    padding: 48px 12px;
    color: #9E9E9E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 2;

    .top-elements {
        display: flex;
        flex-direction: column;
        gap: 32px;

        a {
            color: #9E9E9E;
        }

        .header-icon {
            width: 24px;
            height: 24px;
            cursor: pointer;
            transition: var(--transition);

            &:hover {
                color: #fff;
            }
        }
        .search{
            
        }
    }

    h2 {
        font-family: "DM Serif Text", serif;
        font-size: 40px;
        color: #7E7E7E;
    }
    
    @media screen and (max-width: 1100px) {
        background-color: #E1E1E1;
        width: 50px;
    }
`
