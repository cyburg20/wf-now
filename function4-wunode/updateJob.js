'use strict';
const Pool = require('pg-pool');
const os = require('os');

const updateJob = async (job) => {

    try {
        //create a connection to the database.
        const pool = new Pool({
            database: 'name',
            host: 'localhost',
            user: 'name',
            password: 'name',
            port: 7128,//port
            max: 20, // set pool max size to 20
            min: 10, // set min pool size to 4
            idleTimeoutMillis: 10000, // close idle clients after 1 second
            connectionTimeoutMillis: 10000,
        });
        const client = pool.connect();
        const res = await client.query('SELECT * FROM jobmanager.updatejob( $1, $2, $3, $4, $5, $6, $7 )', [job.id, job.workingunitname, job.exitstatus, job.processname, job.processposition, job.processpath, os.hostname()]);
        if (!res.rows) {
            console.log('result not found');
        }
        const res2 = await client.query('SELECT * FROM processmanager.donejob($1) ', [job.id] );
                  
        //console.log(currentState);
        return res2;
    } catch (err) {
        console.log('No update job done', err);
    }
};
module.exports = updateJob;

