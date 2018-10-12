/* const fs = require('fs');
const path = require('path');
const util = require('util');
const find = require('find');
const convert = require("xml-js");

const filePath = 'C://Users/Administrator/Desktop/async-code/getxml/templates';

const result = {};

// workflow files are read here
    console.log ('file path',filePath);
find.file(/wf-[^\\]+\.xml$/, filePath, (files) => {
    (async () => {

    for (let file of files) {
        const data =  await util.promisify(fs.readFile)(file, 'utf8');
        const workflow = JSON.parse(convert.xml2json(data, { compact: true, space: 5 }));
        for (const key in workflow.DPF.config.workflows) {
             result[key] = workflow.DPF.config.workflows[key];
         }
    }
    
    fs.writeFileSync(path.join(__dirname, 'workflows.json'), JSON.stringify(result, null, 2));
    
})();
});

 */