import {combineEpics} from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import extensionEpic from '../../extension/epics';
import InternetEpic from "./InternetEpic";
import InformationEpic from "./InformationEpic";
import questionEpic from './QuestionEpic';

export default () => {
    const epic$ = new BehaviorSubject(combineEpics(
        InternetEpic,
        InformationEpic,
        questionEpic
    ));

    const rootEpic = (action$, store) =>
        epic$.mergeMap(epic =>
            epic(action$, store)
        );

    extensionEpic.loadExtensionEpic(epic$);
    return rootEpic
}
