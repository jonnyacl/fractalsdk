const axios = require('axios');
const config = require("../../config").config
const apiHelper = require("../helper").helper

const compAxios = axios.create({
    baseURL: config.companyUrl,
    timeout: 1000,
})

const getCompanies = (auth) => {
    return compAxios.get("/companies", { headers: apiHelper.createHeaders(auth) });
}

const getCompanyById = (auth, cId) => {
    return compAxios.get(`/companies/${cId}`, { headers: apiHelper.createHeaders(auth) });
}

const createCompany = (auth, company) => {
    return compAxios.post("/companies", company, { headers: apiHelper.createHeaders(auth) });
}

exports.company = {
    getCompanies,
    getCompanyById,
    createCompany
}