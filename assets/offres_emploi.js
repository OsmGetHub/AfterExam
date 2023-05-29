import React, {useEffect, useState} from 'react';
import Nav from './offres/nav'
import {useDispatch, useSelector} from "react-redux";
import {fetchEmploiArticles} from "./ReduxToolkit/EmploiArticlesSlice";
import Filtrage from "./offres/flitrage";
import Articles from "./offres/articles";
import Footer from "./offres/footer";
import emploi from './data/emploi.JSON'

export default function OffresEmploi() {
    const [currentPage, setCurrentPage]= useState(1)
    const articles = useSelector(state => state.EmploiArticles)
    const numberOfpages = useSelector(state => state.EmploiArticles.dataAmount) / 4
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEmploiArticles(currentPage))
    }, [currentPage]);

    useEffect(() => {
        console.log(articles)
    });
    return (
        <React.StrictMode>
            <Nav />
            <div id="Main" style={{
                marginTop: "4px",
                display: "flex",
                height: "1050px",
                backgroundColor: "#E8E8E8",
                width: "100vw"
            }}>
                <Filtrage />
                <Articles articles={emploi} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={numberOfpages}/>
            </div>
            <Footer />
        </React.StrictMode>
    );
}
