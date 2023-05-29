import { createSlice } from '@reduxjs/toolkit'

export const InfospSlice = createSlice({
    name : 'infosp',
    initialState : {
        modal : false,
        education : false,
        experience : false,
        educationModal : false,
        experienceModal : false
    },
    reducers : {
        setModal : (state, action) =>{
            state.modal = action.payload
        },
        setEducation : (state,action) =>{
            state.education = action.payload
        },
        setExperience : (state,action) =>{
            state.experience = action.payload
        },
        setEduModal : (state,action) =>{
            state.educationModal = action.payload
        },
        setExpModal : (state,action) => {
            state.experienceModal = action.payload
        }
    }
})

export const {setModal, setEducation, setExperience, setEduModal, setExpModal} = InfospSlice.actions

export default InfospSlice.reducer