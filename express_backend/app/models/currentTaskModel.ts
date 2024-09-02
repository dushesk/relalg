import { executeQuery } from '../../config/db';

interface CurrentTask {
  id: number;
  group: string;
  task: string;
  assignedDate: Date;
  dueDate: Date;
}

class CurrentTaskModel {
  static async getAll(): Promise<CurrentTask[]> {
    try {
      const query = `
        SELECT 
          ct.id,
          g.name AS group,
          t.description AS task,
          ct.assigned_date AS assignedDate,
          ct.due_date AS dueDate
        FROM 
          current_tasks ct
        JOIN 
          groups g ON ct.group_id = g.id
        JOIN 
          tasks t ON ct.task_id = t.id
      `;
      const results = await executeQuery(query);
      return results.rows.map((row: any) => ({
        id: row.id,
        group: row.group,
        task: row.task,
        assignedDate: row.assignedDate,
        dueDate: row.dueDate,
      }));
    } catch (error: any) {
      throw new Error(`Failed to fetch current tasks: ${error.message}`);
    }
  }

  static async create(groupName: string, taskDescription: string, dueDate: Date): Promise<CurrentTask | null> {
    try {
      let newTask: CurrentTask | null = null;
      const groupQuery = 'SELECT id FROM groups WHERE name = $1';
      const groupResult = await executeQuery(groupQuery, [groupName]);
      const groupId = groupResult.rows[0]?.id;

      if (!groupId) {
        throw new Error('Group not found');
      }

      const taskQuery = 'INSERT INTO tasks (description) VALUES ($1) RETURNING id';
      const taskResult = await executeQuery(taskQuery, [taskDescription]);
      const taskId = taskResult.rows[0]?.id;

      if (!taskId) {
        throw new Error('Failed to create task');
      }

      const insertQuery = `
        INSERT INTO current_tasks (group_id, task_id, due_date)
        VALUES ($1, $2, $3)
        RETURNING id, assigned_date, due_date
      `;
      const insertResult = await executeQuery(insertQuery, [groupId, taskId, dueDate]);

      if (insertResult.rows.length > 0) {
        newTask = {
          id: insertResult.rows[0].id,
          group: groupName,
          task: taskDescription,
          assignedDate: insertResult.rows[0].assigned_date,
          dueDate: insertResult.rows[0].due_date,
        };
      }

      return newTask;
    } catch (error: any) {
      throw new Error(`Failed to create current task: ${error.message}`);
    }
  }

  static async delete(taskId: number): Promise<void> {
    try {
      const query = 'DELETE FROM current_tasks WHERE id = $1';
      await executeQuery(query, [taskId]);
    } catch (error: any) {
      throw new Error(`Failed to delete current task: ${error.message}`);
    }
  }
}

export { CurrentTaskModel, CurrentTask };
