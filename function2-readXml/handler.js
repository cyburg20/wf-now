'use strict ';

const getStdin = require('get-stdin');
const request = require('request');
const http = require('http');
const workFlowList = require('./workFlowList');
const fs = require('fs');
//const JSONStream = require('JSONStream');






module.exports = (context, callback) => {

    if (!context) {
        console.log('there is an Error');
        throw new Error('job not found');
    }

    const start = (async () => {
        try {

            await workFlowList.init();
            const getJob = (data) => {
                let job = JSON.parse(data);
                const jobname = job.processname;
                const flowList = workFlowList.get();
                let finalJob = flowList[jobname];
              // console.log(JSON.stringify({finalJob,job}));
            };

            getJob(context);
        } catch (err) {
            console.log('there is an Erro ', err);
        }
    })();

    //console.log('checking start'+ start);

    callback(null, start);
};
