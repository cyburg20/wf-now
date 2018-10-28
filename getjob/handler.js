'use strict';


const pg = require ('pg');
const Pool = require('pg-pool');


const handler = async (context) => {

    try {
       
        let regId = context.fulljobId; // use regId              

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
/**
module.exports = (event, context) => {
    console.error('this is module exports', context);
    console.error('this is event', event);
    handler(event.body).then((result) => {
      context.status(200).succeed(result);
    }).catch((error) => {
      context.status(500).fail(error);
    });
  }; **/