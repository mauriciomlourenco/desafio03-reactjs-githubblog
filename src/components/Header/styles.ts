import { styled } from "styled-components";
import headerBg from '../../assets/headerBg.png';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;
    background: url(${headerBg}) no-repeat center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 9.25rem;
        height: 6.125rem;
    }
`;

export const ImgHeader = styled.img`
    width: 9.25rem;
    height: 6.125rem;
    margin-bottom: 2.875rem;
`;