# Real-Time Chat Application using Socket.IO and Node.js

## Overview
This README provides an overview and setup instructions for a real-time chat application built using Socket.IO and Node.js. The application allows users to join chat rooms, send and receive messages in real-time, and participate in group conversations.

## Prerequisites
Make sure you have the following prerequisites installed on your machine:
- Node.js (v12 or higher)
- NPM (Node Package Manager)

## Installation
1. Clone the repository from GitHub: `git clone <repository_url>`
2. Navigate to the project directory: `cd real-time-chat-application`
3. Install the dependencies: `npm install`

## Configuration
1. Open the `config.js` file and adjust the configuration options as needed, such as the port number and any additional settings.
2. If necessary, update the frontend configuration (`public/js/script.js`) to match the server configuration.

## Usage
1. Start the server: `node server.js`
2. Access the application through a web browser at `http://localhost:<port_number>` (replace `<port_number>` with the configured port, e.g., 3000).
3. Users can enter a username and select a chat room to join.
4. Once connected, users can send messages in the chat room, and all participants will see the messages in real-time.

## Features
- **Real-Time Communication:** Utilizes Socket.IO to establish real-time bidirectional communication between the server and clients.
- **Multiple Chat Rooms:** Allows users to choose from multiple chat rooms to participate in separate conversations.
- **User Join/Leave Notifications:** Notifies users when someone joins or leaves a chat room.
- **Username Customization:** Users can choose their desired username when joining a chat room.
- **Timestamps:** Displays timestamps for each message to provide context and chronological order.
- **Responsive Design:** Offers a responsive and mobile-friendly user interface for seamless usage on various devices.

## File Structure
- `server.js`: Entry point of the application, handles server setup and Socket.IO integration.
- `public/`: Contains static files including HTML, CSS, and client-side JavaScript.
- `public/js/script.js`: Client-side JavaScript code responsible for handling user interactions and Socket.IO events.

## Future Enhancements
- User authentication and registration system.
- Private messaging between users.
- Emojis and file sharing capabilities.
- Message history and chat room moderation features.

## Contributions
Contributions are welcome! If you have any suggestions or would like to contribute to the project, please follow the standard GitHub workflow (fork, make changes, submit a pull request).
