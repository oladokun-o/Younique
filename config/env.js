const config = {
    production: {
        PORT: process.env.PORT,
        SERVER_DATABASE: process.env.MONGODB_URI,
        CLIENT_DATABASE: process.env.SQL_URI_DEV
    },
    development: {
        PORT: process.env.PORT,
        SERVER_DATABASE: process.env.MONGODB_URI_DEV,
        CLIENT_DATABASE: process.env.SQL_URI_DEV
    }
}


exports.get = function get(env) {
    return config[env] || config.development
}
