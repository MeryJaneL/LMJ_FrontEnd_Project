import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import infinityreducer, { InfinitySaga } from './infinityscroll';

const rootReducer = combineReducers({
    infinityreducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga(){
    yield all([
        InfinitySaga(),
    ])
}
