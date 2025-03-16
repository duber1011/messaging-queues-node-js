# Messaging Queues with Node.js

This repository contains examples and demonstrations of how to implement messaging queues using RabbitMQ with Node.js. Messaging queues are a critical component in building scalable, distributed systems, and this project aims to provide a foundational understanding of their usage.

## Features

- Basic setup and configuration of RabbitMQ.
- Examples of producer and consumer implementations.
- Demonstrations of message acknowledgment and durability.
- Use cases for messaging queues in real-world applications.

## Prerequisites

To run the examples in this repository, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [RabbitMQ](https://www.rabbitmq.com/) (Ensure RabbitMQ is installed and running)

### Installing RabbitMQ and Erlang

Follow these steps to install RabbitMQ and its dependency, Erlang:

1. **Download and Install Erlang**:

   - Visit the [Erlang Downloads page](https://www.erlang.org/downloads).
   - Download the appropriate version for your operating system.
   - Follow the installation instructions provided for your platform.

2. **Download and Install RabbitMQ**:

   - Visit the [RabbitMQ Downloads page](https://www.rabbitmq.com/download.html).
   - Download the RabbitMQ installer for your operating system.
   - Follow the installation instructions provided for your platform.

3. **Verify Installation**:

   - Open a terminal or command prompt.
   - Run the following commands to ensure both Erlang and RabbitMQ are installed correctly:
     ```bash
     erl
     ```
     This should open the Erlang shell. Type `q().` to exit.
     ```bash
     rabbitmqctl status
     ```
     This should display the status of the RabbitMQ server.

4. **Start RabbitMQ Server**:
   - Use the following command to start the RabbitMQ server:
     ```bash
     rabbitmq-server
     ```
   - Ensure the server is running before proceeding with the examples in this repository.

For more detailed instructions, refer to the [RabbitMQ Installation Guide](https://www.rabbitmq.com/download.html).

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/duber1011/messaging-queues-node-js.git
   cd messaging-queues-node-js
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start RabbitMQ server (if not already running). If you are in windows you can start RabbitMQ going to
   windows botton and then look for rabbitMQ server folder and open RabbitMQ Service Start. This action is
   going to open a temporary Rabbit terminal and will start rabbitMQ localy. Another option is look for
   Services in windows, go to RabbbitMQ and then right click and select start. Once the the Rabbit server is
   running you can open in your browser http://localhost:15672/ and sign in with username:guest and
   password: guest. Once there, you can add your own new user. Fill the form out with your username and
   your password (wich you need to comfirm in the form), in the last field called "tags" put administrator
   and then click in the Add user botton in the Admin tab.

   Then, in the users table the new user appears. So, you will have two users; guest and thye new one.
   Click on the new user and then click on Set permision botton. Go back clicking on Admin tab. You
   will see in the users table the same config and accesses in both users gest and the new one. Now you can
   select the guest user and scroll dwon until the end of the page and clik on delete.

Finaly, you can logout and then login agin, but with your new user.

4. Run the examples:
   ```bash
   npm start
   ```

## Project Structure

- `producer.js`: Example of a message producer that sends messages to the queue.
- `consumer.js`: Example of a message consumer that processes messages from the queue.
- `README.md`: Documentation for the project.

## Resources

- [RabbitMQ Official Documentation](https://www.rabbitmq.com/documentation.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Contributing

Contributions are welcome! If you find a bug or have a feature request, you'd like to add or improvements to existing solutions, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
