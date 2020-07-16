const mongoose = require('mongoose')
    /*
module.exports = () => mongoose.connect()
    */

function connect() {
    return mongoose.connect(
        'mongodb+srv://karen:inmortal91@kluster-oct.uoi34.mongodb.net/kodemia', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
}
module.exports = connect