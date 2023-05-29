import React, {useEffect} from 'react';
import AddCareer from './AddCareer'
import AddModal from "./AddModal";
import AjoutFormation from "./etudes/AjoutFormtion";
import AjoutExperience from "./experiences/AjoutExperience";
import CarriereEtudes from "./CarriereEtudes";
import Experience from "./Experience";
import {useDispatch, useSelector} from "react-redux";
import {add_for_profile, apercus, default_profile_image, locked, modify, visiblity} from "../images";
import {Link} from "react-router-dom";
import {setEducation, setExperience} from "../ReduxToolkit/InfospSlice";


export default function  InfoPerosonnels() {
    const {modal, education, experience, educationModal, experienceModal} = useSelector(state => state.Infospersonel);
    const {cne, cni, nom, prenom, telephone, naissance, sexe, adresse, ville} = useSelector(state => state.UserData)
    const dataExperience = useSelector(state => state.UserExperience.userExperience)
    const dataEtude = useSelector(state => state.UserEtude.userEtude)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dataExperience)
       if(dataExperience.length !== 0) dispatch(setExperience(true))
    }, [dataExperience]);

    useEffect(() => {
        console.log(dataEtude)
        if(dataEtude.length !== 0) dispatch(setEducation(true))
    }, [dataEtude]);

    return (
                <div style={ALL_IN_MAIN}>
                    <div style={INFOS_HEADER}>
                        <img src={default_profile_image} alt="Photo_de_profile"
                        style={{
                            // height: "70px",
                            width: "90px",
                            border: "1px solid #101010",
                            borderRadius: "100px"
                        }}
                        />
                        <div style={{ fontWeight:"bold", fontSize: "1.6em" }}>{nom.value} {prenom.value}</div>
                        <div style={{

                            fontWeight : "normal",
                            color : "#13569F"

                        }}>Étudiant, Sciences Mathématiques Informatiques</div>
                        <span style={{ color : "rgb(128, 128, 128)", fontWeight : "normal" }}>Licencié Juin 2021</span>
                    </div>
                    <div style={PERSONAL_INFOS}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom :"15px"
                        }}>
                            <div style={{
                                margin : "10px 0px",
                                fontSize : "1.5em"
                            }}><b>Infos personnels</b></div>
                            <div>
                                <img style={{width : "20px"}} src={add_for_profile} alt="Ajouter"/>
                                <img style={{width : "20px", marginLeft: "20px"}} src={modify} alt="edit"/>
                            </div>
                        </div>
                        <div className="required-fileds">
                            <div style={REQUIRED_FIELD}>

                                <span style={{ fontWeight : "bold" }}>CNE</span><span style={{marginLeft : "15px"}}>{cne.value.toUpperCase()}</span>
                                {cne.isLocked ? IMAGE_LOCK : ''}

                            </div>
                            <div style={REQUIRED_FIELD}>

                                <span style={{ fontWeight : "bold" }}>CNI</span><span style={{marginLeft : "15px"}}>{cni.value.toUpperCase()}</span>
                                {cni.isLocked ? IMAGE_LOCK : ''}

                            </div>
                            {
                                (naissance.value !== '') ?
                                <div style={REQUIRED_FIELD}>

                                    <span style={{fontWeight: "bold"}}>Naissance</span><span
                                    style={{marginLeft: "15px"}}>{new Date(naissance.value).getDay()} {new Date(naissance.value).toLocaleString('default', { month: 'long' })} {new Date(naissance.value).getFullYear()}</span>
                                    {naissance.isLocked ? IMAGE_LOCK : ''}

                                </div>
                                    :''
                            }
                            {
                                (sexe.value !== '') ?
                                    <div style={REQUIRED_FIELD}>
                                        <span style={{ fontWeight : "bold" }}>SEXE</span>
                                        <span style={{marginLeft : "15px"}}>{sexe.value.toUpperCase()}</span>
                                        {sexe.isLocked ? IMAGE_LOCK : ''}
                                    </div>
                                    : ''
                            }
                            {
                                (adresse.value !== '') ?
                                <div style={REQUIRED_FIELD}>
                                    <span style={{ fontWeight : "bold" }}>ADRESSE</span>
                                    <span style={{marginLeft : "15px"}}>{adresse.value.toUpperCase()}</span>
                                    {adresse.isLocked ? IMAGE_LOCK : ''}
                                </div>
                                    : ''
                            }
                            {
                                (adresse.value !== '') ?
                                <div style={REQUIRED_FIELD}>
                                    <span style={{ fontWeight : "bold" }}>VILLE</span>
                                    <span style={{marginLeft : "15px"}}>{adresse.value.toUpperCase()}</span>
                                    {ville.isLocked ? IMAGE_LOCK : ''}
                                </div>
                                    : ''
                            }
                            {
                                (telephone.value !== '') ?
                                    <div style={REQUIRED_FIELD}>

                                        <span style={{fontWeight: "bold"}}>TELEPHONE</span><span
                                        style={{marginLeft: "15px"}}>{telephone.value}</span>
                                        {telephone.isLocked ? IMAGE_LOCK : ''}

                                    </div>
                                    : ''
                            }
                        </div>
                    </div>
                    <div style={{
                        gridColumn: "4 / 5",
                        gridRowStart: "2",
                    }}>
                        <>
                            {
                                (education == true) ? <CarriereEtudes data = {dataEtude} /> : ''
                            }
                        </>
                        <>
                            {
                                (experience == true) ? <Experience data={dataExperience} /> : ''
                            }
                        </>
                        <>
                            {
                                (education == false || experience == false) ?  <AddCareer /> : ''
                            }
                        </>
                    </div>
                    <>
                        {
                            modal ? <AddModal /> : ''
                        }
                    </>
                    <>
                        {
                            educationModal ? <AjoutFormation /> : ''
                        }
                    </>
                    <>
                        {
                            experienceModal ? <AjoutExperience /> : ''
                        }
                    </>
                    <div style={APERCUS}><Link to={"/apercus"}><a href="" style={{color : "#ffffff"}}>Apercus</a></Link></div>
                </div>

        );
}


