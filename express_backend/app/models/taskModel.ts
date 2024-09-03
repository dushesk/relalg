import { executeQuery, executeTransaction } from '../config/db.js';
import { Database, DBTable } from './databaseModel.js';

interface Task {
  id: number;
  description: string;
  teacherId: number;
  tables: string[];
}

class TaskManager {
  static async getAll(): Promise<Task[]> {
    const query = `
      SELECT 
        task_id, task_description, teacher_id,
        table_id, table_name, 
        database_id, database_name
      FROM app.task_details;
    `;
    const results = await executeQuery(query);
    return this.mapTasks(results);
  }

  static async getById(taskId: number): Promise<Task | null> {
    const query = `
      SELECT 
        task_id, task_description, teacher_id,
        table_id, table_name, 
        database_id, database_name
      FROM task_details
      WHERE task_id = $1
    `;
    const results = await executeQuery(query, [taskId]);
    const tasks = this.mapTasks(results);
    return tasks.length ? tasks[0] : null;
  }

  static async create(description: string, teacherId: number, tableIds: number[]): Promise<Task | null> {
    try {
      let newTask: Task | null = null;
      await executeTransaction(async (client) => {
        const taskQuery = 'INSERT INTO tasks (description, teacher_id) VALUES ($1, $2) RETURNING *';
        const taskResult = await client.query(taskQuery, [description, teacherId]);
        const task = taskResult.rows[0];

        const taskTablesQuery = 'INSERT INTO tasks_tables (task_id, table_id) VALUES ($1, $2)';
        for (const tableId of tableIds) {
          await client.query(taskTablesQuery, [task.id, tableId]);
        }

        newTask = await this.getById(task.id);
      });

      return newTask;
    } catch (error) {
      throw error;
    }
  }

  static async update(taskId: number, description: string, teacherId: number, tableIds: number[]): Promise<Task | null> {
    try {
      let updatedTask: Task | null = null;
      await executeTransaction(async (client) => {
        const taskQuery = 'UPDATE tasks SET description = $1, teacher_id = $2 WHERE id = $3 RETURNING *';
        await client.query(taskQuery, [description, teacherId, taskId]);

        const deleteTaskTablesQuery = 'DELETE FROM tasks_tables WHERE task_id = $1';
        await client.query(deleteTaskTablesQuery, [taskId]);

        const taskTablesQuery = 'INSERT INTO tasks_tables (task_id, table_id) VALUES ($1, $2)';
        for (const tableId of tableIds) {
          await client.query(taskTablesQuery, [taskId, tableId]);
        }

        updatedTask = await this.getById(taskId);
      });

      return updatedTask;
    } catch (error) {
      throw error;
    }
  }

  static async delete(taskId: number): Promise<void> {
    const query = 'DELETE FROM tasks WHERE id = $1';
    await executeQuery(query, [taskId]);
  }

  private static mapTasks(rows: any[]): Task[] {
    const tasksMap: { [key: number]: Task } = {};
    rows.forEach(row => {
      if (!tasksMap[row.task_id]) {
        tasksMap[row.task_id] = {
          id: row.task_id,
          description: row.task_description,
          teacherId: row.teacher_id,
          tables: []
        };
      }
      if (row.table_id) {
        tasksMap[row.task_id].tables.push(row.table_name);
      }
    });
    return Object.values(tasksMap);
  }
}

export { TaskManager, Task, DBTable, Database };
