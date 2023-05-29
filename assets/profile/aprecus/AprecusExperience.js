import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


export default function AprecusExperience(){
    const experience = useSelector(state => state.UserExperience.userExperience)
    const [orderedListExp, setOrderdListExp] = useState([])

    const orderData = ()=>{
        const result = []
        experience.forEach(obj=>{
            let entreprise = result.find(e=>e.nomEntreprise === obj.nomEntreprise)
            if(!entreprise){
                entreprise = {
                    nomEntreprise : obj.nomEntreprise,
                    logoEntreprise : obj.logoEntreprise,
                    ville : obj.ville,
                    pays : obj.pays,
                    emploi : []
                }
                result.push(entreprise)
            }

            let emploi = entreprise.emploi.find(e => e.titre === obj.titre)
            if(!emploi){
                emploi = {
                    titre: obj.titre,
                    descriptif : obj.descriptif,
                    dateDebut: obj.dateDebut,
                    dateFin : obj.dateFin,

                }
                entreprise.emploi.push(emploi)
            }
        })
        setOrderdListExp(result)
        console.log(orderedListExp)
    }

    useEffect(() => {
        orderData()
    }, [experience]);


    return (
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
                }}>Experience : </div>
                <div style={{
                    gridColumn: "2 / 6",
                    gridRowStart :"3"
                }}>
                    {
                        orderedListExp.map((item, index)=>(
                            <div style={{
                                display : "grid",
                                gridTemplateColumns : "50px 1% 1fr",
                                marginBottom : "10px"
                            }} key={index}>
                                <img style={{gridColumn: "1 / 2", width : "50px", height: "50px", border : "1px solid black"}} src={item.logoEntreprise} alt="image d'etablissment"/>
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
                                    }}><b>{item.nomEntreprise}</b></div>
                                    <div style={{
                                        fontSize:"0.95em", color: "#707070",
                                        padding : "2.5px 0px",
                                        width : "100%"
                                    }}>
                                        {
                                            item.emploi.map((item, index)=>(
                                                <div style={{
                                                    display :"flex",
                                                    alignItems :"center",
                                                    color: "#707070",
                                                    padding : "2.5px 0px",
                                                    marginLeft : "10px",
                                                }} key={index}>
                                                    <div style={{minWidth:"fit-content", fontSize : "0.8em"}}>{item.titre}</div>
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