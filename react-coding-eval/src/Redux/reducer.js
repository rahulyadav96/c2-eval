import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes";

const initState = {
    loading:false,
    data : [],
    error:false
}
const findDate = (state = initState, {type, payload})=>{

    switch(type){
        case GET_DATA_LOADING:
            return{
                ...state,
                loading:true

            }

            case  GET_DATA_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    data = payload
                }

        case GET_DATA_ERROR :
            return{
                ...state,
                loading:false,
                error = true
            }
    }
}
