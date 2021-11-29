import {   BOOK_TICKET, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS} from "./actionTypes";

export const getDataLoading = ()=>({type: GET_DATA_LOADING});

export const getDataSuccess = (data)=>({type : GET_DATA_SUCCESS, payload:data}); 
export const getDataError = ()=>({type : GET_DATA_ERROR});