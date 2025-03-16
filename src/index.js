const producer = require('./rabbitmq/producer');
const consumer = require('./rabbitmq/consumer');

const checkForNewMessages = async () => {
  try {
    console.log('Checking for new messages...'); // Simulate checking for new messages

    const newMessage = await producer('Hello world!'); // send a new message

    if (newMessage) {
      console.log('New message detected, running consumer logic...');
      consumer();
    } else {
      console.log('No new messages found.');
    }
  } catch (error) {
    console.error('An error occurred while checking for new messages:', error);
  }
};

checkForNewMessages();
