const bankApi = require("./api/banking").banking
const acctApi = require("./api/accounting").accounting
const compApi = require("./api/company").company
const authApi =require("./api/auth").auth

const createBankApi = (apiKey, partner) => {
    return bankApi.createBankApi(apiKey, partner)
}

const createAuthApi = (apiKey, partner) => {
    return authApi.createAuthApi(apiKey, partner)
}

const createCompanyApi = (apiKey, partner) => {
    return authApi.createAuthApi(apiKey, partner)
}

const createAccountingApi = (apiKey, partner) => {
    return acctApi.createAccountingApi(apiKey, partner)
}

const createCompanyApi = (apiKey, partner) => {
    return compApi.createCompanyApi(apiKey, partner)
}

exports.api = {
    createBankApi,
    createAuthApi,
    createAccountingApi,
    createCompanyApi
}