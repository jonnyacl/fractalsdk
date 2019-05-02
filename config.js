const version = "v1";

const bankUrl = `https://xb88dje32d.execute-api.eu-west-1.amazonaws.com/${version}`;
const acctUrl = `https://tv28sjxpq2.execute-api.eu-west-1.amazonaws.com/${version}`;
const companyUrl = `https://uqkio28nsj.execute-api.eu-west-1.amazonaws.com/${version}`;
const authUrl = `https://9opk7bt3ci.execute-api.eu-west-1.amazonaws.com/${version}`;

const appKey = "<REPLACE_KEY>";
const partner = "<REPLACE_PARTNER>";

exports.config = {
    version,
    bankUrl,
    acctUrl,
    companyUrl,
    authUrl,
    appKey,
    partner
};