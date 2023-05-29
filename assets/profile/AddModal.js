import React from 'react'
import {useDispatch} from "react-redux";
import {setEduModal, setExpModal, setModal} from "../ReduxToolkit/InfospSlice";


export default function AddModal(){
    const dispatch = useDispatch()
    return(
            <div>
                <div className="modal-main">
                    <div id="add-to-profile">
                        <div className="head-modal">Ajouter au profile <button type="submit" onClick={()=>dispatch(setModal(false))}>x</button></div>
                        <hr />
                            <p className="ajouter"><button type="submit" onClick={()=>{dispatch(setEduModal(true)); dispatch(setModal(false))}} >Ajouter une formation</button></p>
                            <hr className="second" />
                            <p className="ajouter"><button type="submit" onClick={()=>{dispatch(setExpModal(true)); dispatch(setModal(false))}}>Ajouter une experience</button></p>
                    </div>
                </div>
            </div>
    );
}
