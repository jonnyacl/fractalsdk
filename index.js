const bankApi = require("./api/banking").banking

const createBankApi = (apiKey, partner) => {
    return bankApi.createBankApi(apiKey, partner)
}

exports.api = {
    createBankApi
}