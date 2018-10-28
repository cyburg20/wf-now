'use strict';

const workFlowList = require('./workflows.json');

// get the job and return its exact workflow
const handler = async ( context ) => {
  let job = context.job;
  let parameters = context.parameters;
 
  const jobName = job.processname;
  let jobFlow = workFlowList[jobName];
  context.jobFlow = jobFlow;
  
  return  {job, jobFlow, parameters};


};

module.exports = (event, context) => {
  console.error('this is module exports', context);
  handler(event.body).then((result) => {
    context.status(200).succeed(result);
  }).catch((error) => {
    context.status(500).fail(error);
  });
}




