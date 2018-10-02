'use strict';
const fs = require('fs');
const Pool = require('pg-pool');
const os = require('os');

module.exports = (context, callback) => {
    
    const pool = new Pool({
        database: 'name',
        host: '10.128.2.247',
        user: 'name',
        password: 'name',
        port: 222,//port
        max: 20, // set pool max size to 20
        min: 10, // set min pool size to 4
        idleTimeoutMillis: 10000, // close idle clients after 1 second
        connectionTimeoutMillis: 10000,
    });
    let job;
    pool.connect().then(client => {
        client.query('SELECT * FROM processmanager.register( $1 , 0, \'processmanager1\' )', [os.hostname()]).then(res => {
            const regId = res.rows[0].register;
            client.query('SELECT * FROM processmanager.getnextjob($1 )', [regId]).then(res2 => {
                const fullJobId = res2.rows[0].id;
                client.query('SELECT * FROM jobmanager.getjob($1)', [fullJobId]).then(res3 => {
                    job = res3.rows[0];
                    const finalJob = JSON.stringify(job, null, 4);
                    callback(null, finalJob);
                    process.exit(0);

                }).catch(e => {
                    client.release();
                });
            });
        });
    });
};