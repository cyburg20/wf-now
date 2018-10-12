'use strict';

const workFlowList = require('./workflows.json');

// get the job and return its exact workflow
const handler = async ( context ) => {
  const job = context.job;
  console.error('this is getxml', job)
  
  const jobName = job.processname;
  let jobFlow = workFlowList[jobName];
  context.jobFlow = jobFlow;
  return  context;


}



module.exports= handler;
