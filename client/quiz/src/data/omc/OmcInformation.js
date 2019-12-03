import OmcAbstract from "./OmcAbstract";

export default class OmcInformation extends OmcAbstract {
    static className = 'OmcInformation';

    submit_info_api = "/V1/student";
    submit_answer_api = "/V1/student/submit";

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

    submitAnswer(student, isCorrectAnswer) {
        let params = {
            answer: {
                id: student.id,
                isCorrectAnswer: isCorrectAnswer
            }
        };

        let url = this.getBaseUrl() + this.submit_answer_api;
        return this.post(url, params);
    }
}

