import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-left: 100px;
    padding: 32px 48px;
    background-color: #CFCFCF;
    display: flex;
    align-items: center;
    gap: 48px;
    
    @media screen and (max-width: 1100px) {
        padding: 32px;
        flex-wrap: wrap;
        gap: 32px;
    }
`

export const InfoContainer = styled.div`
    div {
        display: flex;
        gap: 4px;

        p {
            letter-spacing: 1.1px;
        }
    }

    a {
        text-decoration: none;
        color: #DE911D;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    gap: 24px;

    a {
        text-decoration: none;
    }

    .icon {
        width: 32px;
        height: 32px;
        cursor: pointer;
        transition: var(--transition);
        color: #B44D12;

        &:hover {
            color: #CB6E17;
        }
    }
`

