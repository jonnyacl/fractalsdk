const axios = require('axios');
const config = require("../../config").config
const apiHelper = require("../helper").helper

class AccountingApi {
    
    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.acctAxios = axios.create({
            baseURL: config.bankUrl,
            timeout: 1000,
        })
    }

    connectAccountingSoftware(authToken, source, cId, redirect) {
        let url = `/accounting/${source}/auth`
        const body = { redirect, companyId: cId }
        return this.acctAxios.post(url, body, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }

    getBills(authToken, source, cId) {
        let url = `/accounting/${source}/bills`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.acctAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getContacts(authToken, source, cId) {
        let url = `/accounting/${source}/contacts`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.acctAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getInvoiceLines(authToken, source, cId) {
        let url = `/accounting/${source}/invoicelines`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.acctAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getInvoices(authToken, source, cId) {
        let url = `/accounting/${source}/invoices`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.acctAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getTransactions(authToken, source, cId) {
        let url = `/accounting/${source}/transactions`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.acctAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getTransactionLines(authToken, source, cId) {
        let url = `/accounting/${source}/transactionlines`
        if (cId) {
            url = `${url}?companyId=${cId}`
        }
        return this.acctAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
}

const createAccountingApi = (apiKey, partner) => {
    return new AccountingApi(apiKey, partner)
}

exports.accounting = {
    createAccountingApi
}