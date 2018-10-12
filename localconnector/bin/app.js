'use strict';


const os = require ('os');
const dbconnect = require ('../lib/dbconnect')
const register = require('../lib/register');
const watch = require ('../lib/watch');
const rabbitconnect = require('../lib/rabbitconnect');




(async () => {


try  {
 const pool = dbconnect();
 const regId = await register(pool);
// const {conn, channel}  =  await rabbitconnect();

 while(true){
           //publish to rabbitmq  
 await watch({pool, regId});
     
                        
 
  

   }
   
   //pool.end();


  // channel.close();
   //conn.close()



}catch (err) {
    console.log('Error', err)
}


})();









