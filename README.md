# fractalsdk

Node JS SDK for using the Fractal APIs

## Getting started

To install:

```
npm install --save jonnyacl/fractalsdk
```

To then use in your project:

```
const fractal = require('fractalsdk')
const bankApi = fractal.api.createBankApi("REPLACE_WITH_APP_KEY", "REPLACE_WITH_PARTNER_ID");
```

Requests using the api objects return promises, so to fetch data, something along the lines of...

```
bankApi.getAccounts(access_token, 7).then(bankResp => {
    const respData = bankResp.data;
}).catch(err => {
    console.log(err)
});
```
Where ```access_token``` is a token returned by the Auth api /token endpoint

To see the Fractal API docs and create an app, please go to https://developer.fractal-labs.com/
