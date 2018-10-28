'use strict';
 const os = require ('os');



const handler = async (context) => {
  let jobFlow = context.jobFlow
  let job = context.job;


  //check if the node is a working unit
  const node = jobFlow[job.processposition]._attributes;
  if(node ['TYPE'] === 'WU'){
      job.workingunitname = node['NAME'];
  }  else {
      console.error('there is no defined jobFlow'. error);
  }
  
   return { job, jobFlow};


};

module.exports = handler;