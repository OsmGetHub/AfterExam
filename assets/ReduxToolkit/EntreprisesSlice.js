import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchEmploiArticles} from "./EmploiArticlesSlice";

export const fetchEntrepriseArticles = createAsyncThunk(
    'entreprise/fetchEntrepriseArticles',
    async (pageNumb) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/entreprises?page=${pageNumb}`)
        return response
    }
)
export const EntreprisesSlice = createSlice({
    name : 'entreprise',
    initialState : {
        entreprisesData : [],
        dataAmount : Number,
        status : null
    },
    reducers : {

    },
    extraReducers : {
        [fetchEntrepriseArticles.fulfilled] : (state, {payload})=>{
            state.entreprisesData = []
            state.entreprisesData.push(payload.data['hydra:member'])
            state.dataAmount = payload.data["hydra:totalItems"]
            state.status = "success"
        },
        [fetchEntrepriseArticles.pending] : (state) => {
            state.status = "loading..."
        },
        [fetchEntrepriseArticles.rejected] :(state) => {
            state.status = "rejected!!"
        }
    }
})

export default EntreprisesSlice.reducer