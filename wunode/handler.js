'use strict';
 const os = require ('os');



const handler = async (context) => {
  let workFlow = context.workFlow
  let job = context.job;


  //check if the node is a working unit
  const node = workFlow[job.processposition]._attributes;
  if(node ['TYPE'] === 'WU'){
      job.workingunitname = node['NAME'];
  }  else {
      console.error('there is no defined workflow'. error);
  }
  
   return { job, workFlow};


};

module.exports = handler;