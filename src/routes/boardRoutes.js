import express from 'express';
import {
  getAllBoards,
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard
} from '../controllers/boardController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect)

router.get('/', getAllBoards);
router.post('/', createBoard);
router.get('/:id', getBoardById);
router.put('/:id', updateBoard);
router.delete('/:id', deleteBoard);

export default router;