const config = require("./config").config

const express = require('express');

const app = express();
const authApi = require("./api/auth").auth
const bankApi = require("./api/banking").banking
const aApi = authApi.createAuthApi("REPLACE", "faekpartner");
const bApi = bankApi.createBankApi("REPLACE", "faekpartner");

app.get('/token', (req, res) => {
    authApi.getToken().then(resp => {
        console.log(resp.data)
        res.send(resp.data)
    }).catch(err => {
        console.log(err)
        res.status(200)
        res.send(err.response.data)
    })
});

app.get('/banking/accounts', (req, res) => {
    aApi.getToken().then(resp => {
        bApi.getAccounts(resp.data.access_token, 7).then(bankResp => {
            console.log(bankResp.data)
            res.send(bankResp.data)
        }).catch(err => {
            console.log(err.response.data)
            res.status(200)
            res.send(err.response.data)
        })
    }).catch(err => {
        console.log(err.response.data)
        res.status(200)
        res.send(err.response.data)
    })
    
});

app.get('/banking/:bankId/accounts/:accountId', (req, res) => {
    res.send('Hello World!')
});

app.get('/banking/:bankId/accounts/:accountId/balances', (req, res) => {
    res.send('Hello World!')
});

app.get('/banking/:bankId/accounts/:accountId/transactions', (req, res) => {
    res.send('Hello World!')
});

app.get('/accounting/{source}/transactions', (req, res) => {
    res.send('Hello World!')
});

app.get('/accounting/{source}/bills', (req, res) => {
    res.send('Hello World!')
});

app.get('/accounting/{source}/contacts', (req, res) => {
    res.send('Hello World!')
});

app.get('/accounting/{source}/transactionlines', (req, res) => {
    res.send('Hello World!')
});

app.get('/accounting/{source}/invoices', (req, res) => {
    res.send('Hello World!')
});

app.get('/accounting/{source}/invoicelines', (req, res) => {
    res.send('Hello World!')
});

app.listen(8000, () => {
    console.log(config)
    console.log("Fractal SB server running...");
});