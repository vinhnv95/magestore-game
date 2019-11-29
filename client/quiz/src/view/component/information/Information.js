import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";

export class Information extends CoreComponent {
    static className = 'Information';

    /**
     * constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    template() {
        return (
            <Fragment>
                <form className="wrapper-info" onSubmit={e => e.preventDefault()}>
                    <div className="form-info">
                        <strong className="logo">
                            <a href=""><img src={this.state.logoUrl} alt=""/></a>
                        </strong>
                        <h2 className="page-title">CHƠI GAME LIỀN TAY, RINH NGAY QUÀ KHỦNG</h2>
                        <div className="form-group group-username">
                            <label><span>Họ và tên</span></label>
                            <input id="username" name="username" type="text"
                                   className="form-control" placeholder='Họ và tên'
                                   ref="username"
                                   autoCapitalize="none"
                            />
                        </div>
                        <div className="form-group">
                            <label><span>Email</span></label>
                            <input id="email" name="email"
                                   className="form-control" placeholder='Email'
                                   ref="email"
                                   autoComplete="on"
                            />
                        </div>
                        <button type="button"
                                className="btn btn-default btn-primary"
                                ref="loginButton">Let's play</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export class InformationContainer extends CoreContainer {
    static className = 'InformationContainer';

    static mapState(state) {
        return {};
    }

    /**
     * Map actions
     *
     * @param dispatch
     * @returns {{}}
     */
    static mapDispatch(dispatch) {
        return {
        }
    }
}

export default ContainerFactory.get(InformationContainer).withRouter(
    ComponentFactory.get(Information)
)
