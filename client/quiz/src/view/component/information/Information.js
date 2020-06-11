import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";
import InformationAction from "../../action/InformationAction";
import QuestionConstant from '../../constant/QuestionConstant';

export class Information extends CoreComponent {
    static className = 'Information';
    // eslint-disable-next-line
    regexEmail= /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    /**
     * constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        if (props.student) {
            this.props.history.replace('/question');
        }
        this.state = {
            student: {
                name: "",
                email: "",
                phone: "",
                birthday: "",
                grade: "",
                faculty: "",
                gpa: "",
                programing_language: "",
                level: QuestionConstant.LEVEL_BEGINER
            },
            isMissingData: false,
            isWrongEmail: false
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

    validateEmail(email) {
        return email.length && this.regexEmail.test(email);
    }

    submit() {
        if (this.validate(this.state.student) && this.validateEmail(this.state.student.email)) {
            this.setState({isMissingData: false, isWrongEmail: false});
            this.props.actions.submitInfo(this.state.student);
        } else {
            if (!this.validate(this.state.student)) {
                this.setState({isMissingData: true});
            }
            if (!this.validateEmail(this.state.student.email)) {
                this.setState({isWrongEmail: true});
            }
        }
    }

    template() {
        return (
            <Fragment>
                <div className="container">
                    <form className="wrapper-info" onSubmit={e => e.preventDefault()}>
                        <div className="form-info">
                            <div className="form-info text-center">
                                <strong className="logo text-center">
                                    <a href=""><img width={'204.8px'} height={'49.4px'} src={this.props.logoUrl} alt=""/></a>
                                </strong>
                            </div>
                            <h3 className="page-title text-center">CHƠI GAME LIỀN TAY, RINH NGAY QUÀ KHỦNG</h3>
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
                                <label><span>Số điện thoại</span></label>
                                <input id="phone"
                                       name="phone"
                                       className="form-control"
                                       placeholder="0123456789"
                                       ref="phone"
                                       autoComplete="on"
                                       onChange={(e) => this.handleInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label><span>Ngày tháng năm sinh</span></label>
                                <input id="birthday"
                                       name="birthday"
                                       className="form-control"
                                       placeholder='02/12/1998'
                                       ref="birthday"
                                       autoComplete="on"
                                       onChange={(e) => this.handleInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label><span>Bạn thuộc khóa</span></label>
                                <input id="grade"
                                       name="grade"
                                       className="form-control"
                                       placeholder='K61'
                                       ref="grade"
                                       autoComplete="on"
                                       onChange={(e) => this.handleInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label><span>Bạn ở khoa</span></label>
                                <input id="faculty"
                                       name="faculty"
                                       className="form-control"
                                       placeholder='Công nghệ thông tin'
                                       ref="faculty"
                                       autoComplete="on"
                                       onChange={(e) => this.handleInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label><span>GPA ở kì gần nhất của bạn</span></label>
                                <input id="gpa"
                                       name="gpa"
                                       className="form-control"
                                       placeholder="4.0"
                                       ref="gpa"
                                       autoComplete="on"
                                       onChange={(e) => this.handleInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label><span>Bạn biết các ngôn ngữ lập trình web nào</span></label>
                                <input id="programing_language"
                                       name="programing_language"
                                       className="form-control"
                                       placeholder="PHP, ReactJS..."
                                       ref="programing_language"
                                       autoComplete="on"
                                       onChange={(e) => this.handleInputChange(e)}
                                />
                            </div>
                            <div className="form-group text-center">
                                <button type="button"
                                        className="btn btn-default btn-warning button-submit"
                                        ref="submitButton"
                                        onClick={() => this.submit()}>Let's play</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export class InformationContainer extends CoreContainer {
    static className = 'InformationContainer';

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
                submitInfo: (student) => dispatch(InformationAction.submitInfo(student))
            }
        }
    }
}

export default ContainerFactory.get(InformationContainer).withRouter(
    ComponentFactory.get(Information)
)
