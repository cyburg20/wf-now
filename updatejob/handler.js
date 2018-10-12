'use strict';
const os = require('os');
const pg = require ('pg');
const Pool = require('pg-pool');

const handler = async (context) => {

    
        let job = context.job;
        let workFlow = context.workFlow;
        

        const pool = new Pool({
            database: 'name',
            host: 'localhost',
            user: 'name',
            password: 'name',
            port: 7128, //port
            max: 20, // set pool max size to 20
            min: 10, // set min pool size to 4
            idleTimeoutMillis: 10000, // close idle clients after 1 second
            connectionTimeoutMillis: 10000,
        });

        pool.on('Error', (error) => {
            console.error('this is error from updatejob', error);
            pool.connect();
        });

        //update the database about the state of the job
        const res = await pool.query('SELECT * FROM jobmanager.updatejob( $1, $2, $3, $4, $5, $6, $7 )', [job.id, job.workingunitname, job.exitstatus, job.processname, job.processposition, job.processpath, os.hostname()]);
        if(!res.rows){
            console.error('no update was done try again')
        }         
        pool.end()
        return {job,workFlow};

    
}
module.exports = handler;