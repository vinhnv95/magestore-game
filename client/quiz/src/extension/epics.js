import {combineEpics} from 'redux-observable';
import imports from './imports.js'
import config from './config'

const list = [];

const Config = config();
Config.module && Config.module.forEach(module => {
  try {
    list.push(require(`./${module}/view/epic`))
  } catch (e) {}
});

/**
 *   add async into root epic
 */
export default class ExtensionEpic {
  static loadExtensionEpic(rootEpic$) {
    if (!list.length) return;
    return new Promise(() => {
      imports(...list).then((result) => {
        rootEpic$.next(combineEpics(...result))
      }).catch(() => {
      });

    })
  }
}
