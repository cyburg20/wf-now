'use strict';

const os = require('os');




const register = async (pool) => {


    const res = await pool.query('SELECT * FROM processmanager.register( $1 , 0, \'processmanager1\' )', [os.hostname()]);
    if (!res.rows) {
        console('result not defined');
        throw new Error('Result not found');
    }
    
    const regId = res.rows[0].register;
    return regId;



};

module.exports= register;



