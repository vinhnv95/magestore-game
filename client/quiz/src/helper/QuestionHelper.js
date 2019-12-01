import QuestionConstant from "../view/constant/QuestionConstant";
import Config from "../config/Config";

export default {

    getRandomQuestion(level = QuestionConstant.LEVEL_BEGINER) {
        let index = Math.floor(Math.random() * Config.questions[level].length);
        return Config.questions[level][index];
    }
}
