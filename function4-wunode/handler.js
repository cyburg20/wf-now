'use strict';

const request = require('request');
const updateJob = require('./updateJob');
const getStdin = require('get-stdin');
const http = require('http');



const start = (jobxml) => new Promise(async (resolve, request) => {

    try {

        //gets the job from  function4
        let job = jobxml.job;
        let workFlow = jobxml.finalJob;
        const firstNode = workFlow[job.processposition]._attributes.TYPE
        if (firstNode === 'WU') {
            const node1 = workFlow[job.processposition]._attributes;
            job.workingunitname = node1['NAME'];
            
        } 
        await updateJob(job);
        job = null;
        resolve(job);
    }catch (err) {
        reject(err);
    }
});


module.exports = (context, callback) => {
    if (!context) {
        callback('job not found', null);
        return;
    }

    let jobxml = JSON.parse(context);
    start(jobxml)
        .then(result => callback(null, result))
        .catch(e => callback(e, null));

};