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

    connectBankAccount(authToken, bankId, cId, redirect) {
        let url = `/banking/${bankId}/auth`
        const body = { redirect, companyId: cId }
        return this.bankAxios.post(url, body, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }

    createConsent(authToken, bankId, code, idToken, state) {
        let url = `/banking/${bankId}/consents`
        const body = { code, id_token: idToken, state }
        return this.bankAxios.post(url, body, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }

    getConsents(authToken, bankId, cId) {
        let url = `/banking/${bankId}/consents`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }

    getConsent(authToken, consentId) {
        let url = `/banking/${bankId}/consents/${consentId}`
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }

    deleteConsent(authToken, consentId) {
        let url = `/banking/${bankId}/consents/${consentId}`
        return this.bankAxios.delete(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }

    getAccounts(authToken, bankId, cId) {
        let url = `/banking/${bankId}/accounts`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountsById(authToken, bankId, accountId, cId) {
        let url = `/banking/${bankId}/accounts/${accountId}`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountTransactions(authToken, bankId, accountId, cId) {
        let url = `/banking/${bankId}/accounts/${accountId}/transactions`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountBalances(authToken, bankId, accountId, cId) {
        let url = `/banking/${bankId}/accounts/${accountId}/balances`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.bankAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
}

const createBankApi = (apiKey, partner) => {
    return new BankApi(apiKey, partner)
}

exports.banking = {
    createBankApi
}