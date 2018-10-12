'use strict';

const os = require('os');
const pg = require ('pg');
const Pool = require('pg-pool');


const handler = async (context) => {

    try {
        
        let regId = context.fulljobId; // use regId

               

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
       
        pool.on('Error', (err) => {
           // console.error('this is an error in getting a job', err);
            pool.connect();
        });           
      
   // get job from the database
        const res = await pool.query('SELECT * FROM jobmanager.getjob($1)', [regId])
        if (!res.rows) {
            console.error('Result not found');
           
        } 

        const job = res.rows[0];
        pool.end();        
        return {job};

    } catch (err) {
        console.error('No job currently available for processing', err)
    }
};


module.exports = handler;