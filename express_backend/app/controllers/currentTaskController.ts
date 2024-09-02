import { Request, Response } from 'express';
import { CurrentTaskModel } from './currentTaskModel.js';

export async function getAllCurrentTasks(req: Request, res: Response): Promise<void> {
  try {
    const currentTasks = await CurrentTaskModel.getAll();
    res.json(currentTasks);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function createCurrentTask(req: Request, res: Response): Promise<void> {
  const { groupName, taskDescription, dueDate } = req.body;
  try {
    const newTask = await CurrentTaskModel.create(groupName, taskDescription, dueDate);
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteCurrentTask(req: Request, res: Response): Promise<void> {
  const taskId = parseInt(req.params.id, 10);
  try {
    await CurrentTaskModel.delete(taskId);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
