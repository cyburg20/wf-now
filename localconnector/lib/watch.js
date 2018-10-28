'use strict';

//send message to rabbitMq
const sendMessage = async ( { channel,fulljobId, jobId}) => {
    
    const message = JSON.stringify({fulljobId});
    
    const ex ='OpenFaasEx'
    const ok = await channel.assertExchange( ex, 'topic', {durable: true});    
              await channel.publish(ex, 'newjob', Buffer.from( message));    
    console.error( 'new message ',  fulljobId);
 }

const watch = async ({pool,regId, channel}) => {
   

   while (true) {
       //get the jobId from the database
        const res2 = await pool.query('SELECT * FROM processmanager.getnextjob($1 )', [regId]);
        if (!res2.rows) {
            throw new Error ('result is not found');            
        } 
        const fulljobId = parseInt(res2.rows[0].id, 10);
        if (!fulljobId){
            break;
        }   
            
           await  sendMessage({fulljobId, channel});
        }
}


module.exports = watch;