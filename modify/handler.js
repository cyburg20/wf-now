'use strict';




// modify parameters
const handler = async (context) => {


    try {
        let job = context.job;
        let workFlow = context.workFlow;
        let parameters = context.result;

        const modifyNode = workFlow[job.processpostion].SET._attributes;
        fullparameters = Object.assign({}, fullparameters, modifyNode)
        return {
            job,
            workFlow,
            parameters
        };

    } catch (err) {
        console.error('Modification is not possible', err);
    }

}

module.exports = handler;