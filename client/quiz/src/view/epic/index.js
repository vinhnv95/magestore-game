import {combineEpics} from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import extensionEpic from '../../extension/epics';
import InternetEpic from "./InternetEpic";

export default () => {
    const epic$ = new BehaviorSubject(combineEpics(
        InternetEpic
    ));

    const rootEpic = (action$, store) =>
        epic$.mergeMap(epic =>
            epic(action$, store)
        );

    extensionEpic.loadExtensionEpic(epic$);
    return rootEpic
}
