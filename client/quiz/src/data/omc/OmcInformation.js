import OmcAbstract from "./OmcAbstract";

export default class OmcInformation extends OmcAbstract {
    static className = 'OmcInformation';

    submit_info_api = "/V1/student";
    submit_answer_api = "/V1/student/submit";
    submit_get_present_api = "/V1/student/get-present";

    /**
     *
     * @param student
     * @returns {Promise<any>}
     */
    submitInfo(student) {
        let params = {
            student: student
        };

        let url = this.getBaseUrl() + this.submit_info_api;
        return this.post(url, params);
    }

    submitAnswer(student, isCorrectAnswer, time) {
        let params = {
            answer: {
                id: student.id,
                isCorrectAnswer: isCorrectAnswer,
                time: time
            }
        };

        let url = this.getBaseUrl() + this.submit_answer_api;
        return this.post(url, params);
    }

    getPresent(id) {
        let params = {
            id: id
        };
        let url = this.getBaseUrl() + this.submit_get_present_api;
        return this.post(url, params);
    }
}

