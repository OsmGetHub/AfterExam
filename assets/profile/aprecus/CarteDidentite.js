import {default_profile_image} from "../../images";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";

export function CarteDidentite(){
    const userData = useSelector(state => state.UserData)

    useEffect(() => {
        console.log("UserData")
        console.log(userData)
    }, [userData]);

    return(
        <React.StrictMode>
            <hr style={{
                height : "1.2px"
            }}/>
            <div style={{
                display: "grid",
                gridTemplateColumns: "50px 15% 2% 1fr 200px 70px",
                gridTemplateRows: "1fr 14% 14% 14% 14% 14% 14% 1fr",
                height : "250px",
                verticalAlign : "middle"
            }}>
                <section style={{gridRow : "2 /3", gridColumn: "2 /3", fontWeight:"bold" }}>Nom complet</section>
                <section style={{gridRow : "2 /3", gridColumn: "3 /4", }} >:</section>
                <section style={{gridRow : "2 /3", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070"}}>{userData.nom.value} {userData.prenom.value}</section>
                <section style={{gridRow : "3 /4", gridColumn: "2 /3", fontWeight:"bold" }}>Status</section>
                <section style={{gridRow : "3 /4", gridColumn: "3 /4" }}>:</section>
                <section style={{gridRow : "3 /4", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}>Licencié Juin 2022</section>
                <section style={{gridRow : "4 /5", gridColumn: "2 /3", fontWeight:"bold" }}>Ville</section>
                <section style={{gridRow : "4 /5", gridColumn: "3 /4" }}>:</section>
                <section style={{gridRow : "4 /5", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}></section>
                <section style={{gridRow : "5 /6", gridColumn: "2 /3", fontWeight:"bold" }}>Adresse</section>
                <section style={{gridRow : "5 /6", gridColumn: "3 /4" }}>:</section>
                <section style={{gridRow : "5 /6", gridColumn: "4 /5",fontSize:"0.8em", color: "#707070" }}>{userData.adresse.value}</section>
                <section style={{gridRow : "6 /7", gridColumn: "2 /3", fontWeight:"bold" }}>Adresse email</section>
                <section style={{gridRow : "6 /7", gridColumn: "3 /4" }}>:</section>
                <section style={{gridRow : "6 /7", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}></section>
                <section style={{gridRow : "7 /8", gridColumn: "2 /3", fontWeight:"bold" }}>Telephone</section>
                <section style={{gridRow : "7 /8", gridColumn: "3 /4" }}>:</section>
                <section style={{gridRow : "7 /8", gridColumn: "4 /5", fontSize:"0.8em", color: "#707070" }}>{userData.telephone.value}</section>
                <img style={PHOTO_PROFILE} src={default_profile_image} alt="photo_profile"/>
            </div>
        </React.StrictMode>
    );
}

const PHOTO_PROFILE = {
    width : "150px",
    margin : "auto",
    gridRow : "2 /7",
    gridColumn : "5/ 6",
    border: "2px solid #707070",
    borderRadius :" 100%"
}