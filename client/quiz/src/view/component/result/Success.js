import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";

export class Success extends CoreComponent {
    static className = 'Success';

    constructor(props) {
        super(props);
        if (!this.props.student || !this.props.student.gift_barcode) {
            this.props.history.replace('/');
        }
    }

    template() {
        if (!this.props.student || !this.props.student.gift_barcode) return null;
        return (
            <Fragment>
                <h1>Success</h1>
                <p>{this.props.student.gift_barcode}</p>
            </Fragment>
        );
    }
}

export class SuccessContainer extends CoreContainer {
    static className = 'SuccessContainer';

    static mapState(state) {
        let {student} = state.core.information;
        return {student};
    }

    /**
     * Map actions
     *
     * @param dispatch
     * @returns {{}}
     */
    static mapDispatch(dispatch) {
        return {
            actions: {}
        }
    }
}

/**
 * @type {Success}
 */
export default ContainerFactory.get(SuccessContainer).withRouter(
    ComponentFactory.get(Success)
)
