var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/personaladvisor';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to uri: '+dbURI);
});

mongoose.connection.on('error', function(err) {
   console.log('Mongoose connection failed for uri: '+dbURI);
   console.log('Connection failed for reason: '+err );
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected from uri: '+dbURI);
});

require('./userModel');
require('./accountModel');