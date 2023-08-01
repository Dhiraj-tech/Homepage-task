import "@fortawesome/fontawesome-free/css/all.min.css"
import { Outlet } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"
import "./Layout.css"

export const Layout = () => {
    return <>
    <NavBar/>

    <Outlet />
    
    <Footer/>


    </> 
}