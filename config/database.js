if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://cal:cal@ds121248.mlab.com:21248/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}