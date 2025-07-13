import express from 'express';
import { 
  getAllTasks,
  createTask,
  getTaskById,
  updatedTask,
  deleteTask
} from '../controllers/taskController.js'

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router()

router.use(protect)

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTaskById);
router.put('/:id', updatedTask);
router.delete('/:id', deleteTask);

export default router;