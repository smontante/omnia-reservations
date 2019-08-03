const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://smontante:Bulls23!@cluster0-1oun8.mongodb.net?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
})
/*

NOTES:
1.) When connecting make sure you mongodb server is running, by running the script in the terminal below
    /Users/admin/mongodb/bin/mongod --dbpath /Users/admin/mongodb-data
*/




