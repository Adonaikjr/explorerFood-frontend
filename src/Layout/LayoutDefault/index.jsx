import { Outlet } from "react-router-dom";
import { ContainerHeader } from "../../components/ContainerHader";
import { Footer } from "../../components/Footer";


export function LayoutDefault() {
    return (
        <>
            <ContainerHeader />
            <Outlet />
            <Footer />
        </>
    )
}