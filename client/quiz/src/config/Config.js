/**
 * Init GLOBAL_VARIABLES to store pos config
 */
if (typeof window.quiz === 'undefined') {
    window.quiz = {config: {}};
}
const GLOBAL_VARIABLES = window.quiz.config;

export default GLOBAL_VARIABLES;
