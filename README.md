# WTWR Project API

A secure REST API built with Node.js,Express, and MongoDB for managing clothing items and user accouts.

This backend supports authentication, profile management, and ownership-base authorization using JWT

**Setup:** clone the repo, run `npm install`, start MongoDB, then run `npm run dev` (server defaults to `http://localhost:3001`, but you can override by creating a `.env` file with `PORT=3002` or similar).

**Tech Stack**

- Node.js

- Express.js

- MongoDB & Mongoose

- JWT Authentication

- bcrypt

- dotenv

**What this project demonstrates**

*Secure API desgin
*Middleware-base route protection
*Modular backend architecture
*Real World authentication patterns

**Notes:** All requests currently use a temporary hardcoded user ID. Responses return JSON, with proper 400/403/404/500 status codes for errors.

**Test with curl or Postman** by sending requests to the endpoints above.

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/16YDFcyss6nkM8kl8CcQvyhfTnklmk2pw/view?usp=sharing), where I describe my
project and some challenges I faced while building it.
