import { Router } from 'express';
import { getAllCurrentTasks, createCurrentTask, deleteCurrentTask } from '../controllers/currentTaskController.js';

const router = Router();

// Получение всех текущих задач
router.get('/current-tasks', getAllCurrentTasks);

// Создание новой текущей задачи
router.post('/current-tasks', createCurrentTask);

// Удаление текущей задачи по id
router.delete('/current-tasks/:id', deleteCurrentTask);

export default router;
