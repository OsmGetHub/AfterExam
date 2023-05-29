import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Nav from "./offres/nav";
import Filtrage from "./offres/flitrage";
import Footer from "./offres/footer";
import {fetchEntrepriseArticles} from "./ReduxToolkit/EntreprisesSlice";
import EntreprisesArticles from "./entreprises/EntreprisesArticles";
export default function Entreprises(){
    const [currentPage, setCurrentPage]= useState(1)
    const articles = useSelector(state => state.Entreprise)
    const numberOfpages = Math.ceil(useSelector(state => state.Entreprise.dataAmount) / 6)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchEntrepriseArticles(currentPage))

    }, [currentPage]);
    useEffect(()=>{
        console.log(articles)
        console.log("max number " +numberOfpages)
    }, [articles])

    return (
        <React.StrictMode>
            <Nav />
            <div id="Main" style={{
                marginTop: "4px",
                display: "flex",
                height: "800px",
                backgroundColor: "#E8E8E8",
                width: "100vw"
            }}>
                <Filtrage />
                <EntreprisesArticles articles={articles} currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={numberOfpages}/>
            </div>
            <Footer />
        </React.StrictMode>
    );
}