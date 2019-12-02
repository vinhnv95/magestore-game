import InformationConstant from "../constant/InformationConstant";
import LocalStorageHelper from "../../helper/LocalStorageHelper";
import QuestionConstant from "../constant/QuestionConstant";

const  initialState = {
    loading: false,
    student: LocalStorageHelper.getStudent(),
    logoUrl: "https://www.titechglobal.com/wp-content/uploads/2017/08/Magestore-1024x247.png"
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
        case QuestionConstant.SUBMIT_ANSWER:
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
