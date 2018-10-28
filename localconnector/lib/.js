'use strict';






const publish = async ({channel,message} ) =>{

    const ex ='newjob';

    const ok = await channel.assertExchange( ex, 'fanout', {durable: false});
    const sendMessage = process.argv.slice(2).join (' ') ||' newjob';








}

module.exports= publish;


/* amqp.connect('amqp://localhost')
.then(function(conn) {
  return conn.createChannel()
  .then(function(ch) {
    var ex = 'logs';
    var ok = ch.assertExchange(ex, 'fanout', {durable: false})

    var message = process.argv.slice(2).join(' ') ||
      'info: Hello World!';

    return ok.then(function() {
      ch.publish(ex, '', Buffer.from(message));
      console.log(" [x] Sent '%s'", message);
      return ch.close();
    });
  }).finally(function() { conn.close(); });
}).catch(console.warn); */