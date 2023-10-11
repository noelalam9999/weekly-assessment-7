const mongoose = require('mongoose');
const { dbUrl } = require('./config');

mongoose.connect(dbUrl)
.then(()=>{console.log('mongoDb is conected')})
.catch(err=>{
    console.log(err)
    process.exit(1)
})