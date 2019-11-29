import InformationConstant from "../constant/InformationConstant";

const  initialState = {
    loading: false,
    student: null
};
/**
 * receive action from User Action
 *
 * @param state
 * @param action
 * @returns {*}
 */
const informationReducer = function (state = initialState, action) {
    switch (action.type) {
        case InformationConstant.SUBMIT_INFO:
            return {
                ...state,
                loading: true
            };
        case InformationConstant.SUBMIT_INFO_RESULT:
            return {
                ...state,
                student: action.student,
                loading: false
            };
        default:
            return state;
    }
};

export default informationReducer;
