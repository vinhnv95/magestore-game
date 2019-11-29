import React, {Fragment} from 'react';
import ComponentFactory from "../../../framework/factory/ComponentFactory";
import CoreContainer from "../../../framework/container/CoreContainer";
import ContainerFactory from "../../../framework/factory/ContainerFactory";
import {CoreComponent} from "../../../framework/component";

export class Question extends CoreComponent {
    static className = 'Question';

    /**
     * constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            question: {
                question: 'advadvd',
                answers: {
                    '1': 'dvv',
                    '2': 'dvdv',
                    '3': 'dabvbk'
                },
                correctAnswer: '1'
            },
            userAnswer: null
        };
    }

    submit() {
        console.log(this.state.userAnswer)
    }

    selectAnswer(x) {
        this.setState({
            userAnswer: x
        })
    }

    template() {
        return (
            <Fragment>
                <form className="wrapper-info" onSubmit={e => e.preventDefault()}>
                    <div className="form-info">
                        <div className="form-group">
                            <label>{this.state.question.question}</label>
                            <div>
                                {
                                    Object.keys(this.state.question.answers).map(key => {
                                        let value = this.state.question.answers[key]
                                        return (
                                            <Fragment key={key}>
                                                <input type="radio"
                                                       name="answer"
                                                       value={key}
                                                       checked={this.state.userAnswer === key}
                                                       onChange={() => this.selectAnswer(key)}
                                                /> {value}<br/>
                                            </Fragment>
                                        );
                                    })
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
            </Fragment>
        );
    }
}

export class QuestionContainer extends CoreContainer {
    static className = 'QuestionContainer';

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
            actions: {

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
