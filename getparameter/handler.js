'use strict';

const pg = require ('pg');
const Pool = require('pg-pool');


const handler  = async (context) => {
    try {
        let job = context.job;
        let jobFlow = context.jobFlow;     
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
        const res = await pool.query('SELECT * FROM jobmanager.getParameters($1)', [job.id]);
         if (!res.rows) {
             console.error('result not found');
         }         
          const parameters = res.rows[0];
           let result = {};
           for (let i=0; i<res.rows.length; i++){
               result[res.rows[i].key] = res.rows[i].value;
           }
           pool.end();
           return {job, jobFlow, result};
    } catch (err) {
        console.error('there is an error in getting parameters' , err);
    }

};


module.exports = (event, context) => {
    console.error('this is module exports', context);
    handler(event.body).then((result) => {
      context.status(200).succeed(result);
    }).catch((error) => {
      context.status(500).fail(error);
    });
  }
