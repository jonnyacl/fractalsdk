const axios = require('axios');
const config = require("../../config").config

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': config.appKey,
    'x-partner-id': config.partner
}
const authAxios = axios.create({
    baseURL: config.authUrl,
    timeout: 1000,
    headers: defaultHeaders
})

const getToken = () => {
    return authAxios.post('/token');
}

exports.auth = {
    getToken
}