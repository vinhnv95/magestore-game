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
        let level = props.student && props.student.level ? props.student.level : QuestionConstant.LEVEL_BEGINER;
        this.state = {
            question: {
                "question": null,
                "answerType": "select",
                "answers": {},
                "correctAnswer": null
            },
            userAnswer: null
        };
        this.getRandomQuestion(level);
    }

    /**
     *
     * @param level
     * @returns {Promise<*>}
     */
    async getRandomQuestion(level) {
        let response = await QuestionHelper.getRandomQuestion(level);
        let self = this;
        if (response.ok) {
            response.json().then(async function (data) {
                let questionList = [];
                for (let i = 1; i < data.values.length; i++) {
                    let answerType = "";
                    if (typeof data.values[i][1] !== 'undefined') {
                        answerType = data.values[i][1];
                    }
                    let choice = {};
                    let choiceIndex = 1;
                    let correctAnswer = data.values[i][3];
                    for (let index = 4; index < data.values[i].length; index++) {
                        choice[choiceIndex] = data.values[i][index];
                        choiceIndex++;
                    }
                    if (answerType === "select") {
                        questionList.push({
                            "question": data.values[i][2],
                            "answerType": answerType,
                            "answers": choice,
                            "correctAnswer": correctAnswer
                        });
                    } else if (answerType === "text") {
                        questionList.push({
                            "question": data.values[i][2],
                            "answerType": answerType,
                            "answers": null,
                            "correctAnswer": correctAnswer
                        });
                    }
                    let index = Math.floor(Math.random() * questionList.length);
                    self.setState({
                        question: questionList[index],
                        userAnswer: null
                    });
                }
            });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.student && nextProps.student.is_answer) {
            let path = nextProps.student.barcode ? '/success' : '/fail';
            this.props.history.replace(path);
        }
    }

    submit() {
        if (!this.state.userAnswer) return;
        let isCorrectAnswer = this.state.userAnswer.toString().toLocaleLowerCase() === this.state.question.correctAnswer.toString().toLocaleLowerCase();
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
                            <div className="form-info text-center">
                                <strong className="logo text-center">
                                    <a href=""><img width={'204.8px'} height={'49.4px'} src={this.props.logoUrl} alt=""/></a>
                                </strong>
                            </div>
                            <div className="form-group">
                                <label>{this.state.question.question}</label>
                                <div>
                                    {
                                        this.state.question.answerType === QuestionConstant.ANSWER_TYPE_SELECT ?
                                            Object.keys(this.state.question.answers).map(key => {
                                                let value = this.state.question.answers[key];
                                                return (
                                                    <Fragment key={key}>
                                                        <input type="radio"
                                                               name="answer"
                                                               value={value}
                                                               checked={this.state.userAnswer === value}
                                                               onChange={() => this.changeAnswer(value)}
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
