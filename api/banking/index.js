const axios = require('axios');
const config = require("../../config").config
const apiHelper = require("../helper").helper

const bankAxios = axios.create({
    baseURL: config.bankUrl,
    timeout: 1000,
})

const getAccounts = (auth, bankId) => {
    return bankAxios.get(`/banking/${bankId}/accounts`, { headers: apiHelper.createHeaders(auth) });
}

const getAccountsById = (auth, bankId, accountId) => {
    return bankAxios.get(`/banking/${bankId}/accounts/${accountId}`, { headers: apiHelper.createHeaders(auth) });
}

const getAccountTransactions = (auth, bankId, accountId) => {
    return bankAxios.get(`/banking/${bankId}/accounts/${accountId}/transactions`, { headers: apiHelper.createHeaders(auth) });
}

const getAccountBalances = (auth, bankId, accountId) => {
    return bankAxios.get(`/banking/${bankId}/accounts/${accountId}/balances`, { headers: apiHelper.createHeaders(auth) });
}

exports.banking = {
    getAccounts,
    getAccountsById,
    getAccountBalances,
    getAccountTransactions
}