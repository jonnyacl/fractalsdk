const axios = require('axios');
const config = require("../../config").config
const apiHelper = require("../helper").helper

class BankApi {

    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.bankAxios = axios.create({
            baseURL: config.bankUrl,
            timeout: 1000,
        })
    }

    getAccounts(auth, bankId) {
        return this.bankAxios.get(`/banking/${bankId}/accounts`, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    getAccountsById(auth, bankId, accountId) {
        return this.bankAxios.get(`/banking/${bankId}/accounts/${accountId}`, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    getAccountTransactions(auth, bankId, accountId) {
        return this.bankAxios.get(`/banking/${bankId}/accounts/${accountId}/transactions`, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    getAccountBalances(auth, bankId, accountId) {
        return this.bankAxios.get(`/banking/${bankId}/accounts/${accountId}/balances`, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
}

const createBankApi = (apiKey, partner) => {
    return new BankApi(apiKey, partner)
}

exports.banking = {
    createBankApi
}