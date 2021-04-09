import { datastype } from "api/ArchiveAPI";

export const CALL_DATA = 'infinity/CALL_DATA' as const;
export const CALL_DATA_SUCEESS = 'infinity/CALL_DATA_SUCESS' as const;
export const CALL_DATA_ERROR = 'infinity/CALL_DATA_ERROR' as const;
export const CALL_DATA_SEARCH = 'infinity/CALL_DATA_SEARCH' as const;
export const CALL_DATA_SEARCH_SUCEESS = 'infinity/CALL_DAT_SEARCHA_SUCESS' as const;
export const CALL_DATA_SEARCH_ERROR = 'infinity/CALL_DATA_SEARCH_ERROR' as const;
export const RESET_DATA = 'infinity/RESET_DATA' as const;
export const END_CALL = 'infinity/END_CALL' as const;

export const calldata = (datas : datastype) => {
    return {type : CALL_DATA, datas : datas};
}
export const calldatasucess = (datas : datastype) => {
    return {type : CALL_DATA_SUCEESS, data : datas};
}
export const calldataerror = (error : Error) => {
    return {type : CALL_DATA_ERROR, error : error};
}

export const calldatasearch = (search : string, datas : datastype) => {
    return {type : CALL_DATA_SEARCH, datas : datas, search : search};
}
export const calldatasearchsucess = (datas : datastype) => {
    return {type : CALL_DATA_SEARCH_SUCEESS, data : datas};
}
export const calldatasearcherror = (error : Error) => {
    return {type : CALL_DATA_SEARCH_ERROR, error : error};
}


export const resetdata = (datas : datastype, search : string) =>{
    return {type : RESET_DATA, datas : datas, search : search};
}
export const endcall = () =>{
    return {type : END_CALL};
}