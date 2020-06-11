import QuestionConstant from "../constant/QuestionConstant";

export default {

    submitAnswer: (time, isCorrectAnswer = false) => {
        return {
            type: QuestionConstant.SUBMIT_ANSWER,
            time: time,
            isCorrectAnswer: isCorrectAnswer
        }
    }
}

