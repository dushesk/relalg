import { Request, Response } from 'express';
import { TaskManager } from '../models/taskModel';

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await TaskManager.getAll();
    console.log(tasks);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tasks' });
  }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id, 10);
  try {
    const task = await TaskManager.getById(taskId);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the task' });
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { description, teacherId, tableIds } = req.body;
  try {
    const newTask = await TaskManager.create(description, teacherId, tableIds);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the task' });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id, 10);
  const { description, teacherId, tableIds } = req.body;
  try {
    const updatedTask = await TaskManager.update(taskId, description, teacherId, tableIds);
    if (updatedTask) {
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the task' });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const taskId = parseInt(req.params.id, 10);
  try {
    await TaskManager.delete(taskId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the task' });
  }
};
