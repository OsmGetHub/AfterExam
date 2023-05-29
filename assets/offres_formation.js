import React from 'react';
import Nav from './offres/nav'
import Filtrage from "./offres/flitrage";
import Articles from "./offres/articles";
import Footer from "./offres/footer";

export default function OffresFormation() {
    return (
        <React.StrictMode>
            <Nav />
            <div id="Main" style={{
                marginTop: "2px",
                display: "flex",
                height: "1200px",
                backgroundColor: "#E8E8E8",
                width: "99vw"
            }}>
                <Filtrage />
                <Articles />
            </div>
            <Footer />
        </React.StrictMode>
    );
}