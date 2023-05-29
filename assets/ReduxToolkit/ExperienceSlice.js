import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserEmploi = createAsyncThunk(
    'exprience/fetchUserEmploi',

    async(idUserEmploi) =>{
        const response = {};
        const response1 = await axios.get(idUserEmploi, {
            headers :{
                'accept': 'application/json'
            }
        })
        const response2 = await axios.get(response1.data.fkEmploi,{
            headers: {
                'accept': 'application/json'
            }
        })

        const response3 = await axios.get(response2.data.fkEntreprise,{
            headers: {
                'accept': 'application/json'
            }
        })
        response.dateDebut = Date(response1.data.dateDebut);
        response.dateFin = Date(response1.data.dateFin);
        response.titre = response2.data.titre;
        response.descriptif = response2.data.descriptif;
        response.nomEntreprise = response3.data.NomEntreprise;
        response.logoEntreprise = response3.data.logoEntreprise;
        response.ville = response3.data.ville;
        response.pays = response3.data.pays;
        return response;
    }
)
export const ExperienceSlice = createSlice({
        name: 'experience',
        initialState : {
            userExperience : []
        },
    reducers : {
            addUserExperience : (state, {payload}) =>{
                state.userExperience.push(payload)
            },
            removeUSerExperience : (state, {payload})=>{
                const index = state.userExperience.findIndex((item) => item.titre === payload.titre);
                if (index !== -1) {
                    state.userExperience.splice(index, 1);
                }
            }
    },
    extraReducers : {
            [fetchUserEmploi.fulfilled] : (state, {payload}) =>{
                console.log("Hello : "+payload)
                state.userExperience.push(payload)
            }
    }
})

export default  ExperienceSlice.reducer;