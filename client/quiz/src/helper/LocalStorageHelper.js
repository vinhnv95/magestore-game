export default {

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
    }
}
