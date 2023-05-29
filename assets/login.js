import React, {useEffect, useState} from 'react'
import axios from "axios";
import Cookies from 'js-cookie'
import { useDispatch, useSelector} from "react-redux";
import {setLogin, setUser} from "./ReduxToolkit/LoginSlice";
import {
    setCne,
    setCni,
    setEmail,
    setNaissance,
    setNom,
    setPrenom,
    setSexe,
    setTelephone,
    setType, setVille
} from "./ReduxToolkit/UserSlice";
import App from './app';
import {fetchUserEmploi} from "./ReduxToolkit/ExperienceSlice";
import {fetchUserEtude} from "./ReduxToolkit/EtudesSlice";

const ENVIRONMENT_BOX = {
    display : "flex",
    justifyContent:"center",
    alignItems : "center",
    border : "2px solid black",
    height : "100vh"
}
const BOX ={
    width: "351px",
    height: "300px",
    border: "2px solid #70707088",
    borderRadius: "50px",
    boxSizing: "border-box",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(0,0, 0, 0.2)"
}

const HEADER = {
    display: "flex",
    alignItems: "center",
    height: "61px",
    textAlign: "center",
    backgroundColor: "#13569F",
    color: "white",
    borderRadius: "48px 48px 0px 0px",
    fontFamily: 'HP Simplified Hans',
    fontSize: "22px",
    marginBottom: "25px",
}

const INPUT = {
    marginTop : "25px",
    width: "266px",
    height: "28px",
    backgroundColor: "#F7F7F7",
    borderColor: "#70707088",
    borderRadius: "5px",
    fontWeight :"1.1em"
}

const BUTTON = {
    display: "inline-block",
    padding: "10px 25px",
    backgroundColor: "#13569F",
    color: "white",
    fontFamily: 'HP Simplified Hans',
    fontSize: "14px",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "100px",
    transition: "all .2s",
    marginTop:"35px"
}
export default function Login(){

    const [cne, setCne_] = useState('')
    const [cni, setCni_] = useState('')
    const {isLogged, userLog} = useSelector(state => state.UserLogin)
    const dispatch = useDispatch()

    useEffect(() => {

        const session = Cookies.get("PHPSESSID");
        console.log("Session actuelle : "+session);
        if(session !== undefined){
            console.log("Session actuelle : "+session);
            userData();
            dispatch(setLogin(true))
        }

    },[]);


    const LOGIN_FORM =
        <div style={ENVIRONMENT_BOX}>
            <form style={BOX} action="">
                <div style={HEADER}><span style={{margin : "auto"}}>s'authentifier</span></div>
                <input style={INPUT} id="1" className="cne" type="text" onChange={(e)=>{
                    setCne_(e.target.value)
                }
                } placeholder="CNE"/>
                <input  style={INPUT} id="2"classeName= "cni" type="password" onChange={(e)=>{
                    setCni_(e.target.value)
                }
                } placeholder="CNI"/>
                <a className="connexion" style={BUTTON}  href="" onClick={(e)=>processData(e)}>connexion</a>
            </form>
        </div>

    return (
        <React.StrictMode>
            {
                (!isLogged) ? LOGIN_FORM : ''
            }
            {
                isLogged ? <App /> : ''
            }
        </React.StrictMode>
    );



    async function userData() {
       
        axios.get(localStorage.getItem("c_user"), {
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then( (response) => {
            console.log(response.data)
            const _response = response.data;
            dispatch(setCne({
                value: _response.CNE,
                isVisible : true,
                isLocked : true
            }))
            dispatch(setCni({
                value: _response.CNI,
                isVisible : true,
                isLocked : true
            }))
            dispatch(setNom({
                value: _response.lastName,
                isVisible : true,
                isLocked : false
            }))
            dispatch(setPrenom({
                value: _response.firstName,
                isVisible : true,
                isLocked : false
            }))
            dispatch(setTelephone({
                value: _response.telephone,
                isVisible : false,
                isLocked : false
            }))
            dispatch(setSexe({
                value: _response.sexe,
                isVisible : true,
                isLocked : true
            }))
            dispatch(setEmail({
                value: _response.email,
                isVisible : false,
                isLocked : true
            }))
            dispatch(setNaissance({
                value: _response.dateNaissance,
                isVisible : false,
                isLocked : true
            }))
            dispatch(setType({
                value: _response.roles,
                isVisible : true,
                isLocked : false
            }))
            dispatch(setVille({
                value: _response.ville,
                isVisible : true,
                isLocked : false
            }))
            dispatch(setLogin(true));
            let length = _response.userEmplois.length;
            for(let i=0; i < length; i++){
                dispatch(fetchUserEmploi(_response.userEmplois[i]))
            }
            length = _response.userCycleEtudes.length;
            for(let i=0; i < length; i++){
                console.log(_response.userCycleEtudes[i])
                dispatch(fetchUserEtude(_response.userCycleEtudes[i]))
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    function processData (event){
        event.preventDefault()
        axios.post('http://127.0.0.1:8000/login', {username : cne, password : cni}, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
            .then(
                (response)=> {
                    console.log(response);
                    dispatch(setUser(response.data.user))
                    localStorage.setItem("c_user",response.data.user);
                    console.log(userLog)
                    userData()
                }
            )
            .catch((err)=>{
            console.log(err.request)
        })
    }

}
