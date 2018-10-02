'use strict';

const request = require('request');
const http = require('http');


module.exports = (context, callback) => {


    request.get('http://gateway:8080/function/getnextjob')
        .pipe(request.post('http://gateway:8080/function/getxml', (error, response, data) => {

            // //parse job to json object
            // const jobxml = JSON.parse(data);
            // let  job = jobxml.job;
            // let  xml = jobxml.finalJob;

            // // assign job to the correct processpath and position
            // let position = job.processposition;
            // let processName = job.processname;

            // //set the node
            // const node0 = xml.MAIN._attributes;

            // if (position === "" ) {
            //     position = node0.BEGIN;
            // }
            // job.processposition = position;

            // const procName = job.processpath.split(":")[0];
            // job.processpath = ` ${procName}: ${position}`;

            console.log('here is my data', data);
            callback(null, data );

        }));
};
//still wokring on this
