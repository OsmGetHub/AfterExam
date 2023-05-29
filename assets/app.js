import React from 'react';
import OffresEmploi from "./offres_emploi";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OffresStage from "./offres_stage";
import OffresFormation from "./offres_formation";
import Profile from './profile';
import AddPost from "./ajouterOffres/addPost";
import Apercus from './profile/aprecus/apercus'
import Entreprises from "./Entreprises";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OffresEmploi />} />
                <Route path="/offrestage" element={<OffresStage />} />
                <Route path="/offreemploi" element={<OffresEmploi />} />
                <Route path="/offreformation" element={<OffresFormation />} />
                <Route path="/entreprises" element={<Entreprises/>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/ajouteroffre" element={<AddPost />} />
                <Route path="/apercus" element={<Apercus />} />
            </Routes>
        </BrowserRouter>
    );
}