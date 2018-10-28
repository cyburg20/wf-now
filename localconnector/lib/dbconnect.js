'use strict';

const Pool = require ('pg-pool');

const dbconnect = function() {
    
const pool = new Pool({
    database: 'dpf',
    host: '10.128.2.247',
    user: 'dpf',
    password: 'dpf',
    port: 7128, //port
    max: 20, // set pool max size to 20
    min: 10, // set min pool size to 4
    idleTimeoutMillis: 10000, // close idle clients after 1 second
    connectionTimeoutMillis: 10000,
});

pool.on('Error', (err) => {
    console.log(err.message, err.stack);
    pool.connect();
});

return pool;


};

module.exports= dbconnect;


