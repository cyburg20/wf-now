'use strict';


const open = require ('amqplib');


//create a connection to rabbitMq
const rabbitconnect = async () => {
   const conn =  await open.connect('amqp://user:pass@rabbitqueue:5672');  
     if (!conn) {
          throw new Error ('connection not found');
     } 
     //create a channel
     const channel = await conn.createChannel();
       if(!channel){
           throw new Error ('no channel created');
       }
      return { conn, channel};
}


module.exports = rabbitconnect;




