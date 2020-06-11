import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";
import InformationAction from "../../action/InformationAction";

export class Fail extends CoreComponent {
    static className = 'Fail';

    constructor(props) {
        super(props);
        if (!this.props.student || !this.props.student.is_answer) {
            this.props.history.replace('/');
        }
    }

    clearCache() {
        this.props.actions.clearCache();
        setTimeout(() => {this.props.history.replace('/');}, 500);
    }

    template() {
        if (!this.props.student) return null;
        return (
            <Fragment>
                <div className="container text-center">
                    <strong className="logo text-center">
                        <a href=""><img width={'204.8px'} height={'49.4px'} src={this.props.logoUrl} alt=""/></a>
                    </strong>
                    <h4>{this.props.student.name} - MSSV: {this.props.student.mssv}</h4>
                    <h4>Tiếc quá, sai rồi bạn ơi!</h4>
                    <img src="src/images/cry-icon-12.jpg" alt="" width="300px" height="300px"/>
                    <h4>Chúc bạn may mắn lần sau (nếu có)!</h4>
                    <br/>
                    <h4>Thời gian chơi: {this.props.student.time} giây</h4>
                    <br/>
                    <button type="button"
                            className="btn btn-default btn-warning button-submit"
                            onClick={() => this.clearCache()}>Xóa Cache (Để người khác chơi)
                    </button>
                </div>
            </Fragment>
        );
    }
}

export class FailContainer extends CoreContainer {
    static className = 'FailContainer';

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
                clearCache: () => dispatch(InformationAction.clearCache())
            }
        }
    }
}

/**
 * @type {Fail}
 */
export default ContainerFactory.get(FailContainer).withRouter(
    ComponentFactory.get(Fail)
)
