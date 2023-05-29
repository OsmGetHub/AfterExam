import React from 'react';
import Nav from "./offres/nav"
import InfoPerosonnels from "./profile/InfoPerosonnels";
import {useSelector} from "react-redux";
import Footer from "./offres/footer";

export default function Profile(){
    const isLogged = useSelector(state => state.UserLogin.isLogged)
    return (
            <React.StrictMode>
                    <Nav />
                    <InfoPerosonnels />
                    <Footer />
            </React.StrictMode>
        );
}
