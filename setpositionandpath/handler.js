'use strict';
const ifThenElse = require ('./ifThenElse');


const handler = async (context) => {
       
    let job = context.job;
    let jobFlow = context.jobFlow;
    let parameters = context;
console.error('this is setposition', context.result)


    //assign job to the correct processpath and position 
    let position = job.processposition;

    
    //check node and set processposition
    const node0 = jobFlow.MAIN._attributes; 
   if (position === "") {
        position = node0.BEGIN;

    } else if (position === "END") {
        position = jobFlow[job.processposition]._attributes["NAME"];

    }else if( position === 'IF-THEN-ELSE1'){

            position = await ifThenElse(job, jobFlow, parameters);

    }else {
        position = jobFlow[job.processposition]._attributes["NEXT"];
    }
    job.processposition = position;

    //set processpath.
    const procName = job.processpath.split(":")[0];
    job.processpath = `${procName}:${position}`;

    return {job, jobFlow, parameters};



}
module.exports = (event, context) => {
    console.error('this is module exports', context);
    handler(event.body).then((result) => {
      context.status(200).succeed(result);
    }).catch((error) => {
      context.status(500).fail(error);
    });
  }


