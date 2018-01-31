if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://cal:thebestdatabaselol@ds121268.mlab.com:21268/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}