//Styles de profile etudiant
const REQUIRED_FIELD = {
    position : "relative",
    padding : "4px 15px 4px 5px",
    border : "1px solid #707070",
    marginBottom : "15px",
    boxShadow: "1px 2px 2px rgba(0, 0, 0, 0.2)",
    fontWeight : "normal",
    color : "#7b7b7b"
}
const ALL_IN_MAIN={
    fontFamily: "Arial",
    color: "#12549b",
    display: "grid",
    gridTemplateColumns: "1fr 325px 2% 50% 2% 150px 1fr",
    gridTemplateRows: "1fr 12% 14% 15px 14% 14% 14% 14% 1fr",
    width: "99vw",
    height: "1100px"
}
const INFOS_HEADER = {
    gridRow: "2 / 4",
    gridColumn: "2 / 3",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 5px",
    textAlign: "center",
    fontWeight: "bold",
    border: "1px solid #707070",
    boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.2)"
}

const PERSONAL_INFOS ={
    gridRowStart: "5",
    gridColumn: "2 / 3",
    padding: "15px 20px",
    fontWeight: "bold",
    border: "1px solid #707070",
    boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.2)",
    height : "fit-content"
}

const APERCUS ={
    gridColumn: "6 / 7",
    gridRowStart: "2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    backgroundImage: `url(${apercus})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "25px",
    backgroundColor: "#12549b",
    backgroundPosition: "13px",
    borderRadius: "10px",
    font: "bold 1.1em Arial",
    paddingLeft: "17px",
    textAlign: "center",
    boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.2)"
}

const IMAGE_LOCK = <img style={{ position: "absolute", top: "50%", transform: "translate(-50%, -50%)", right :"0px", width: "15px" }} src={locked} alt="lock"/>
const IMAGE_OF_VISIBLITY = <img style={{ position: "absolute", top: "50%", transform: "translate(-50%, -50%)", right : "22.5px", width: "15px" }} src={visiblity} alt="visiblity"/>
