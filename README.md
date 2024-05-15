

# User Management System

This project is a User Management System built using MongoDB, Node.js, and React.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user data.

## Features

- **Create**: Add new users to the system.
- **Read**: View a list of all users or details of a specific user.
- **Update**: Modify the details of existing users.
- **Delete**: Remove users from the system.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Deployment**:  `http://localhost:3000` 

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory.
   ```bash
   cd user-management-system
   ```

3. Install dependencies for the backend.
   ```bash
   cd server
   npm install
   ```

4. Install dependencies for the frontend.
   ```bash
   cd ../client
   npm install
   ```

5. Start the backend server.
   ```bash
   cd ../server
   npm start
   ```

6. Start the frontend server.
   ```bash
   cd ../client
   npm start
   ```

7. Open your web browser and visit `http://localhost:3000` to view the application.

## API Endpoints

- **GET /api/users**: Get all users.
- **GET /api/users/:id**: Get user by ID.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update user by ID.
- **DELETE /api/users/:id**: Delete user by ID.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

