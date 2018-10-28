"use strict"

const request = require('request-promise-native');

function make(url, fn, body) {
    return {
        uri: url + fn,
        method: "POST",
        body: body,
        json: true,
        "Content-Type": "application/json"
    };
}


const handler = async (context) => {

    console.error('this is the input context', context);

    var gw = "http://gateway:8080/function/";
    try {

                  // get job from the database
        context = await request.get(make(gw, "getjob", context));
        console.error('this is getjob before while', context);
        

        context = await request.get(make(gw, "getxml", context));
        console.error('this is getxml', context);  

        context = await request.get(make(gw, "getparameter", context));
        console.error('this is the message for parameters gotten ', context);
            
            while(true){   
                 
            // set the processpath and position in the job
            context = await request.get(make(gw, "setpositionandpath", context));
            console.error('this is setpositionandpath', context);

            // check the workflow to see which node we are
            const firstNode = context.jobFlow[context.job.processposition]._attributes.TYPE;
            // if the node is a working unit

                if (firstNode === 'WU') {
                    // set the job to a working unit job
                    context = await request.get(make(gw, "wunode", context));
                    console.error('this is a working unit node', context);
                        //update the database and 
                    context = await request.get(make(gw, "updatejob", context));
                    console.error('this is updatejob', context);
                    //submit the job to the database
                    context = await request.get(make(gw, "donejob", context));
                    console.error('this is donejob', context)
                    process.exit();
       
    
                } else if (firstNode === 'MODIFY') {
                   
                               
                    //m0odify the parameters
                    context = await request.get(make(gw, "modify", context));
                    console.error('this is after modification', context);
                    //update the modification to the database
                    context = await request.get(make(gw, "updatejob", context));
                    console.error('result after updating ', context);               
                  
    
                } else if (firstNode === 'IF-THEN-ELSE') {
                    context = await request.get(make(gw, "updatejob", context));
                    console.error('this is updatejob for if-then-else', context);                    
    
                } else if (firstNode == 'STOP') {    
                    //update the database on the state of the job
                    context = await request.get(make(gw, "updatejob", context));
                    console.error('this is updatejob for stop node', context);    
                    //stop the  job process
                    context = await request.get(make(gw, "finishjob", context));
                    console.error('this is finishedjob in stop node',Date.now(),  context)
                    process.exit();
    
                }

            }
           
           /*  context = await request.get(make(gw, "finishjob", context));
            console.error('the job was finsihed', context);
 */
        

    } catch (err) {
        console.error('There was an error!', err);
    }

    //const res4 = await request.get(make(gw, "", res3));
}


module.exports = handler;
/* module.exports = (event, context) => {
    console.error('this is module exports', context);
    handler(event.body).then((result) => {
      context.status(200).succeed(result);
    }).catch((error) => {
      context.status(500).fail(error);
    });
  } */