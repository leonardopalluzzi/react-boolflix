import { Outlet } from "react-router-dom"
import Header from "../components/dumb/Header"
import Footer from "../components/dumb/Footer"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}