import OmcAbstract from "./OmcAbstract";

export default class OmcInformation extends OmcAbstract {
    static className = 'OmcInformation';

    submit_info_api = "/V1/student";

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
            id: student.id,
            isCorrectAnswer: isCorrectAnswer
        };

        if (isCorrectAnswer) student.barcode = '01314415';
        student.is_answer = true;
        return new Promise((resolve) => setTimeout(() => resolve(student), 200));

        let url = this.getBaseUrl() + this.submit_info_api;
        return this.post(url, params);
    }
}

