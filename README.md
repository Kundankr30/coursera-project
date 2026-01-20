# Coursera Backend API

A Node.js backend application for a Coursera-like online learning platform, built with Express.js, MongoDB, and JWT authentication.

## Features

- User registration and authentication
- Course preview and purchase functionality
- Admin panel (under development)
- MongoDB database integration

## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coursera-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (if needed):
   - The MongoDB connection is currently hardcoded in `db.js`. For production, consider using environment variables.

## Usage

1. Start the server:
   ```bash
   node index.js
   ```

2. The server will run on `http://localhost:3000`

## API Endpoints

### User Routes (`/user`)

- `POST /user/signup` - Register a new user
  - Body: `{ "email": "string", "password": "string", "firstname": "string", "lastname": "string" }`

- `POST /user/signin` - User login
  - Body: `{ "email": "string", "password": "string" }`

### Course Routes (`/course`)

- `POST /course/purchase` - Purchase a course (placeholder)
- `GET /course/preview` - Preview courses (placeholder)

### Admin Routes (`/admin`)

- Currently empty, under development

## Database Models

- **User**: email, password, firstname, lastname
- **Admin**: email, password, firstname, lastname
- **Course**: title, description, price, imageUrl, creatorId
- **Purchase**: userId, courseId

## Development Notes

- Passwords are stored in plain text. Consider implementing bcrypt for hashing.
- JWT tokens are not yet implemented in signin.
- Purchase and preview endpoints are placeholders.
- Admin routes need implementation.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

ISC