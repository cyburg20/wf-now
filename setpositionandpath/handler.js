'use strict';
const doIfThenElse = require ('./ifthenelse');


const handler = async (context) => {
    let job = context.job;
    let workFlow = context.jobFlow;


    //assign job to the correct processpath and position 
    let position = job.processposition;
    let processName = job.processname;


    
    //check node and set processposition
    const node0 = workFlow.MAIN._attributes; 
   if (position === "") {
        position = node0.BEGIN;

    } else if (position === "END") {
        position = workFlow[job.processposition]._attributes["NAME"];

    }else if( position === 'IF-THEN-ELSE1'){

            position = await doIfThenElse(context);

    }else {
        position = workFlow[job.processposition]._attributes["NEXT"];
    }
    job.processposition = position;

    //set processpath.
    const procName = job.processpath.split(":")[0];
    job.processpath = `${procName}:${position}`;

    return {job, workFlow};



}

module.exports = handler;
