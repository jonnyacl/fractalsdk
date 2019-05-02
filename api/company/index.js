const axios = require('axios');
const config = require("../../config").config
const apiHelper = require("../helper").helper

class CompanyApi {
    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.compAxios = axios.create({
            baseURL: config.companyUrl,
            timeout: 1000,
        })
    }

    getCompanies(auth) {
        return this.compAxios.get("/companies", { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    getCompanyById = (auth, cId) => {
        return this.compAxios.get(`/companies/${cId}`, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
    
    createCompany(auth, company) {
        return this.compAxios.post("/companies", company, { headers: apiHelper.createHeaders(auth, this.apiKey, this.partner) });
    }
}

const createCompanyApi = (apiKey, partner) => {
    return new CompanyApi(apiKey, partner)
}

exports.company = {
    createCompanyApi
}