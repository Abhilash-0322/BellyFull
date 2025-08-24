require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const connectDB = require('./config/database');
const indexRoutes = require('./routes/index');

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
connectDB();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"],
        },
    },
}));

// Middleware
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: process.env.NODE_ENV === 'production' ? '1y' : '0'
}));

// Debug middleware for static files in production
if (process.env.NODE_ENV === 'production') {
    app.use('/css', express.static(path.join(__dirname, 'public/css')));
    app.use('/images', express.static(path.join(__dirname, 'public/images')));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', indexRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`BellyFull server running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});