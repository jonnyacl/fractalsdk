const version = "v1";

const bankUrl = `https://r7p2rhg4ji.execute-api.eu-west-1.amazonaws.com/${version}`;
const acctUrl = `https://13onkb74v6.execute-api.eu-west-1.amazonaws.com/${version}`;
const companyUrl = `https://9i54hif0ii.execute-api.eu-west-1.amazonaws.com/${version}`;
const authUrl = `https://7gq3bccyoa.execute-api.eu-west-1.amazonaws.com/${version}`;

exports.config = {
    version,
    bankUrl,
    acctUrl,
    companyUrl,
    authUrl
};
