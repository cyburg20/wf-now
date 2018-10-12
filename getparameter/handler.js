'use strict';

const pg = require ('pg');



const handler  = async (context) => {

    try {
        let job = context.job;
     
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
            console.log(err.message, err.stack);
            pool.connect();
        }); 
        const res = await client.query('SELECT * FROM jobmanager.getParameters($1)', [job.id]);
         if (!res.rows) {
             console.error('result not found');
         }
         
          const parameters = res.rows[0];
          var result = {};
           for (var i=0; i<res.rows.length; i++){
               result[res.rows[i].key] = res.rows[i].value;
           }
           pool.end();
           return {job, workFlow, result};

    } catch (err) {
        console.error('there is an error in getting parameters' , err);
    }

   



}

module.exports= handler;
