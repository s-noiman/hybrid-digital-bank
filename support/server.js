'use strict';

require('dotenv').config({silent: true, path: `${__dirname}/.env.data`});

var server = require('./app');

console.log(`Running on ${process.env.BASE_PATH}:${process.env.PORT}`)

server.listen(process.env.PORT, function () {
    console.log('Server running on port: %d', process.env.PORT);
});
