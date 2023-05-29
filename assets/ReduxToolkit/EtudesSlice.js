import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserEtude = createAsyncThunk(
    'etude/fetchUserEtude',

    async(idUserEtude) =>{
        const response = {};
        const response1 = await axios.get(idUserEtude, {
            headers :{
                'accept': 'application/json'
            }
        })
        const response2 = await axios.get(response1.data.fkCycleEtude,{
            headers: {
                'accept': 'application/json'
            }
        })

        const response3 = await axios.get(response2.data.fkEtablissement,{
            headers: {
                'accept': 'application/json'
            }
        })

        response.dateDebut = Date(response1.data.dateDebut);
        response.dateFin = Date(response1.data.dateFin);
        response.titre = response2.data.titre;
        response.discipline = response2.data.discipline;
        response.diplome = response2.data.diplome;
        response.nomEtablissement = response3.data.nomEtablissement;
        response.nomUniversite = response3.data.nomUniversite;
        response.region = response3.data.region;
        response.ville = response3.data.ville;
        response.logoUniversite = response3.data.logoUniversite;
        return response;

        
    }
)
export const EtudesSlice = createSlice({
    name: 'etude',
    initialState : {
        userEtude : []
    },
    reducers : {
        addUserEtude : (state, {payload}) =>{
            state.userEtude.push(payload)
        },
        removeUserEtude : (state, {payload})=>{
            const index = state.userEtude.findIndex((item) => item.titre === payload.titre);
            if (index !== -1) {
                state.userEtude.splice(index, 1);
            }
        }
    },
    extraReducers : {
        [fetchUserEtude.fulfilled] : (state, {payload}) =>{
            state.userEtude.push(payload)
        }
    }
})

export default  EtudesSlice.reducer;