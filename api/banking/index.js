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

    getAccounts(auth, bankId, cId) {
        let url = `/banking/${bankId}/accounts`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    getAccountsById(auth, bankId, accountId, cId) {
        let url = `/banking/${bankId}/accounts/${accountId}`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    getAccountTransactions(auth, bankId, accountId, cId) {
        let url = `/banking/${bankId}/accounts/${accountId}/transactions`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    getAccountBalances(auth, bankId, accountId, cId) {
        let url = `/banking/${bankId}/accounts/${accountId}/balances`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
}

const createBankApi = (apiKey, partner) => {
    return new BankApi(apiKey, partner)
}

exports.banking = {
    createBankApi
}