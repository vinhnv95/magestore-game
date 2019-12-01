import QuestionConstant from "../constant/QuestionConstant";

export default {

    submitAnswer: (isCorrectAnswer = false) => {
        return {
            type: QuestionConstant.SUBMIT_ANSWER,
            isCorrectAnswer: isCorrectAnswer
        }
    }
}

