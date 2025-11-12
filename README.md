Streamify : Real-Time Language Exchange Platform
Streamify is an interactive web platform designed to help users improve their speaking skills in a target language through real-time chat and video calling. Users can select their native and target languages and connect with others worldwide for immersive language practice. The system supports 32 UI themes, promoting personalization and cultural exchange in a modern, user-friendly environment.

Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), Streamify integrates WebRTC and Stream SDK for seamless real-time communication.

Features
Secure Authentication (JWT)
User registration and login with JWT authentication
Credentials securely stored in MongoDB

Language Preference Onboarding
Choose native and target languages
Enables better user pairing and personalization

Friend System & Social Networking
Send, accept, and decline friend requests
Real-time updates with a notifications panel

Real-Time Chat (Stream SDK)
Instant messaging with WebSocket-based updates
One-on-one chat for language practice

Peer-to-Peer Video Calls (WebRTC + Simple-Peer)
High-quality, low-latency video calls
Secure, encrypted communication for learners

Customizable UI (32 Themes)
32 pre-defined theme options
Dynamic theme switching with saved preferences

Responsive Design
Built with React.js + Tailwind CSS
Works across desktop, tablet, and mobile

Live Notifications
Friend requests, messages, and calls appear instantly

Scalable Backend
RESTful APIs for authentication, chat, and calls
Express.js server with modular architecture

Data Persistence
MongoDB + Mongoose for structured storage
Data models for users, chats, friends, and themes

Implementation Overview
Backend
Node.js + Express.js
JWT Authentication
MongoDB (Atlas) connection using Mongoose
APIs for user management, chat, and notifications

Frontend
React.js (Vite) with Tailwind CSS
Zustand for state management
Stream SDK for messaging
Simple-Peer + WebRTC for video calls

Database
MongoDB Atlas for user data and preferences
Collections for users, friends, and chat metadata

Real-Time Features
Stream SDK for instant messaging
WebRTC signaling for video calls

Testing
Verified backend APIs using Postman
Tested video calls between multiple clients
Ensured real-time performance across browsers

Deployment
Production-ready build for React served via Express
Environment variables handled securely
Works seamlessly with MongoDB Atlas and Stream SDK