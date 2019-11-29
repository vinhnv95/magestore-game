import { OmcInformation } from '../data/omc/index';
import Config from '../config/Config';
import DataResourceFactory from "../framework/factory/DataResourceFactory";
import {fire} from "../event-bus";
import ObjectManager from "../framework/ObjectManager";

let resources = {
    'OmcInformation': OmcInformation
};

export class Singleton{
    /**
     * constructor
     * @param props
     */
    constructor(props) {
        let eventDataBefore = {
            resources: resources
        };

        fire('constructor_singleton_before', eventDataBefore);
        resources = eventDataBefore.resources;
    }
    /**
    {
    return new (this.getObject(`Service * get  online resource by name
     * @param: string
     *
     * @return: object
     */
    getOnline(name) {
        return this.get(Config.platform, name);
    }

    /**
     * get  offline resource by name
     * @param: string
     *
     * @return: object
     */
    getOffline(name) {
        return this.get(Config.db, name);
    }

    /**
     * get object form name and prefix
     * @param: string
     * @param: string
     *
     * @return: object
     *
     */
    get(prefix, name) {
        return ObjectManager.get(DataResourceFactory.get(resources[prefix + name]));
    }
}

let singleton = new Singleton();

export default singleton;
