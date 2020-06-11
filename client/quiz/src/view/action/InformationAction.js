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

    clearCache: () => {
        return {
            type: InformationConstant.CLEAR_CACHE
        }
    },

    getPresent: (id) => {
        return {
            type: InformationConstant.GET_PRESENT,
            id: id
        }
    },

    getPresentResult: (student) => {
        return {
            type: InformationConstant.GET_PRESENT_RESULT,
            student: student
        }
    }
}

