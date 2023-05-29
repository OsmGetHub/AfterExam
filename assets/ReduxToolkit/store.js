import  { configureStore } from '@reduxjs/toolkit'
import InfospReducer from "./InfospSlice";
import LoginReducer from "./LoginSlice";
import UserReducer from './UserSlice'
import EmploiArticlesReducer from "./EmploiArticlesSlice";
import ExperienceReducer from "./ExperienceSlice";
import EtudesReducer from "./EtudesSlice"
import EntreprisesReducer from "./EntreprisesSlice";
export const store = configureStore ( {
    reducer : {
        Infospersonel : InfospReducer,
        UserLogin : LoginReducer,
        UserData : UserReducer,
        EmploiArticles : EmploiArticlesReducer,
        UserExperience : ExperienceReducer,
        UserEtude : EtudesReducer,
        Entreprise : EntreprisesReducer
    }
})