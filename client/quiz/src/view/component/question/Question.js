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
        if (props.student && props.student.is_answer) {
            let path = props.student.barcode ? '/success' : '/fail';
            this.props.history.replace(path);
        }
        this.state = {
            questions: [],
            startTime: null
        };
        this.getRandomQuestion();
    }

    /**
     *
     * @returns {Promise<*>}
     */
    async getRandomQuestion() {
        let questions = [];
        let beginerData = await QuestionHelper.getRandomQuestion(QuestionConstant.LEVEL_BEGINER);
        let juniorData = await QuestionHelper.getRandomQuestion(QuestionConstant.LEVEL_JUNIOR);
        if (beginerData.length && juniorData.length) {
            let random1 = beginerData.sort(() => 0.5 - Math.random()).slice(0,3);
            let random2 = juniorData.sort(() => 0.5 - Math.random()).slice(0,2);
            questions = [...random1, ...random2];
        }
        this.setState({
            questions: questions,
            startTime: Date.now()
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.student && nextProps.student.is_answer) {
            let path = nextProps.student.barcode ? '/success' : '/fail';
            this.props.history.replace(path);
        }
    }

    hasEmptyAnswers() {
        for (let i = 0; i < this.state.questions.length; i++) {
            if (!this.state.questions[i].userAnswer) {
                return true;
            }
        }
        return false;
    }

    isCorrectAnswer() {
        let isCorrectAnswer = true;
        this.state.questions.forEach(question => {
            if (question.userAnswer.toString().toLocaleLowerCase() !== question.correctAnswer.toString().toLocaleLowerCase()) {
                isCorrectAnswer = false;
            }
        });
        return isCorrectAnswer;
    }

    submit() {
        if (this.hasEmptyAnswers()) return;
        let seconds = (Date.now() - this.state.startTime) / 1000;
        this.props.actions.submitAnswer(seconds, this.isCorrectAnswer());
    }

    changeAnswer(questionIndex, value) {
        let questions = this.state.questions;
        questions[questionIndex].userAnswer = value.toString().trim();
        this.setState({
            questions: questions
        })
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
                            {
                                this.state.questions.map((question, index) => {
                                    return (
                                        <div className="form-group" key={index}>
                                            <label>{question.question}</label>
                                            <div>
                                                {
                                                    question.answerType === QuestionConstant.ANSWER_TYPE_SELECT ?
                                                        Object.keys(question.answers).map(key => {
                                                            let value = question.answers[key];
                                                            return (
                                                                <Fragment key={index + '-' + key}>
                                                                    <input type="radio"
                                                                           name={"answer" + index + key}
                                                                           value={value}
                                                                           checked={question.userAnswer === value}
                                                                           onChange={() => this.changeAnswer(index, value)}
                                                                    /> {value}<br/>
                                                                </Fragment>
                                                            );
                                                        })
                                                        :
                                                        <input type="text"
                                                               className="form-control"
                                                               onChange={(e) => this.changeAnswer(index, e.target.value)}
                                                        />
                                                }
                                            </div>
                                            <br/>
                                        </div>
                                    )
                                })
                            }
                            <div className="form-group">
                                <button type="button"
                                        className="btn btn-default btn-warning button-submit"
                                        ref="submitButton"
                                        onClick={() => this.submit()}>CHẮC CHẮN
                                </button>
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
                submitAnswer: (time, isCorrectAnswer) => dispatch(QuestionAction.submitAnswer(time, isCorrectAnswer))
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
