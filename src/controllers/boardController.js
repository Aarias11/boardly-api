import Board from '../models/Board.js';

// GET all boards
export const getAllBoards = async (req, res, next) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (err) {
    next(err);
  }
};

// POST new board
export const createBoard = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newBoard = new Board({ title, description, owner: req.user._id });
    const savedBoard = await newBoard.save();
    res.status(201).json(savedBoard);
  } catch (err) {
    next(err);
  }
};

// GET board by ID
export const getBoardById = async (req, res, next) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) return res.status(404).json({ error: 'Board not found' });
    res.status(200).json(board);
  } catch (err) {
    next(err);
  }
};

// PUT update board
export const updateBoard = async (req, res, next) => {
  try {
    const updated = await Board.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Board not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE board
export const deleteBoard = async (req, res, next) => {
  try {
    const deleted = await Board.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Board not found' });
    res.status(200).json({ message: 'Deleted successfully', board: deleted });
  } catch (err) {
    next(err);
  }
};