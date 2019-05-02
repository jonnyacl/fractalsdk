const config = require("../config").config

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': config.appKey,
    'x-partner-id': config.partner
}

const createHeaders = (auth) => {
    defaultHeaders['Authorization'] = `Bearer ${auth}`
    return defaultHeaders;
}

exports.helper = { createHeaders }