const mongoose = require('mongoose');

function connect() {
    mongoose.connect("mongodb+srv://reyann11b:2vJBSrd3nTPPpKQ6@polo.m5eut.mongodb.net/Polo")
        .then(() => console.log('Connection successful'))
        .catch(err => console.log('Connection unsuccessful', err));

    const connection = mongoose.connection;

    connection.on('error', () => console.log('Connection error'));
}

connect();

module.exports = mongoose;