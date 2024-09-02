import { executeQuery, executeTransaction } from '../../config/db.js';

interface StudentProgress {
  id: number;
  currentTaskId: number;
  submissionDate?: Date;
  grade: number;
  feedback?: string;
}

class StudentProgressModel {
  static async getAll(): Promise<StudentProgress[]> {
    const query = 'SELECT * FROM student_progress';
    const results = await executeQuery(query);
    return results.rows;
  }

  static async getById(progressId: number): Promise<StudentProgress | null> {
    const query = 'SELECT * FROM student_progress WHERE id = $1';
    const result = await executeQuery(query, [progressId]);
    return result.rows[0] || null;
  }

  static async create(currentTaskId: number, grade: number, feedback?: string): Promise<StudentProgress | null> {
    try {
      let newProgress: StudentProgress | null = null;
      await executeTransaction(async (client) => {
        const query = `
          INSERT INTO student_progress (current_task_id, grade, feedback)
          VALUES ($1, $2, $3)
          RETURNING *`;
        const result = await client.query(query, [currentTaskId, grade, feedback]);
        newProgress = result.rows[0];
      });
      return newProgress;
    } catch (error) {
      throw error;
    }
  }

  static async delete(progressId: number): Promise<void> {
    const query = 'DELETE FROM student_progress WHERE id = $1';
    await executeQuery(query, [progressId]);
  }
}

export { StudentProgressModel, StudentProgress };
