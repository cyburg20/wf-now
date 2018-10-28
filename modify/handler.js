'use strict';




// modify parameters
const handler = async (context) => {
    try {
        let job = context.job;
        let jobFlow = context.jobFlow;
        let parameters = context.parameters;
        const modifyNode = jobFlow[job.processposition].SET._attributes;
        parameters = Object.assign({}, parameters, modifyNode)
        return {job, jobFlow, parameters };

    } catch (err) {
        console.error('Modification is not possible', err);
    }
};

module.exports = (event, context) => {
    console.error('this is module exports', context);
    handler(event.body).then((result) => {
      context.status(200).succeed(result);
    }).catch((error) => {
      context.status(500).fail(error);
    });
  }

