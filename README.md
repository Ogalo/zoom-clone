Zoom Clone
A Zoom Clone application built with modern web technologies. This project aims to replicate the core functionalities of Zoom, allowing users to create and join video calls seamlessly.

Features
Real-Time Video Calls: High-quality video and audio communication.
Chat Functionality: Text chat within video calls.
User Authentication: Secure user login and registration.
Room Management: Create and join specific rooms.
Screen Sharing: Share your screen with other participants.
Responsive Design: Fully responsive for both desktop and mobile devices.
Technologies Used
Frontend: Nextjs, React, Redux, Tailwind
Backend: Stream, Clerk, Node.
WebRTC: For real-time communication
Socket.io: For real-time signaling
MongoDB: Database for user and room data
JWT: JSON Web Tokens for authentication
Installation
To run this project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/Ogalo/zoom-clone.git
cd zoom-clone
Install dependencies:
bash
Copy code
# In the root directory
npm install

# In the client directory
cd client
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

env
Copy code
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run the application:
bash
Copy code
# In the root directory
npm run dev
This will start both the backend server and the frontend development server.

Usage
Create a Room: Navigate to the homepage and click on "Create Room".
Join a Room: Enter the room ID provided by the room creator.
Chat: Use the chat feature to send messages during the call.
Screen Share: Click the "Share Screen" button to share your screen with participants.
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any inquiries or feedback, please reach out to:

GitHub: Ogalo
