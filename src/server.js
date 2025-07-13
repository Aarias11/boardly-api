import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../src/config/db.js';
import authRoutes from '../src/routes/authRoutes.js';
import boardingRoutes from '../src/routes/boardRoutes.js';
import taskRoutes from '../src/routes/taskRoutes.js';
import errorHandler from '../src/middleware/errorHandler.js';

dotenv.config();

const app = express();
app.use(express.json());

// DB connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/boards', boardingRoutes);
app.use('/api/tasks', taskRoutes);

// Error Handling
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
