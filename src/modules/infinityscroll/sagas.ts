import {call, put, takeLatest, takeLeading} from 'redux-saga/effects';
import * as infinityAPI from 'api/ArchiveAPI';
import { calldata, calldatasearch, CALL_DATA, CALL_DATA_ERROR, CALL_DATA_SEARCH, CALL_DATA_SUCEESS, END_CALL, resetdata, RESET_DATA } from './actions';

let count = 0;

function* addDatasSaga(action : ReturnType<typeof calldata>){
    console.log('데이터더하기사가')
    try{
        const datas : infinityAPI.datastype = yield call(infinityAPI.getDatas, action.datas, count);
       
        count = datas.length/10;

        if(datas[datas.length-1]==='end'){
            yield put({type : END_CALL})
        }

        yield put({
            type : CALL_DATA_SUCEESS, data : datas
        })
    }catch(e){
        yield put({
            type : CALL_DATA_ERROR, error : e
        })
    }
}

function* searchDataSaga(action : ReturnType<typeof calldatasearch>){
    console.log('인풋있을때')
    try {
        const datas : infinityAPI.datastype = yield call(infinityAPI.getDatasbySearch, action.search, action.datas, count);
        console.log(datas, '변화값');
        count = datas.length/10;

        if(datas[datas.length-1]==='end'){
            yield put({type : END_CALL})
        }

        yield put({
            type : CALL_DATA_SUCEESS, data : datas
        })
    }catch(e){
        yield put({
            type : CALL_DATA_ERROR, error : e
        })
    }
}

function* resetData(action : ReturnType<typeof resetdata>){ 
    count = 0;     
    console.log('리셋이 왔다.', count)  
    try {
        const datas : infinityAPI.datastype = yield call(infinityAPI.getDatasbySearch, action.search, [], count);
        console.log(datas, '변화값');
        count = datas.length/10;

        if(datas[datas.length-1]==='end'){
            yield put({type : END_CALL})
        }

        yield put({
            type : CALL_DATA_SUCEESS, data : datas
        })
    }catch(e){
        yield put({
            type : CALL_DATA_ERROR, error : e
        })
    }
}


export function* InfinitySaga(){
    console.log('인피니티사가 등록')
    yield takeLeading(CALL_DATA, addDatasSaga);
    yield takeLeading(CALL_DATA_SEARCH, searchDataSaga);
    yield takeLatest(RESET_DATA, resetData);
}