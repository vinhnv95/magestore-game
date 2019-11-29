import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";
import InformationAction from "../../action/InformationAction";

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
            student: {
                academicYear: "",
                dateOfBirth: "",
                department: "",
                email: "",
                level: "1",
                name: ""
            },
            isMissingData : false
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.student) {
            this.props.history.replace('/question');
        }
    }

    handleInputChange(event) {
        const student = this.state.student;
        const target = event.target;
        const value = target.value;
        const name = target.name;
        student[name] = value;

        this.setState({
            student: student
        });
    }

    validate(student) {
        let isMissingData = false;
        Object.keys(student).forEach(key => {
            if (!student[key]) {
                isMissingData = true;
            }
        });
        return !isMissingData;
    }

    submit() {
        if (this.validate(this.state.student)) {
            this.setState({isMissingData: false});
            this.props.actions.submitInfo(this.state.student);
        } else {
            this.setState({isMissingData: true});
        }
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
                        {
                            this.state.isMissingData ?
                                <div className="alert alert-danger">Xin hãy điền đủ tất cả thông tin</div>
                                : null
                        }
                        <div className="form-group group-username">
                            <label><span>Họ và tên</span></label>
                            <input id="name" name="name"
                                   type="text"
                                   className="form-control"
                                   placeholder='Họ và tên'
                                   ref="name"
                                   autoComplete="on"
                                   onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label><span>Email</span></label>
                            <input id="email"
                                   name="email"
                                   className="form-control"
                                   placeholder='Email'
                                   ref="email"
                                   autoComplete="on"
                                   onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label><span>Ngày tháng năm sinh</span></label>
                            <input id="dateOfBirth"
                                   name="dateOfBirth"
                                   className="form-control"
                                   placeholder='02/12/1998'
                                   ref="dateOfBirth"
                                   autoComplete="on"
                                   onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label><span>Bạn thuộc khóa</span></label>
                            <input id="academicYear"
                                   name="academicYear"
                                   className="form-control"
                                   placeholder='K61'
                                   ref="academicYear"
                                   autoComplete="on"
                                   onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label><span>Bạn ở khoa</span></label>
                            <input id="department"
                                   name="department"
                                   className="form-control"
                                   placeholder='Công nghệ thông tin'
                                   ref="department"
                                   autoComplete="on"
                                   onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Bạn muốn thử thách ở mức câu hỏi: <i>độ khủng của các món quà sẽ tăng dần theo các cấp câu hỏi</i></label>
                            <select id="level" name="level" className="form-control" onChange={(e) => this.handleInputChange(e)}>
                                <option value="1">Beginer</option>
                                <option value="2">Junior</option>
                                <option value="3">Expert</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="button"
                                    className="btn btn-default btn-primary"
                                    ref="submitButton"
                                    onClick={() => this.submit()}>Let's play</button>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export class InformationContainer extends CoreContainer {
    static className = 'InformationContainer';

    static mapState(state) {
        let {loading, student} = state.core.information;
        return {loading, student};
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
                submitInfo: (student) => dispatch(InformationAction.submitInfo(student))
            }
        }
    }
}

export default ContainerFactory.get(InformationContainer).withRouter(
    ComponentFactory.get(Information)
)
