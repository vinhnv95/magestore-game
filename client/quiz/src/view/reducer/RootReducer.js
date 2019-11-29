import {combineReducers} from 'redux'
import Extension from "../../framework/Extension";
import {reducer as internet} from 'react-redux-internet-connection';

/**
 * Init core reducer
 *
 * @returns {Reducer<any>}
 */
function coreReducer() {
    return combineReducers({
        internet
    })
}

/**
 * Check extension reducer
 *
 * @returns {*}
 */
function extensionReducer() {
    if (Extension.ExtensionConfig.reducer && Object.keys(Extension.ExtensionConfig.reducer).length) {
        return combineReducers({...Extension.ExtensionConfig.reducer})
    }

    return false
}

/**
 * Root reducer
 *
 * @returns {*}
 */
function rootReducer() {
    let extension = extensionReducer();
    if (!extension) {
        return {
            core: coreReducer(),
        }
    }
    return {
        core: coreReducer(),
        extension: extensionReducer()
    }
}

export default combineReducers(rootReducer())

