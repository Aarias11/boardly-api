// src/routes/userRoutes.js
import express from 'express';
import { getProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET /api/users/profile (private)
router.get('/profile', protect, getProfile);

export default router;