const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
      Title: {
            type: String,
            require: true
      },
      URL: {
            type: String,
            require: true
      }

})


module.exports = mongoose.model('News', newsSchema)




