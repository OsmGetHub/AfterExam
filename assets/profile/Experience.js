import React, {useEffect} from 'react';
import {add_for_profile, modify} from "../images";
import BlockExperience from "./experiences/blockExperience";
import {useDispatch, useSelector} from "react-redux";
import  {setExperience} from "../ReduxToolkit/InfospSlice";

export default function Experience({data}) {
    return (
        <React.StrictMode>
            <div style={BlockExp}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding : "0px 17px"
                }}>
                    <div style={{
                        margin : "10px 0px",
                        fontSize : "1.7em"
                    }}><b>Experience</b></div>
                    <div>
                        <img style={{width : "20px"}} src= {add_for_profile}  alt="Ajouter"/>
                        <img style={{width : "20px", marginLeft: "20px"}} src={modify} alt="edit"/>
                    </div>
                </div>
                {
                   data.map((d, index)=>{
                       return <BlockExperience dataE={d} key={index}/>
                   })
                }
            </div>
        </React.StrictMode>
    );
}

//Styles Carriere d'etudes
export const BlockExp ={
    display: "flex",
    marginBottom : "15px",
    flexDirection : "column",
    alignContent : "center",
    padding: "10px 20px 10px",
    border: "1px solid #707070",
    boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.2)",
}