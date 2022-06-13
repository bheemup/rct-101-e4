// Auth Actions here
import {AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR
    ,AUTH_SIGN_OUT} from "./auth.types";

    export const authLoding =()=>({type:AUTH_SIGN_IN_LOADING})
    export const authSigning =()=>({type:AUTH_SIGN_IN_SUCCESS})
    export const authError =()=>({type:AUTH_SIGN_IN_ERROR})
    export const authLogout =()=>({type:AUTH_SIGN_OUT})
    
