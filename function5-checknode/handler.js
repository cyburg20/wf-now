'use strict';

const request = require('request');
const http = require('http');


module.exports = (context, callback) => {

    request.get('http://gateway:8080/function/workengine')
    .pipe(request.post('http://gateway:8080/function/wunode', (error, response, data) => {


    
        callback(null, JSON.stringify(data));
    }));


  
    
};