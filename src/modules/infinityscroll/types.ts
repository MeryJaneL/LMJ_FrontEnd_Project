import * as actions from './actions';
import {ActionType} from 'typesafe-actions'
import {datastype} from 'api/ArchiveAPI';

export type infinityaction = ActionType<typeof actions>;

export type infinityStatetype = {
    loading : boolean,
    data : datastype | null,
    error : Error | null,
    end : boolean,
}