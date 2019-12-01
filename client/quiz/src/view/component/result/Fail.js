import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";

export class Fail extends CoreComponent {
    static className = 'Fail';

    constructor(props) {
        super(props);
        if (!this.props.student || !this.props.student.is_answered) {
            this.props.history.replace('/');
        }
    }

    template() {
        return (
            <Fragment>
                <h1>Fail</h1>
            </Fragment>
        );
    }
}

export class FailContainer extends CoreContainer {
    static className = 'FailContainer';

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
 * @type {Fail}
 */
export default ContainerFactory.get(FailContainer).withRouter(
    ComponentFactory.get(Fail)
)
