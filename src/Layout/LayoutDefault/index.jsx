import { Outlet } from "react-router-dom";
import { ContainerHeader } from "../../components/ContainerHader";


export function LayoutDefault() {
    return (
        <>
            <ContainerHeader />
            <Outlet />
        </>
    )
}