import ActionTypes from 'react-redux-internet-connection/lib/react-redux-internet-connection/redux/actionTypes'
import {combineEpics} from 'redux-observable';
import {Observable} from "rxjs";

/**
 * Check Internet Online
 * @param action$
 * @returns {Observable<*|{type: string}>}
 */
function internetOnline(action$) {
    return action$.ofType(ActionTypes.ON_LINE)
        .mergeMap(action =>
            {
                return Observable.empty()
            }
        );

}

/**
 * export combine epics
 *
 * @type {Epic<Action, any, any, Action> | (function(*): Observable<any>)}
 */
export const InternetEpic = combineEpics(
    internetOnline
);

export default InternetEpic;
