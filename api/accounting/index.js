const axios = require('axios');
const config = require("../../config").config
const apiHelper = require("../helper").helper

const acctAxios = axios.create({
    baseURL: config.acctUrl,
    timeout: 1000,
})

const getAccounts = (auth, bankId) => {
    return acctAxios.get(`/banking/${bankId}/accounts`, { headers: apiHelper.createHeaders(auth) });
}

const getAccountsById = (auth, bankId, accountId) => {
    return acctAxios.get(`/banking/${bankId}/accounts/${accountId}`, { headers: apiHelper.createHeaders(auth) });
}

const getAccountTransactions = (auth, bankId, accountId) => {
    return acctAxios.get(`/banking/${bankId}/accounts/${accountId}/transactions`, { headers: apiHelper.createHeaders(auth) });
}

const getAccountBalances = (auth, bankId, accountId) => {
    return acctAxios.get(`/banking/${bankId}/accounts/${accountId}/balances`, { headers: apiHelper.createHeaders(auth) });
}

exports.accounting = {
    getAccounts,
    getAccountsById,
    getAccountBalances,
    getAccountTransactions
}