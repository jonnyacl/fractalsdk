const bankApi = require("./api/banking").banking
const authApi =require("./api/auth").auth

const createBankApi = (apiKey, partner) => {
    return bankApi.createBankApi(apiKey, partner)
}

const createAuthApi = (apiKey, partner) => {
    return authApi.createAuthApi(apiKey, partner)
}

exports.api = {
    createBankApi,
    createAuthApi
}