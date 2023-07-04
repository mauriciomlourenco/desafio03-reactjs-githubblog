import { HeaderContainer, ImgHeader } from "./styles";
import logoSrc from '../../assets/logo.svg';

export function Header() {
    return(
        <HeaderContainer>
            <ImgHeader src={logoSrc} alt="" />
        </HeaderContainer>
    );
}