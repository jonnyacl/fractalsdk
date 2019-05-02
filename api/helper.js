const createHeaders = (auth, key, partner) => {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': key,
        'x-partner-id': partner,
        'Authorization': `Bearer ${auth}`
    }
}

exports.helper = { createHeaders }