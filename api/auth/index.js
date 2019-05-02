const axios = require('axios');
const config = require("../../config").config

class AuthApi {

    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.defaultHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'x-partner-id': partner
        }
        this.authAxios = axios.create({
            baseURL: config.authUrl,
            timeout: 1000,
            headers: this.defaultHeaders
        })
    }

    getToken() {
        console.log(this.defaultHeaders)
        return this.authAxios.post('/token');
    }
}

const createAuthApi = (apiKey, partner) => {
    return new AuthApi(apiKey, partner)
}

exports.auth = {
    createAuthApi
}