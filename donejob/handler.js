'use strict';


const pg = require('pg');
const { Pool } = require('pg');


const  handler = async (context) => {
    let job = context.job;
    let jobFlow = context.jobFlow;
    let parameters  = context.parameters;  

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
        console.error('there is an error in getting job', err);
    });          
  
    const res = await pool.query('SELECT * FROM processmanager.donejob($1) ', [job.id] );
      pool.end();
      return {job, jobFlow, parameters};  

};

module.exports = (event, context) => {
    console.error('this is module exports', context);
    handler(event.body).then((result) => {
      context.status(200).succeed(result);
    }).catch((error) => {
      context.status(500).fail(error);
    });
  }