'use strict';

const  Pool = require ('pg-pool');




const handler = async (context) => {
    let job = context.job;
    let workFlow = context.workFlow;
console.error('before the query', job);


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
        console.error('there was an error in finishjob', error);
        pool.connect();
    });

    const res = await pool.query('SELECT * FROM processmanager.finishjob($1, $2, $3, $4)', [job.id, job.exitstatus, job.ts2delete, job.ts2forget])
    console.error('this is the job.id', job.id);
            if (!res.rows){
                console.error('there was an Error completing the job', error);
            }
            pool.end();
    return {workFlow};
}


module.exports = handler;
