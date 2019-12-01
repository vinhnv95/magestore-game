import OmcAbstract from "./OmcAbstract";

export default class OmcUser extends OmcAbstract {
    static className = 'OmcUser';

    submit_info_api = "";

    /**
     *
     * @param student
     * @returns {Promise<any>}
     */
    submitInfo(student) {
        let params = {
            student: student
        };

        student.id = 1;
        return new Promise((resolve) => setTimeout(() => resolve({student}), 1000));

        let url = this.getBaseUrl() + this.submit_info_api;
        return this.post(url, params);
    }

    submitAnswer(student, isCorrectAnswer) {
        let params = {
            id: student.id,
            isCorrectAnswer: isCorrectAnswer
        };

        if (isCorrectAnswer) student.gift_barcode = '01314415';
        student.is_answered = true;
        return new Promise((resolve) => setTimeout(() => resolve({student}), 200));

        let url = this.getBaseUrl() + this.submit_info_api;
        return this.post(url, params);
    }
}

