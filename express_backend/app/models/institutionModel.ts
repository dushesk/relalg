import { executeQuery, executeTransaction } from '../config/db.js';

interface Institution {
  id: number;
  name: string;
}

class InstitutionModel {
  static async getAll(): Promise<Institution[]> {
    const query = 'SELECT * FROM institutions';
    const results = await executeQuery(query);
    return results.rows.map((row: any) => ({
      id: row.id,
      name: row.name
    }));
  }

  static async getById(institutionId: number): Promise<Institution | null> {
    const query = 'SELECT * FROM institutions WHERE id = $1';
    const results = await executeQuery(query, [institutionId]);
    if (results.rows.length === 0) {
      return null;
    }
    const row = results.rows[0];
    return {
      id: row.id,
      name: row.name
    };
  }

  static async create(name: string): Promise<Institution | null> {
    try {
      let newInstitution: Institution | null = null;
      await executeTransaction(async (client) => {
        const query = 'INSERT INTO institutions (name) VALUES ($1) RETURNING *';
        const result = await client.query(query, [name]);
        newInstitution = {
          id: result.rows[0].id,
          name: result.rows[0].name
        };
      });
      return newInstitution;
    } catch (error) {
      throw error;
    }
  }

  static async update(institutionId: number, name: string): Promise<Institution | null> {
    try {
      let updatedInstitution: Institution | null = null;
      await executeTransaction(async (client) => {
        const query = 'UPDATE institutions SET name = $1 WHERE id = $2 RETURNING *';
        const result = await client.query(query, [name, institutionId]);
        updatedInstitution = {
          id: result.rows[0].id,
          name: result.rows[0].name
        };
      });
      return updatedInstitution;
    } catch (error) {
      throw error;
    }
  }

  static async delete(institutionId: number): Promise<void> {
    const query = 'DELETE FROM institutions WHERE id = $1';
    await executeQuery(query, [institutionId]);
  }
}

export { InstitutionModel, Institution };
