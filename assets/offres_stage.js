import React, {useState} from 'react';
import Nav from './offres/nav'
import Filtrage from "./offres/flitrage";
import Articles from "./offres/articles";
import Footer from "./offres/footer";
import Stage from "./data/Stage.JSON";
import {useDispatch, useSelector} from "react-redux";

export default function OffresStage(){
    const [currentPage, setCurrentPage]= useState(1)
    const articles = useSelector(state => state.EmploiArticles)
    const numberOfpages = useSelector(state => state.EmploiArticles.dataAmount) / 4
    const dispatch = useDispatch()
    return (
        <React.StrictMode>
            <Nav />
            <div id="Main" style={{
                marginTop: "2px",
                display: "flex",
                height: "1200px",
                backgroundColor: "#E8E8E8",
                width: "99vw"
            }}>
                <Filtrage />
                <Articles articles={Stage} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={numberOfpages}/>
            </div>
            <Footer />
        </React.StrictMode>
    );

}