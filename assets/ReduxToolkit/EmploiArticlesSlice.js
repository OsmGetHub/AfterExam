import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmploiArticles = createAsyncThunk(
    'offresEmploi/fetchEmploiArticles',
    async (pageNum) => {
        const response = await axios.get(`/api/offre_emplois?page=${pageNum}`,{
            headers: {
                'Content-Type': 'application/ld+json'
            }
        })
        return response.data
    }
)

export const EmploiArticlesSlice = createSlice({
    name : 'offresEmploi',
    initialState : {
      data : {},
      dataAmount : Number,
      status : null
    },
    reducers : {
    },
    extraReducers:{
        [fetchEmploiArticles.fulfilled] :(state, { payload }) => {
            state.data = payload
            state.dataAmount = payload['hydra:totalItems']
            state.status = 'success'
        },
        [fetchEmploiArticles.pending] : (state) => {
            state.status = "loading..."
        },
        [fetchEmploiArticles.rejected] :(state) => {
            state.status = "rejected!!"
        }
    }
})
export default EmploiArticlesSlice.reducer