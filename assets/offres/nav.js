import React, {useContext, useEffect} from 'react'
import shark from '../data/shark.png'
import click from '../data/arrow.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {add, deconnexion, add_for_profile, sittings, profile_link_img, default_profile_image} from "../images";

function Nav(){
    const {nom, prenom, type} = useSelector(state => state.UserData)

    function logout(){
        window.location.href = "http://127.0.0.1:8000/logout";
        Cookies.set('PHPSESSID', "undefined")
        localStorage.removeItem('c_user')
    }
    return(
        <React.StrictMode>
            <div style={{
                minWidth: "1100px",
                backgroundColor : "white",
            }}>
                <nav style={NAV}>
                    <Link style={{ color:"12549B"}} to={"/"}><div style={AIDUS}>
                        <span style={AIDUS_A}>A</span>idus
                    </div></Link>
                    <ul style={OFFRES}>
                        <li><Link to={"/"} ><a href="" className="navLink">Offres d'emploi</a></Link></li>
                        <li><Link to={"/offrestage"} ><a href="" className="navLink">Offres de stage</a></Link></li>
                        <li><Link to={"/offreformation"}><a href="" className="navLink">Offres de formation</a></Link></li>
                        <li><Link to={"/entreprises"}><a href="" className="navLink">Entreprise</a></Link></li>
                        <li><Link to={"/"}><a href="" className="navLink">Aides</a></Link></li>
                    </ul>
                    <div className="nav-underline"></div>
                    <div style={PROFILE_SHORTCUT}>
                        <a href="" onClick={(event)=>{
                            event.preventDefault()
                            document.getElementById("hidden").style.visibility="visible"
                        }}
                           style={{
                               fontFamily: "Arial",
                               textDecoration: "none",
                               fontWeight: "bold"
                           }}
                        >
                            <span style={{color : "#12549B"}}>{nom.value}  {prenom.value}</span>
                            <img src={click} alt="click"
                                 style={{
                                     width : "15px",
                                     marginLeft: "5px"
                                 }}
                            />
                        </a>
                        <img src={default_profile_image} alt="photo-profile"
                             style={{
                                 width: "50px",
                                 border: "2px solid #707070",
                                 borderRadius: "150px",
                                 marginLeft: "30px"
                             }}
                        />
                        <div id="hidden"
                             onMouseLeave={(event)=>{
                                 event.preventDefault()
                                 document.getElementById("hidden").style.visibility="hidden"
                             }}

                             style={{
                                 position: "absolute",
                                 top: "30px",
                                 right: "50px",
                                 visibility: "hidden"
                             }}
                        >
                            <img src={shark} alt="shark" style={{
                                width: "25px",
                                zIndex : "1",
                                marginBottom: "0px",
                                position: "relative",
                                left: "188px",
                                top: "35px"
                            }}/>
                            <ul style={HIDDEN_DETAILS}>
                                {
                                    (true) ? <Link to={"/ajouteroffre"}><li style={POSTING_ELEGIBILITY}>Ajouter une offre</li></Link> : ''
                                }
                                <li style={{
                                    margin: "0px",
                                    borderBottom: "1px solid #707070",
                                    padding: "15px 10px",
                                    backgroundImage: `url(${profile_link_img})`,
                                    backgroundSize: "20px",
                                    backgroundPosition: "10px center",
                                    backgroundRepeat: "no-repeat",
                                    paddingLeft: "45px"

                                }}
                                ><Link to={"/profile"}>Profile</Link></li>
                                <li style={{

                                    margin: "0px",
                                    borderBottom: "1px solid #707070",
                                    padding: "15px 10px",
                                    backgroundImage: `url(${sittings})`,
                                    backgroundSize: "20px",
                                    backgroundPosition: "10px center",
                                    backgroundRepeat: "no-repeat",
                                    paddingLeft: "45px"

                                }}>Parametres</li>
                                <li style={{
                                    borderBottom : "0px",
                                    margin: "0px",
                                    padding: "15px 10px",
                                    backgroundImage: `url(${deconnexion})`,
                                    backgroundSize: "20px",
                                    backgroundPosition: "10px center",
                                    backgroundRepeat: "no-repeat",
                                    paddingLeft: "45px"

                                }}><a href="" onClick={logout}>Deconnexion</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </React.StrictMode>
    );
}

// styles de la barre de navigation
const AIDUS = {
    boxSizing: "border-box",
    fontSize: "40px",
    fontFamily: "Maiandra GD",
    color: "#12549B",
    marginLeft: "60px"
}

const AIDUS_A = {
    fontSize: "70px",
    fontFamily: "Lucida Handwriting",
    fontStyle: "italic"
}

const NAV = {
    position : "relative",
    height: "15%",
    flexGrow: "1",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px",
    boxSizing: "border-box",
    boxShadow: "2px 4px 5px rgba(0,0,0,0.2)"
}

const OFFRES = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "45%",
    color: "#9D9D9D",
    fontFamily: "Arial"
}

const PROFILE_SHORTCUT = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginRight: "25px",
}

const HIDDEN_DETAILS={
    position : "relative",
    zIndex : "2",
    boxSizing: "border-box",
    fontWeight: "bold",
    listStyleType: "none",
    border: "2px solid #12549B",
    color: "#9D9D9D",
    fontFamily: "Arial",
    padding: "0px",
    borderRadius: "15px",
    backgroundColor: "white",
    width: "250px",
    boxShadow: "-2px 4px 6px rgba(0, 0, 0, 0.3)"
}

const POSTING_ELEGIBILITY = {
    backgroundColor : "#12549B",
    borderTop: "0px",
    borderTopRightRadius : "10px",
    borderTopLeftRadius : "10px",
    color: "white",
    margin: "0px",
    borderBottom: "1px solid #707070",
    padding: "15px 10px",
    backgroundImage: `url(${add})`,
    backgroundSize: "20px",
    backgroundPosition: "10px center",
    backgroundRepeat: "no-repeat",
    paddingLeft: "45px"
}
export default Nav;