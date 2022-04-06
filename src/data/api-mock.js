global.fetch = (url, options = { method: 'GET' }) => {
    if (options.method === 'GET') {
        switch (url) {
            case 'localhost/consents': {
                return Promise.resolve({ json: () => [{ id: 1, name: 'Recieve newsletter' }, { id: 2, name: 'Be shown targeted ads' }, { id: 3, name: 'Contribute to anonymous visit statistics' }] })
            }
            case 'localhost/user/consents': {
                return Promise.resolve({
                    json: () => [
                        { "name": "Daniel Tadros", "email": "daniel.wadea@pearson.com", consents: { "Recieve newsletter": false, "Be shown targeted ads": false, "Contribute to anonymous visit statistics": true }, "id": 1489 },
                        { "name": "Michael Tadros", "email": "david.gittins@pearson.com", consents: { "Recieve newsletter": false, "Be shown targeted ads": true, "Contribute to anonymous visit statistics": false }, "id": 5261 }
                    ]
                })
            }
            default: {
                return Promise.reject('invalid call')
            }
        }
    } else if (options.method === 'POST') {
        switch (url) {
            case 'localhost/user/consents': {
                const consent = JSON.parse(options.body)
                consent.id = Math.round(Math.random() * 10000)
                return Promise.resolve({ json: () => consent })
            }
            default: {
                return Promise.reject('invalid call')
            }
        }
    }

    return Promise.reject('invalid call')

}