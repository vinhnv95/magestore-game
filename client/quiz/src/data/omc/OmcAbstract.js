import deepmerge from "../../framework/Merge";
import Config from "../../config/Config"

export default class OmcAbstract {
    store_code = "";
    store_url = "rest/" + this.store_code;

    /**
     * get base url
     * @returns {string}
     */
    getBaseUrl() {
        if (process.env.NODE_ENV !== 'production') {
            return process.env.REACT_APP_POS_URL;
        }
        return this.getUrlFromBrowser();
    }


    /**
     * get url from browser link
     */
    getUrlFromBrowser() {
        let url = window.location.href;
        url = url.split(Config.basename)[0];
        return url;
    }

    /**
     * handle get request
     * @param url
     * @param opts
     * @param resolve
     * @param reject
     */
    handleGetRequest(url, opts = {}, resolve, reject) {
        let self = this;
        fetch(url,
            deepmerge.all([
                {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors'
                },
                opts
            ])
        ).then(response => response.json()
            .then(function(data) {
                data = self.prepareResponse(data);
                if (response.ok) {
                    return resolve(data);
                } else {
                    return reject(data);
                }
            })
        ).catch(function(error) {
            return reject(error.message);
        });
    }

    /**
     *
     * get request
     *
     * @param url string
     * @param opts mixed
     *
     * @return {Promise<any>}
     *
     * */
    get(url, opts = {}) {
        let self = this;
        return new Promise((resolve, reject) => {
            self.handleGetRequest(url, opts, resolve, reject);
        });
    }

    /**
     * pos request
     *
     * @param url
     * @param params
     *
     * @returns {Promise<any>}
     */
    post(url, params) {
        let self = this;
        return new Promise((resolve, reject) => {
            fetch(url,
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    body: JSON.stringify(params)
                })
                .then(response => response.json()
                    .then(function(data) {
                        data = self.prepareResponse(data);
                        if (response.ok) {
                            return resolve(data);
                        } else {
                            self.checkForceSignOut(data, response.status);
                            return reject(data);
                        }
                    })
                ).catch(error => reject(''))
        })
    }

    /**
     * put request
     * @param url
     * @param params
     * @returns {Promise}
     */
    put(url, params) {
        let self = this;
        return new Promise((resolve, reject) => {
            fetch(url,
                {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    body: JSON.stringify(params)
                })
                .then(response => response.json()
                    .then(function(data) {
                        if (response.ok) {
                            return resolve(data);
                        } else {
                            return reject(data);
                        }
                    })
                ).catch(error => reject(''))
        })
    }

    /**
     * delete request
     * @param url
     * @param params
     * @returns {Promise}
     */
    delete(url, params) {
        let self = this;
        return new Promise((resolve, reject) => {
            fetch(url,
                {
                    method: "DELETE",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    body: JSON.stringify(params)
                })
                .then(response => response.json()
                    .then(function(data) {
                        if (response.ok) {
                            return resolve(data);
                        } else {
                            return reject(data);
                        }
                    })
                ).catch(error => reject(''))
        })
    }

    /**
     * Get order params array
     *
     * @param index
     * @param order
     */
    getOrderParamArray(index, order) {
        return [
            'searchCriteria[sortOrders][' + index + '][field]=' + order.field,
            'searchCriteria[sortOrders][' + index + '][direction]=' + order.direction
        ];
    }

    /**
     * Get search creria filter param array from filter object
     *
     * @param {number} filterGroup
     * @param {number} filtersIndex
     * @param {object} filter
     */
    getFilterParamArray(filterGroup, filtersIndex, filter) {
        return [
            'searchCriteria[filter_groups][' + filterGroup + '][filters][' + filtersIndex + '][field]=' + filter.field,
            'searchCriteria[filter_groups][' + filterGroup + '][filters][' + filtersIndex + '][value]=' +
            (filter.condition === 'like' ? '%' + filter.value + '%' : filter.value),
            'searchCriteria[filter_groups][' + filterGroup + '][filters][' + filtersIndex + '][condition_type]='
            + filter.condition
        ];
    }

    /**
     * Get query param for get list api
     *
     * @param queryService
     */
    getQueryParams(query = {}) {
        let queryParams = [],
            filterGroup = 0;
        if (query.orderParams.length > 0) {
            query.orderParams.map((item, index) => queryParams.push(...this.getOrderParamArray(index, item)))
        }
        if (query.queryString !== null) {
            queryParams.push('searchCriteria[queryString]=' + query.queryString);
        }

        if (query.filterParams.length > 0) {
            query.filterParams.map((item, index) => {
                queryParams.push(...this.getFilterParamArray(filterGroup, index, item));
                filterGroup++;
                return queryParams;
            });
        }
        if (query.orFilterParams.length > 0) {
            query.orFilterParams.map((orFilter) => {
                orFilter.map((item, index) =>
                    queryParams.push(...this.getFilterParamArray(filterGroup, index, item)));
                filterGroup++;
                return queryParams;
            });
        }

        if (query.pageSize) {
            queryParams.push(...[
                'searchCriteria[pageSize]=' + query.pageSize,
                'searchCriteria[currentPage]=' + query.currentPage
            ]);
        }
        if (query.params.length > 0) {
            query.params.map(param => queryParams.push(param.key + '=' + param.value));
        }
        return queryParams;
    }

    /**
     * Prepare reponse - multi platform
     *
     * @param data
     */
    prepareResponse(data) {
        return data;
    }

    /**
     * Add params to url
     *
     * @param {string} url
     * @param {object} params
     * @return {string}
     */
    addParamsToUrl(url, params){
        if(params && (typeof params === 'object')){
            for (let key in params) {
                let value = params[key];
                if (url.indexOf("?") !== -1) {
                    url = url + '&'+key+'=' + value;
                }
                else {
                    url = url + '?'+key+'=' + value;
                }
            }
        }
        return url;
    }

}

