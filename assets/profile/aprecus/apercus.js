import React, {useState} from 'react';
import Nav from "../../offres/nav";
import {default_profile_image} from "../../images";
import Footer from "../../offres/footer";
import Education from '../../data/Education.json'
import {ApercusEtudes} from "./ApercusEtudes";
import {CarteDidentite} from "./CarteDidentite";
import AprecusExperience from "./AprecusExperience";

function Apercus() {
    const [education, setEducation] = useState(Education)
    return (
        <div style={{
            height : "fit-content",
            backgroundColor : "rgb(232, 232, 232)",
        }}>
            <Nav />
            <div style={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                margin: "5% 0px",
            }}>
                <div style={{
                    width : "60%",
                    height : "fit-content",
                    border : "1px solid #707070",
                    borderRadius : "30px",
                    fontFamily : "Arial, sans-serif",
                    backgroundColor : "white",
                    boxShadow: "0px 5px 3px rgba(0, 0, 0, 0.4)"
                }}>
                    <div style={CARTE_IDENTITE}>
                        <h1 style={{gridRow : "2 /3", gridColumn: "2 / 5"}}>Profile d'étudiant</h1>
                    </div>
                    <CarteDidentite />
                    <ApercusEtudes />
                    <AprecusExperience />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const CARTE_IDENTITE = {
    display: "grid",
    gridTemplateColumns: "50px 15% 2% 1fr 200px 70px",
    gridTemplateRows: "1fr 14% 14% 14% 14% 14% 14% 1fr",
    color : "#12549B"
}


export default Apercus;