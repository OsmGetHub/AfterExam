import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


export function ApercusEtudes(){
    const education = useSelector(state => state.UserEtude.userEtude)
    const [orderedList, setOrderdList] = useState([])

    const orderData = ()=>{
        const result = []
        education.forEach(obj=>{
            let universite = result.find(e=>e.nomUniversite === obj.nomUniversite)
            if(!universite){
                universite = {
                    nomUniversite : obj.nomUniversite,
                    logoUniversite : obj.logoUniversite,
                    region : obj.region,
                    etablissement : []
                }
                result.push(universite)
            }

            let etablissement = universite.etablissement.find(e => e.nomEtablissement === obj.nomEtablissement)
            if(!etablissement){
                etablissement = {
                    nomEtablissement: obj.nomEtablissement,
                    ville : obj.ville,
                    diplome : []
                }
                universite.etablissement.push(etablissement)
            }
            const diplomaExists = etablissement.diplome.some(
                (d) => d.typeDiplome === obj.diplome
            );
            if (!diplomaExists) {
                const dateDebutMonth = new Date(obj.dateDebut).toLocaleString('default', { month: 'long' }).toLowerCase()
                const dateDebutYear = new Date(obj.dateDebut).getFullYear()
                const dateFinMonth = new Date(obj.dateFin).toLocaleString('default', { month: 'long' }).toLowerCase()
                const dateFinYear = new Date(obj.dateFin).getFullYear()
                const diploma = {
                    typeDiplome: obj.diplome,
                    titre : obj.titre,
                    discipline : obj.discipline,
                    dateDebut : dateDebutMonth+dateDebutYear,
                    dateFin : dateFinMonth+dateFinYear
                }
                etablissement.diplome.push(diploma);
            }
        })
        setOrderdList(result)
    }

    useEffect(() => {
        orderData()
    }, [education]);

    return(
        <React.StrictMode>
            <hr style={{
                height : "1.2px"
            }}/>
            <div style={{
                display: "grid",
                gridTemplateColumns: "50px 15% 2% 1fr 200px 70px",
                gridTemplateRows : "5% 25px 1fr",
                padding : "20px 0px"
            }}>
                <div style={{
                    gridRow: "1 / 2",
                    gridColumn: "2 / 6",
                    fontWeight : "bold",
                }}>Education : </div>
                <div style={{
                    gridColumn: "2 / 6",
                    gridRowStart :"3"
                }}>
                    {
                        orderedList.map((item, index)=>(
                            <div style={{
                                display : "grid",
                                gridTemplateColumns : "50px 1% 1fr",
                                marginBottom : "10px"
                            }} key={index}>
                                <img style={{gridColumn: "1 / 2", width : "50px", height : "50px", border : "1px solid black"}} src={item.logoUniversite} alt="image d'etablissment"/>
                                <div style={{
                                    gridColumn: "3 / 4",
                                    display: "flex",
                                    flexDirection : "column",
                                    height : "fit-content"
                                }} >
                                    <div style={{
                                        fontSize : "1em",
                                        marginBottom : "2px",
                                        color : "#12549B"
                                    }}><b>{item.nomUniversite}</b></div>
                                    <div style={{
                                        fontSize:"0.95em", color: "#707070",
                                        padding : "2.5px 0px",
                                        width : "100%"
                                    }}>
                                        {item.etablissement.map((item, index) => (
                                                    <React.StrictMode>
                                                        <div style={{
                                                            marginLeft : "10px",
                                                            fontSize : "0.9em",
                                                            fontWeight : "bold"
                                                        }}
                                                        key={index}
                                                        >{item.nomEtablissement}</div>
                                                        {
                                                            item.diplome.map((item)=>(
                                                                <div style={{
                                                                    display :"flex",
                                                                    alignItems :"center",
                                                                    color: "#707070",
                                                                    padding : "2.5px 0px",
                                                                    marginLeft : "15px",
                                                                }}>
                                                                    <div style={{minWidth:"fit-content", fontSize : "0.8em"}}>{item.typeDiplome}, {item.titre}</div>
                                                                    <hr style={{
                                                                        flexGrow : "1",
                                                                        margin :"0 10px",
                                                                        border :"none",
                                                                        backgroundColor: "#707070",
                                                                        height : "0.7px"
                                                                    }}/>
                                                                    <div style={{ minWidth:"fit-content", color : "#707070", fontSize : "0.8em"}}>{new Date(item.dateDebut).toLocaleString('default', { month: 'long' }).toLowerCase()} {new Date(item.dateDebut).getFullYear()} - {new Date(item.dateFin).toLocaleString('default', { month: 'long' }).toLowerCase()} {new Date(item.dateFin).getFullYear()}</div>

                                                                </div>
                                                            ))
                                                        }
                                                </React.StrictMode>
                                                ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </React.StrictMode>
    );
}