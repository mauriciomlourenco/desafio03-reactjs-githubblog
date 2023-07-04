import { styled } from "styled-components";

export const DefaultLayoutContainer = styled.div``;

export const DefaultLayoutContent = styled.main`
    width: 100%;
    max-width: 54rem;    
    margin-left: auto;
    margin-right: auto;

    @media(max-width:54rem){
        padding: 0 1rem;
    }
`;