'use strict';

const fs = require('fs');
const getWorkFlowFiles = require('./getWorkFlowFiles');
const readWorkFlow = require('./readWorkFlow');


const data = {};
const workFlowList = {};

workFlowList.init = async function () {
    try {
        const files = await getWorkFlowFiles();
        for (const file of files) {
               /** read xml file and extract wf keyname(name.name)*/
            const xmlData = await readWorkFlow(file);
            for (const key in xmlData.DPF.config.workflows) {
               // console.log(key);
                data[key] = xmlData.DPF.config.workflows[key];
            }
        }
    } catch (err) {
        console.error(err);
    }
};


// a singleton of the workflow list
workFlowList.get = function () {
    return data;
};

module.exports = workFlowList;
