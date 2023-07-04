import { Outlet } from "react-router-dom";
import { DefaultLayoutContainer, DefaultLayoutContent } from "./styles";
import { Header } from "../../components/Header";

export function DefaultLayout(){
    return(
        <DefaultLayoutContainer>
            <Header />
            <DefaultLayoutContent>
                <Outlet />
            </DefaultLayoutContent>
        </DefaultLayoutContainer>
    )
}