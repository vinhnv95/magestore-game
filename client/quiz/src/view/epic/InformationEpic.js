import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import InformationConstant from "../constant/InformationConstant";
import InformationService from "../../service/information/InformationService";
import InformationAction from "../action/InformationAction";
import LocalStorageHelper from '../../helper/LocalStorageHelper';

/**
 * click login action
 * @param action$
 * @returns {Observable<any>}
 */
const submitInfo = action$ => action$.ofType(InformationConstant.SUBMIT_INFO)
    .mergeMap(action => Observable.from(InformationService.submitInfo(action.student))
        .map((response) => {
            LocalStorageHelper.setStudent(response);
            return InformationAction.submitInfoResult(response);
        }).catch(error => Observable.empty())
    );

const getPresent = action$ => action$.ofType(InformationConstant.GET_PRESENT)
    .mergeMap(action => Observable.from(InformationService.getPresent(action.id))
        .map((response) => {
            LocalStorageHelper.setStudent(response);
            return InformationAction.getPresentResult(response);
        }).catch(error => Observable.empty())
    );

/**
 * export combine epics
 *
 * @type {Epic<Action, any, any, Action> | (function(*): Observable<any>)}
 */
export const informationEpic = combineEpics(
    submitInfo,
    getPresent
);

export default informationEpic;



