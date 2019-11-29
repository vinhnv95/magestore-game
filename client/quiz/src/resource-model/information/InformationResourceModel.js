import AbstractResourceModel from "../AbstractResourceModel";

export default class InformationResourceModel extends AbstractResourceModel {
    static className = 'InformationResourceModel';
    /**
     * constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {resourceName : 'Information'};
    }

    /**
     *
     * @param student
     * @returns {*|{student: *, type: string}|Promise<any>}
     */
    submitInfo(student) {
        return this.getResourceOnline().submitInfo(student);
    }
}

