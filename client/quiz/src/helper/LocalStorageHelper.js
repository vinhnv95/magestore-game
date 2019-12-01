export default {
    STUDENT: 'student',

    /**
     * get value from local storage
     * @param key
     * @return string
     */
    get(key) {
        return localStorage.getItem(key);
    },

    /**
     * set data to local storage
     * @param key
     * @param value
     */
    set(key, value) {
        return localStorage.setItem(key, value);
    },

    /**
     * remove data to local storage
     * @param key
     * @return void
     */
    remove(key) {
        return localStorage.removeItem(key);
    },

    setStudent(student) {
        return this.set(this.STUDENT, JSON.stringify(student));
    },

    getStudent() {
        let student = this.get(this.STUDENT);
        return student ? JSON.parse(student) : null;
    },

    removeStudent() {
        return this.remove(this.STUDENT);
    }
}
