# Inventory Management System - How to Use

This repository contains a Node.js/Express REST API for managing inventory items and categories using MongoDB.

## Prerequisites

- **Node.js** (v14+ recommended)
- **MongoDB** instance (local or cloud, e.g. MongoDB Atlas)
- **npm** (comes with Node.js)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Click2repair/Inventory-management-.git
   cd Inventory-management-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=4000
     NODE_ENV=development
     ```

## Running the Application

Start the server:

```bash
npm start
```
By default, the application runs on `http://localhost:4000`.

## API Endpoints

### Categories

- `POST   /api/categories` - Create a new category
- `GET    /api/categories` - List all categories
- `GET    /api/categories/:id` - Get category by ID
- `PUT    /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Items

- `POST   /api/items` - Create a new item
- `GET    /api/items` - List all items
- `GET    /api/items/:id` - Get item by ID
- `PUT    /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item
- `GET    /api/items/by-category/:categoryId` - List items by category

### Health Check

- `GET /health` - Returns `{ ok: true }` if the server is running

## Project Structure

- `src/app.js` - Main Express app and routes
- `src/server.js` - Entry point; loads env, connects to MongoDB, starts server
- `src/routes/` - API route definitions
- `src/controllers/` - Request handlers for items and categories
- `src/models/` - Mongoose models
- `src/config/dB.js` - MongoDB connection logic
- `src/middlewares/errorHandler.js` - Error handling middleware

## Notes

- All API responses are in JSON.
- Ensure your MongoDB server is running and accessible via the `MONGO_URI` you provide.
- Error details are shown in non-production environments.

## Example Request

Create a category:
```bash
curl -X POST http://localhost:4000/api/categories \
  -H 'Content-Type: application/json' \
  -d '{"name":"Electronics"}'
```

## License

MIT (see LICENSE file)
