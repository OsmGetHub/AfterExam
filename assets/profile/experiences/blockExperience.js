import React from 'react'

export default function BlockExperience({dataE, key}){
    return(
        <div style={{
            border : "1px solid #707070",
            display : "grid",
            gridTemplateColumns : "70px 15px 1fr",
            padding : "15px 13px",
            boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.2)",
            marginBottom : '10px'
        }} key={key}>
            <img style={{gridColumn: "1 / 2", width : "70px", height :"70px", border:"2px solid #707070"}} src={dataE.logoEntreprise} alt="image d'etablissment"/>
            <div style={{
                gridColumn: "3 / 4",
                display: "flex",
                flexDirection : "column",
                padding : "3px 0px"
            }} >
                <div style={{
                    fontSize : "1.2em",
                    marginBottom : "5px"
                }}><b>{dataE.titre}</b></div>
                <div style={{fontSize:"0.9em", marginBottom :"2px", fontWeight:"200"}}>{dataE.nomEntreprise}</div>
                <div style={{ color : "#808080", marginBottom :"2px", fontSize : "0.8em" }}>{new Date(dataE.dateDebut).toLocaleString('default', { month: 'long' }).toLowerCase()} {new Date(dataE.dateDebut).getFullYear()} - {new Date(dataE.dateFin).toLocaleString('default', { month: 'long' }).toLowerCase()} {new Date(dataE.dateFin).getFullYear()}</div>
                <div style={{ color : "#808080", fontSize : "0.8em" }}>{dataE.ville}, {dataE.pays}</div>
            </div>
        </div>
    );
}