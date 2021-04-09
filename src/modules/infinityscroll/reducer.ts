import { CALL_DATA, CALL_DATA_ERROR, CALL_DATA_SEARCH, CALL_DATA_SEARCH_ERROR, CALL_DATA_SEARCH_SUCEESS, CALL_DATA_SUCEESS, END_CALL, RESET_DATA } from "./actions";
import { infinityaction, infinityStatetype } from "./types";

const infinityState : infinityStatetype = {
    loading : false,
    data : null,
    error : null,
    end : false,
}

function infinityreducer(state : infinityStatetype = infinityState, action : infinityaction){    
    switch(action.type){
        case CALL_DATA : {
            return {
                ...state,
                loading : true,
                data : action.datas,
                //error : null,
            }
        }
        case CALL_DATA_SUCEESS : {
            return {
                ...state,
                loading : false,
                data : action.data,
                //error : null,
            }
        }
        case CALL_DATA_ERROR : {
            return {
                ...infinityState,
                loaing : false,
                error : action.error,
            }
        }

        case CALL_DATA_SEARCH : {
            return {
                ...state,
                loading : true,
                data : action.datas,
                //error : null,
            }
        }
        case CALL_DATA_SEARCH_SUCEESS : {
            return {
                ...state,
                loading : false,
                data : action.data,
                //error : null
            }
        }
        case CALL_DATA_SEARCH_ERROR : {
            return {
                ...infinityState,
                loaing : false,
                error : action.error
            }
        }

        case RESET_DATA : {
            return{
                loading : true,
                data : [],
                error : null,
                end : false,
            }
        }

        case END_CALL :{
            return{
                ...state,
                end : true,
            }
        }

        default : return state;
    }
}

export default infinityreducer;