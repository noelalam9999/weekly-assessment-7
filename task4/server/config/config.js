require('dotenv').config();

const dev = {
    host: process.env.HOST,
    port: process.env.PORT,
    dbUrl: process.env.DB_URL
}

module.exports = dev;