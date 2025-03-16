const amqp = require('amqplib');
require('dotenv').config();

const consumer = async () => {
  try {
    const url = `amqp://${process.env.RABBIT_MQ_USER}:${process.env.RABBIT_MQ_PASSWORD}@${process.env.RABBIT_MQ_HOST}`;
    const connection = await amqp.connect(url); // connect to the broker
    const channel = await connection.createChannel(); // create a channel
    const queue = 'my_queue'; // queue name
    await channel.assertQueue(queue, {
      durable: true,
    }); // make sure the queue exists

    console.log('Consumer is waiting for messages in the queue...');

    channel.consume(
      queue,
      (message) => {
        console.log(`Consumer received: ${message.content.toString()}`);
        channel.ack(message); // confirm that the message has been processed
      },
      {
        noAck: false,
      }
    );
  } catch (error) {
    console.error('Error in consumer:', error);
  }
};

module.exports = consumer;
