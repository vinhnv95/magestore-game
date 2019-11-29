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
        return new Promise((resolve) => setTimeout(() => resolve(student), 1000));

        let url = this.getBaseUrl() + this.submit_info_api;
        return this.post(url, params);
    }
}

