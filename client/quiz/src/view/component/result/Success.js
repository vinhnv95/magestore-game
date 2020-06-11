import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";
import InformationAction from "../../action/InformationAction";

export class Success extends CoreComponent {
    static className = 'Success';

    constructor(props) {
        super(props);
        if (!this.props.student || !this.props.student.barcode) {
            this.props.history.replace('/');
        }
    }

    clearCache() {
        this.props.actions.clearCache();
        setTimeout(() => {this.props.history.replace('/');}, 500);
    }

    getPresent() {
        this.props.actions.getPresent(this.props.student.id);
    }

    template() {
        if (!this.props.student || !this.props.student.barcode) return null;
        return (
            <Fragment>
                <div className="container text-center">
                    <strong className="logo text-center">
                        <a href=""><img width={'204.8px'} height={'49.4px'} src={this.props.logoUrl} alt=""/></a>
                    </strong>
                    <h4>{this.props.student.name} - MSSV: {this.props.student.mssv}</h4>
                    <h4>Chúc mừng bạn, đúng rồi nè!</h4>
                    <img src="src/images/smiley-face.png" alt="" width="300px" height="300px"/>
                    <h4>Hãy đến quầy của Magestore, trải nghiệm dịch vụ self check-out và nhận quà nhé</h4>
                    <br/>
                    <h4>Thời gian chơi: {this.props.student.time} giây</h4>
                    <br/>
                    {
                        this.props.student.has_taken_the_gift ?
                            <h4>Bạn đã nhận quà rồi!</h4>
                            :
                            <button type="button"
                                    className="btn btn-default btn-warning button-submit"
                                    onClick={() => this.getPresent()}>
                                Xác nhận đã nhận quà
                            </button>
                    }
                    <br/>
                    <br/>
                    <button type="button"
                            className="btn btn-default btn-danger button-full-width"
                            onClick={() => this.clearCache()}>
                        Xóa Cache (Để người khác chơi)
                    </button>
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
            actions: {
                clearCache: () => dispatch(InformationAction.clearCache()),
                getPresent: (id) => dispatch(InformationAction.getPresent(id))
            }
        }
    }
}

/**
 * @type {Success}
 */
export default ContainerFactory.get(SuccessContainer).withRouter(
    ComponentFactory.get(Success)
)
