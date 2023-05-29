import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setEduModal} from "../../ReduxToolkit/InfospSlice";
import axios from "axios";


export default function AjoutFormation(){
    const dispatch = useDispatch()
    const [ecoles, setEcoles] = useState([])
    const [ecole, setEcole] = useState('')
    const [diplome, setDiplome] =useState('')
    const [discipline, setDiscipline] = useState('')
    const [dateDebut, setDateDebut] = useState('')
    const [dateFin, setDateFin] = useState('')
    const [desciptif, setDescriptif] = useState('')
    const edum = useSelector(state => state.Infospersonel.educationModal)
    useEffect(() => {
        // let result = []
        axios.get("http://127.0.0.1:8000/api/etablissments?page=1", {
            headers : {
                "Content-Type" : "application/ld+json"
            }
        }).then((response)=>{
            response.data["hydra:member"].map((e)=>{
                const obj = {}
                obj.idEcoles = e["@id"]
                obj.nomEcoles = e["nomEtablissement"]
                ecoles.push(obj)

            })
        })


    });


    function ajouterFormation() {
        console.log(ecole)
        console.log(diplome)
        console.log(discipline)
        console.log(dateDebut)
        console.log(dateFin)
        console.log(desciptif)

        axios.post('http://127.0.0.1:8000/api/cycle_etudes',{
            "titre": diplome,
            "discipline": discipline,
            "diplome": diplome,
            "fkEtablissement": ecole
        }, {
            headers : {
                "Content-Type" : "application/ld+json"
            }
        }).then(response =>{
            const _response = response.data["hydra:member"];
            const idEmploi = _response["@id"];
            axios.post('http://127.0.0.1:8000/api/user_cycle_etudes',{
                "fkUser": localStorage.getItem('c_user'),
                "fkCycleEtude": idEmploi,
                "dateDebut": dateDebut,
                "dateFin": dateFin
            }).catch((err)=>{
                console.log(err)
            })
        })
    }

    return (
        <div className="modal-main">
            <form action="" style={styleForm}>
                <label htmlFor="input">Ecole*</label>
                <select style={inputs} type="text" required onChange={e=>{setEcole(e.target.value)}}>
                    <option  disabled selected >Etablissements</option>
                    {
                        ecoles.map((e,i)=>(
                            <option value={e.idEcoles} key={i} onClick={ e=>{ setEcole(e.target.value) }}>{e.nomEcoles}</option>
                        ))
                    }
                </select>
                <label htmlFor="input">Diplome</label>
                <input style={inputs}type="text" onChange={e=>{setDiplome(e.target.value)}}/>
                <label htmlFor="input">Domain d'etude</label>
                <input style={inputs} type="text" onChange={e=>{setDiscipline(e.target.value)}}/>
                <div style={divDate}>
                    <label htmlFor="input">Date de debut</label>
                    <input style={inputs} className="debut" type="date" onChange={e=>{setDateDebut(e.target.value)}}/>
                    <label htmlFor="input">Date de fin (ou prevue)</label>
                    <input style={inputs} className="fin" type="date" onChange={e=>{setDateFin(e.target.value)}}/>
                </div>
                <label style={inputs}>Descriptif</label>
                <textarea style={inputs} name="" id="" cols="30" rows="10" onChange={e=>{setDescriptif(e.target.value)}}></textarea>
                <input style={submitButton} type="submit" value="Enregistrer" onClick={(e)=>{
                    ajouterFormation()
                    dispatch(setEduModal(false))
                }
                }/>
                <input onClick={(e)=> {
                    e.preventDefault()
                    dispatch(setEduModal(false))
                }} style={resetButton} type="reset" value="Annuler"/>
            </form>
        </div>
    );
}

//Style de la section de formation --PROFILE

const styleForm ={
    fontSize : "0.8em",
    backgroundColor : "white",
    width : "30%",
    borderRadius: "5px",
    margin: "auto",
    height : "fit-Content",
    padding : "40px 25px",
    color : "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent : "space-around",
    position: "relative"
}

const divDate = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "50px",
    width: "100%"
}


const inputs=  {
    marginBottom: "10px"
}

const submitButton = {
    marginBottom: "10px",
    position: "absolute",
    bottom: "5px",
    width: "fit-content",
    padding: "2px 10px",
    borderColor: "transparent",
    backgroundColor: "#12549b",
    color : "white",
    borderRadius : "10px",
    right: "30px"
}
const resetButton = {
    marginBottom: "10px",
    position: "absolute",
    bottom: "5px",
    width: "fit-content",
    padding: "2px 10px",
    BackgroundColor: "transparent",
    color : "#12549b",
    borderColor: "transparent",
    borderRadius : "10px",
    right: "125px"
}