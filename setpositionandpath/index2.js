'use strict';

let getStdin = require('get-stdin');
let handler = require('./handler');

let isArray = (a) => {
    return (!!a) && (a.constructor === Array);
};
let isObject = (a) => {
    return (!!a) && (a.constructor === Object);
};


(async () => {
    try {
        let val;
        try {
            val = JSON.parse(await getStdin());
        } catch (e) {
            val = {}
        }
        const res = await handler(val);

        if (isArray(res) || isObject(res)) {
            console.log(JSON.stringify(res));
        } else {
            process.stdout.write(res);
        }
    } catch (e) {
        console.error( 'there was an error in setting path', e.stack);
    }
})();