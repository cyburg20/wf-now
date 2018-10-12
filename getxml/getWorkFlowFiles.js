'use strict';

const find = require('find');


const getWorkFlowFiles = () => {
    const promise = new Promise((resolve, reject) => {
    const filePath = '/app/templates';
        // workflow files are read here
        find.file(/wf-[^\\]+\.xml$/, filePath, (files) => {
            resolve(files);
        })
            .error((err) => {
                reject(err);
            });
    });
    return promise;
}
module.exports = getWorkFlowFiles;