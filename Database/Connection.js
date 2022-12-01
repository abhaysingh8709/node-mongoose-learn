const mongoose = require('mongoose');
const dbURI = "mongodb://127.0.0.1:27017/node-db";

(async () => {
    try {
      await mongoose.connect(dbURI)
    } catch (err) {
      console.log('error: ' + err)
    }
  })()