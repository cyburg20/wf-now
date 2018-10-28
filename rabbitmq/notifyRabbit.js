'use strict';

//entry point
const context = require('rabbit.js').createContext();

context.on('ready', () => {
  const pub = context.socket('PUB'), sub = context.socket('SUB');
  sub.pipe(process.stdout);

  sub.connect('events', () => {
    pub.connect('events', () =>{
      pub.write(JSON.stringify({welcome: 'rabbit.js'}), 'utf8');
    });
  });
});
