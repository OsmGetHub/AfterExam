import React from 'react';
import {useDispatch} from "react-redux";
import {setModal} from "../ReduxToolkit/InfospSlice";
import {add_for_profile} from "../images";

export default function AddCareer(){
    const dispatch = useDispatch()
    return(
        <div onClick={()=>dispatch(setModal(true))} style={ADDCREER}>
            <a   style={{
                padding:"15px 25px",
                display:"block",
                width:"100%"
            }} href="#"><img style={{ height:"20px" }} src={add_for_profile} alt="default"/></a>
        </div>
    );
}

export let ADDCREER ={
    marginTop : "0px",
    height: "50px",
    border: "1px solid #707070",
    boxShadow: "0px 4px 3px rgba(0, 0, 0, 0.2)",
}
