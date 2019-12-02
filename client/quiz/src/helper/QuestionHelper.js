import QuestionConstant from "../view/constant/QuestionConstant";
import Config from "../config/Config";

export default {

    async getRandomQuestion(level = QuestionConstant.LEVEL_BEGINER) {
        let key = 'AIzaSyDgXPBm3Kx5ucvem6WtDcYypNJtdt88a0M';
        return await fetch('https://sheets.googleapis.com/v4/spreadsheets/1XAlXiB1V7hQgtIIJnD-dlNw9kkehuDO7ObovFdCDzZU/values/' + level + '!A1:H500?key=' + key,
            {});
    }
}
