import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../components"
import * as Pages from "../pages";

export const RouteList = () => {
    
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route index element={<Pages.Home />} />

                <Route path="about" element={<Pages.About />} />

                <Route path="services" element={<Pages.Services />} />
            
            </Route>
            

        </Routes>
    </BrowserRouter>
}