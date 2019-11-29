import InformationConstant from "../constant/InformationConstant";

export default {

    /**
     * Action submit info
     *
     * @param student
     * @returns {{student: *, type: string}}
     */
    submitInfo: (student) => {
        return {
            type: InformationConstant.SUBMIT_INFO,
            student: student
        }
    },

    /**
     *
     * @param student
     * @returns {{student: *, type: string}}
     */
    submitInfoResult: (student) => {
        return {
            type: InformationConstant.SUBMIT_INFO_RESULT,
            student: student
        }
    },
}

