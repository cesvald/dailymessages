const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors')
    
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

const passport = require('passport');

const userRoutes = require('./app/routes/user.routes.js')

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// create express app
const app = express();

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

require('./services/auth');

require('./app/routes/message.routes.js')(app);
require('./app/routes/category.routes.js')(app);
require('./app/routes/auth.routes.js')(app);

app.use('/user', passport.authenticate('jwt', { session : false }), userRoutes);

// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});