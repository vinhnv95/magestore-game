import CoreService from "../CoreService";
import ServiceFactory from "../../framework/factory/ServiceFactory";
import InformationResourceModel from "../../resource-model/information/InformationResourceModel";

/**
 * export UserService
 * @type {{prepareLogin: prepareLogin, login: login, handleAssignPos: assignPos}}
 */
export class InformationService extends CoreService{
    static className = 'InformationService';
    resourceModel = InformationResourceModel;

    /**
     * student
     * @param student
     * @returns {*|{student: *, type: string}|Promise<any>}
     */
    submitInfo(student) {
        return this.getResourceModel().submitInfo(student);
    }

    submitAnswer(student, isCorrectAnswer, time) {
        return this.getResourceModel().submitAnswer(student, isCorrectAnswer, time);
    }

    getPresent(id) {
        return this.getResourceModel().getPresent(id);
    }
}


/**
 * @type {InformationService}
 */
const informationService = ServiceFactory.get(InformationService);

export default informationService;
