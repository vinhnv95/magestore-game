import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";
import QuestionHelper from '../../../helper/QuestionHelper';
import QuestionConstant from '../../constant/QuestionConstant';
import QuestionAction from '../../action/QuestionAction';

export class Question extends CoreComponent {
    static className = 'Question';

    /**
     * constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        if (!props.student) {
            props.history.replace('/');
        }
        let level = props.student && props.student.level ? props.student.level : QuestionConstant.LEVEL_BEGINER;
        this.state = {
            question: QuestionHelper.getRandomQuestion(level),
            userAnswer: null
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.student && nextProps.student.is_answered) {
            let path = nextProps.student.gift_barcode ? '/success': '/fail';
            this.props.history.replace(path);
        }
    }

    submit() {
        if (!this.state.userAnswer) return;
        let isCorrectAnswer = this.state.userAnswer === this.state.question.correctAnswer;
        this.props.actions.submitAnswer(isCorrectAnswer);
    }

    changeAnswer(x) {
        this.setState({
            userAnswer: x
        })
    }

    template() {
        return (
            <Fragment>
                <div className="container">
                    <form className="wrapper-info" onSubmit={e => e.preventDefault()}>
                        <div className="form-info">
                            <div className="form-group">
                                <label>{this.state.question.question}</label>
                                <div>
                                    {
                                        this.state.question.answerType === QuestionConstant.ANSWER_TYPE_SELECT ?
                                            Object.keys(this.state.question.answers).map(key => {
                                                let value = this.state.question.answers[key]
                                                return (
                                                    <Fragment key={key}>
                                                        <input type="radio"
                                                               name="answer"
                                                               value={key}
                                                               checked={this.state.userAnswer === key}
                                                               onChange={() => this.changeAnswer(key)}
                                                        /> {value}<br/>
                                                    </Fragment>
                                                );
                                            })
                                            :
                                            <input type="text"
                                                   className="form-control"
                                                   onChange={(e) => this.changeAnswer(e.target.value)}
                                            />
                                    }
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button"
                                        className="btn btn-default btn-primary"
                                        ref="submitButton"
                                        onClick={() => this.submit()}>CHẮC CHẮN</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export class QuestionContainer extends CoreContainer {
    static className = 'QuestionContainer';

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
                submitAnswer: (isCorrectAnswer) => dispatch(QuestionAction.submitAnswer(isCorrectAnswer))
            }
        }
    }
}

/**
 * @type {Question}
 */
export default ContainerFactory.get(QuestionContainer).withRouter(
    ComponentFactory.get(Question)
)
