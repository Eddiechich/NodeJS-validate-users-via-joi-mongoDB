const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/HomeWorkRestApi')
.then( () => console.log('connecting to mongod......') )
.then( () => console.log('connected to mongodb!') )
.catch( err => console.error('Could not connect to mongodb', err) );

exports.modules = mongoose;
