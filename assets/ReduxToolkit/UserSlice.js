import { createSlice} from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name : 'user',
    initialState : {
        cne : {
            value : '',
            isVisible : false,
            isLocked : true
        },
        cni : {
            value : '',
            isVisible : false,
            isLocked : true
        },
        nom : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        prenom : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        sexe : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        date : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        naissance : {
            value : '',
            isVisible : false,
            isLocked : true
        },
        adresse : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        ville : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        telephone : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        email : {
            value : '',
            isVisible : true,
            isLocked : false
        },
        type : {
            value : [],
            isVisible : true,
            isLocked : false
        },
    },
    reducers : {
        setCne : (state, action) => {
            state.cne = action.payload
        },
        setCni : (state, action) => {
            state.cni = action.payload
        },
        setNom : (state, action) => {
            state.nom = action.payload
        },
        setPrenom : (state, action) => {
            state.prenom = action.payload
        },
        setSexe : (state, action) => {
            state.sexe = action.payload
        },
        setDate : (state, action) => {
            state.date = action.payload
        },
        setNaissance : (state, action) => {
            state.naissance = action.payload
        },
        setAdresse : (state, action) => {
            state.adresse = action.payload
        },
        setVille : (state, action) => {
            state.ville = action.payload
        },
        setTelephone : (state, action) => {
            state.telephone = action.payload
        },
        setEmail : (state, action) => {
            state.email = action.payload
        },
        setType : (state, action) => {
            state.type = action.payload
        },

    }
})

export const {

    setCne,

    setCni,

    setAdresse,

    setDate,

    setEmail,

    setNaissance,

    setVille,

    setTelephone,

    setNom,

    setPrenom,

    setSexe,

    setType,

    setPassword

} = UserSlice.actions;
export default UserSlice.reducer