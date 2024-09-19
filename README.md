MERN Estate

MERN Estate is a full-featured real estate web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to view, list, and manage properties, with a focus on user-friendly design and seamless interaction between the frontend and backend.

Features
Property Listings: Browse and view available properties for sale or rent.
User Authentication: Secure user registration, login, and role-based access control.
Add and Manage Properties: Authorized users can add new property listings, edit, and delete existing ones.
Responsive Design: Fully responsive layout, accessible on desktop and mobile devices.
Search and Filter Functionality: Find properties by specific criteria like location, price, or type.
Database Integration: Property information stored in MongoDB for fast, reliable access.

Technology Stack
Frontend: React.js, HTML5, CSS3
Backend: Node.js, Express.js
Database: MongoDB
Version Control: Git
Deployment: (Specify cloud service if deployed)
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
MongoDB (Local or cloud instance)
Installation
Clone the repository:
git clone https://github.com/jecinta254/mern-estate.git
cd mern-estate

Backend setup (API):

Navigate to the api directory:
cd api

Install dependencies:
npm install

Set up a .env file for environment variables (e.g., MongoDB URI, JWT secret, etc.):
touch .env

Add the following environment variables to your .env:
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
PORT=5000

Start the server:
npm run dev

Frontend setup (Client):

Navigate to the client directory:
cd client

Install dependencies:
npm install

Start the frontend:
npm start

Access the application:

The backend runs on http://localhost:5000
The frontend runs on http://localhost:3000
API Documentation
The app provides a set of RESTful API endpoints for handling property listings and user authentication. Key endpoints include:

POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user.
GET /api/properties: Retrieve all properties.
POST /api/properties: Add a new property (Authenticated users only).
PUT /api/properties/:id: Update a property (Authenticated users only).
DELETE /api/properties/:id: Delete a property (Authenticated users only).
Testing
To run the tests for this project:

Install testing dependencies (if not already):
npm install --save-dev jest supertest

Run tests:
npm test

Deployment
For deployment, ensure environment variables are correctly set in your production environment and that both frontend and backend services are configured. Example deployment platforms:

Frontend: Netlify, Vercel, Render.com
Backend: Heroku, DigitalOcean, AWS

Contributors:
Jecinta Munyua.

Amos Shikoli.

Collins Oloo.

Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new feature branch (git checkout -b feature/new-feature).
Commit your changes (git commit -m 'Add some new feature').
Push to the branch (git push origin feature/new-feature).
Open a pull request.
License
This project is licensed under the MIT License 
