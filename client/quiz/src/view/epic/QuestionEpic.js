import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import InformationService from "../../service/information/InformationService";
import InformationAction from "../action/InformationAction";
import LocalStorageHelper from '../../helper/LocalStorageHelper';
import QuestionConstant from '../constant/QuestionConstant';

/**
 * click login action
 * @param action$
 * @returns {Observable<any>}
 */
const submitAnswer = (action$, store) => action$.ofType(QuestionConstant.SUBMIT_ANSWER)
    .mergeMap(action => {
        let student = store.getState().core.information.student;
        return Observable.from(InformationService.submitAnswer(student, action.isCorrectAnswer, action.time))
            .map((response) => {
                LocalStorageHelper.setStudent(response);
                return InformationAction.submitInfoResult(response);
            }).catch(error => Observable.empty())
    });

/**
 * export combine epics
 *
 * @type {Epic<Action, any, any, Action> | (function(*): Observable<any>)}
 */
export const questionEpic = combineEpics(
    submitAnswer
);

export default questionEpic;



