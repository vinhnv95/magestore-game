import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";
import Barcode from "react-barcode";

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
                <div className="container text-center">
                    <strong className="logo text-center">
                        <a href=""><img width={'204.8px'} height={'49.4px'} src={this.props.logoUrl} alt=""/></a>
                    </strong>
                    <h2>{this.props.student.name} - Email: {this.props.student.email}</h2>
                    <h2>Chúc mừng bạn, đúng rồi nè!</h2>
                    <Barcode value={this.props.student.gift_barcode} />
                    <h2>Hãy mang barcode này đến quầy của Magestore, trải nghiệm dịch vụ self check-out và nhận quà nhé</h2>
                </div>
            </Fragment>
        );
    }
}

export class SuccessContainer extends CoreContainer {
    static className = 'SuccessContainer';

    static mapState(state) {
        let {loading, student, logoUrl} = state.core.information;
        return {loading, student, logoUrl};
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
