import QuestionConstant from "../view/constant/QuestionConstant";
export default {

    async getRandomQuestion(level = QuestionConstant.LEVEL_BEGINER) {
        let key = 'AIzaSyDgXPBm3Kx5ucvem6WtDcYypNJtdt88a0M';
        let response = await fetch(
            'https://sheets.googleapis.com/v4/spreadsheets/1XAlXiB1V7hQgtIIJnD-dlNw9kkehuDO7ObovFdCDzZU/values/' + level + '!A1:H500?key=' + key,
            {});
        if (response.ok) {
            let data = await response.json();
            let questionList = [];
            for (let i = 1; i < data.values.length; i++) {
                let answerType = "";
                if (typeof data.values[i][1] !== 'undefined') {
                    answerType = data.values[i][1];
                }
                let choice = {};
                let choiceIndex = 1;
                let correctAnswer = data.values[i][3].toString().trim();
                for (let index = 4; index < data.values[i].length; index++) {
                    choice[choiceIndex] = data.values[i][index].toString().trim();
                    choiceIndex++;
                }
                if (answerType === "select") {
                    questionList.push({
                        "question": data.values[i][2],
                        "answerType": answerType,
                        "answers": choice,
                        "correctAnswer": correctAnswer,
                    });
                } else if (answerType === "text") {
                    questionList.push({
                        "question": data.values[i][2],
                        "answerType": answerType,
                        "answers": null,
                        "correctAnswer": correctAnswer
                    });
                }
            }
            return questionList;
        }
        return [];
    }
}
