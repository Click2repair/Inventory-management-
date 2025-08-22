const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const categoryRoutes = require('./routes/categoryRoutes');
const itemRoutes = require('./routes/itemRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware: JSON body parser and CORS
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/items', itemRoutes);

// Health check
app.get('/health', (req, res) => res.json({ ok: true }));

// Error handler (after routes)
app.use(errorHandler);

module.exports = app;

