import Task from "../models/Task.js";

// @desc    Get all tasks
// @route   GET /api/tasks
export const getAllTasks = async (req, res, next) => {
  try {
    // Search through db for all tasks
    const allTasks = await Task.find();
    // Confirmation of found tasks
    res.status(200).json(allTasks)
  } catch (err) {
    next(err)
  }
};

// @desc   Post tasks
// @route  Post /api/tasks
export const createTask = async (req, res, next) => {
  try {
    // Extracting title, description, status, board from input body
    const { title, description, status, board } = req.body
    // Creating new task into Task Schema/Collection/Table
    const newTask = new Task({ title, description, status, board });
    // Saving new task into DB
    const savedTask = await newTask.save()
    // Confirming new task was created
    res.status(201).json({ message: '✅ Task created successfully', task: savedTask })
  } catch (err) {
    next(err)
  }
};

// @desc   GET tasks by id
// @route  GET /api/tasks/:id
export const getTaskById = async (req, res, next) => {
  try {
    // Extracting id from path
    const { id } = req.params;
    // Searching for task via id in DB
    const task = await Task.findById(id)
    // Validator check if task with that id is not found
    if (!task) {
      return res.status(404).json({ error: "Unable to locate task by that id" })
    }
    // Confirming task was found
    res.status(200).json(task)
  } catch (err) {
    next(err)
  }
};

// @desc   DELETE tasks by id
// @route  DELETE /api/tasks/:id
export const deleteTask = async (req, res, next) => {
  try {
    // Extracting id from path
    const { id } = req.params;
    // Searching for task by id in DB
    const deletedTask = await Task.findByIdAndDelete(id);
    // Validator check if task with that id is not found
    if (!deletedTask) {
      return res.status(404).json({ error: "Unable to located task to delete" })
    }
    // Confirming task was found and deleted
    res.status(200).json({ message: "Task successfully deleted", task: deletedTask })
  } catch (err) {
    next(err)
  }
}

// @desc    Update task by id
// @route   PUT /api/tasks/:id
export const updatedTask = async (req, res, next) => {
  try {
    // Extracting id from path
    const { id } = req.params;
    // Extracting title, description, status, board from input body
    const { title, description, status, board } = req.body;
    // Searching for task by id in DB
    const updatedTask = await Task.findByIdAndUpdate(id, {
      title, description, status, board
    }, { new: true, runValidators: true })
    // Validator check if task with that id is not found
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" })
    }
    // Confirming task was found and updated
    res.status(200).json({ message: "Task successfully updated!", task: updatedTask })
  } catch (err) {
    next(err)
  }
}

