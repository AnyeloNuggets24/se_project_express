# WTWR Project API

A simple REST API for managing clothing items. Users can create accounts, add items, like/unlike items, and delete their own items. Built with Node.js, Express, and MongoDB.  

**Setup:** clone the repo, run `npm install`, start MongoDB, then run `npm run dev` (server runs on `http://localhost:3001`).  

**Endpoints:**  
- Users: `GET /users`, `GET /users/:id`, `POST /users`  
- Items: `GET /items`, `GET /items/:id`, `POST /items`, `DELETE /items/:id`, `PUT /items/:id/likes`, `DELETE /items/:id/likes`  

**Notes:** All requests currently use a temporary hardcoded user ID. Responses return JSON, with proper 400/403/404/500 status codes for errors.  

**Test with curl or Postman** by sending requests to the endpoints above.
