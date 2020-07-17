const mongoose = require('mongoose')
    /*
module.exports = () => mongoose.connect()
    */

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

function connect() {
    return mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}
module.exports = connect