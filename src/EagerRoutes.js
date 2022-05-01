import React, { useEffect } from "react";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

export const EagerRoutes = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        preventRouting();
    })

    const preventPages = [ "/about", "/contacts", "/gallery" ];

    const preventRouting = () => {

        if(preventPages.includes(pathname)) {
            navigate("/")
        }
    }

    return (
        <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path= "/about" element={<About/>}/>
            <Route path= "/contacts" element={<Contacts/>}/>
            <Route path= "/gallery" element={<Gallery/>}/>
        </Routes>
    )
}