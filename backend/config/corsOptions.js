const whitelist = [
    'https://www.nenyosorchids.com',
    'http://192.168.1.184:3000',
    'http://192.168.1.184:3500',
    'http://localhost:3500',
    'http://localhost:3000'
]
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions