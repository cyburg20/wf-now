"use strict";


const fs = require("fs");
const convert = require("xml-js");
const util = require('util');


//2 read the workflowpath and store in an object called workflow
const readWorkFlow = async function (xmlfile) {
    const data =  await util.promisify(fs.readFile)(xmlfile, 'utf8');
    const workflow = JSON.parse(convert.xml2json(data, { compact: true, space: 5 }));
     return workflow;

}
    module.exports = readWorkFlow;






