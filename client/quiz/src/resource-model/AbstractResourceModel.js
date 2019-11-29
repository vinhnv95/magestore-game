import {Component} from 'react';
import Singleton from "./Singleton"

export default class AbstractResourceModel extends Component{
    /**
     * constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            resourceName : '',
            dataType: ''
        }
    }

    /**
     * get resource depend on mode
     *
     * @return: object
     */
    getResource() {
        return Singleton.getOnline(this.state.resourceName);
    }

    /**
     * get online resource
     *
     * @return: object
     */
    getResourceOnline() {
        return Singleton.getOnline(this.state.resourceName);
    }

    /**
     * get offline resource
     *
     * @return: object
     */
    getResourceOffline() {
        return Singleton.getOffline(this.state.resourceName);
    }
}

