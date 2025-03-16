const amqp = require('amqplib');
require('dotenv').config();

const producer = async (message) => {
  try {
    if (!message || message === '') {
      throw new Error(
        'producer(message) function requires a message argument and the message cannot be an empty string'
      );
    }

    const url = `amqp://${process.env.RABBIT_MQ_USER}:${process.env.RABBIT_MQ_PASSWORD}@${process.env.RABBIT_MQ_HOST}`;
    const connection = await amqp.connect(url); // connect to the broker using environment variables
    const channel = await connection.createChannel(); // create a channel
    const queue = 'my_queue'; // queue name
    await channel.assertQueue(queue, {
      durable: true,
    }); // make sure the queue exists

    await channel.sendToQueue(queue, Buffer.from(message), {
      persistent: true,
    }); // send the message
    console.log(`Producer sent: ${message}`);

    setTimeout(() => {
      connection.close(); // close the connection
      process.exit(0);
    }, 500);
    return true;
  } catch (error) {
    console.error('Error in producer:', error);
  }
};

module.exports = producer;
