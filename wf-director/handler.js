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

module.exports = async (context) => {

    console.error('this is the input context', context);

    var gw = "http://gateway:8080/function/";
    try {

              // get job from the database
            context = await request.get(make(gw, "getjob", context));
           // console.error('this is getjob after while', context);           

            // read xml workflow and return the exact workflow for the job

            context = await request.get(make(gw, "getxml", context));
          //  console.error('this is getxml', context);

            // set the processpath and position in the job
            context = await request.get(make(gw, "setpositionandpath", context));
           // console.error('this is setpositionandpath', context);

            // check the workflow to see which node we are
            const firstNode = context.workFlow[context.job.processposition]._attributes.TYPE;
            // if the node is a working unit
            if (firstNode === 'WU') {

                // set the job to a working unit job
                context = await request.get(make(gw, "wunode", context));
               // console.error('this is a working unit node', context);

                //update the database and 
                context = await request.get(make(gw, "updatejob", context));
               // console.error('this is updatejob', context)
                //submit the job to the database
                context = await request.get(make(gw, "donejob", context));
              //  console.error('this is donejob', context)
                process.exit();



            } else if (firstNode === 'MODIFY') {
                //get parameters to be used for modify
                context = await request.get(make(gw, "getparameter", context));
                console.error('there was an error in getting parameter ', context);
                //modify the parameters
                context = await request.get(make(gw, "modify", context));
                console.error('there was no data to modify', context);
                //update the modification to the database
                context = await request.get(make(gw, "updatejob", context));
                console.error('this is updatejob for modify', context)

                //get parameters from the database

            } else if (firstNode === 'IF-THEN-ELSE') {
                context = await request.get(make(gw, "updatejob", context));
                console.error('this is updatejob for if-then-else', context)

            } else if (firstNode == 'STOP') {

                //update the database on the state of the job
                context = await request.get(make(gw, "updatejob", context));
               // console.error('this is updatejob for stop node', context);

                //stop the  job process
                context = await request.get(make(gw, "finishjob", context));
               // console.error('this is finishedjob in stop node', context)
                process.exit();

            }
           /*  context = await request.get(make(gw, "finishjob", context));
            console.error('the job was finsihed', context);
 */
        

    } catch (err) {
        console.error('There was an error!', err);
    }

    //const res4 = await request.get(make(gw, "", res3));
}