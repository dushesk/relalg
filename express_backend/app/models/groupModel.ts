import { executeQuery, executeTransaction } from '../../config/db.js';

interface Group {
  id: number;
  name: string;
  institutionId: number;
}

class GroupModel {
  static async getAll(): Promise<Group[]> {
    const query = 'SELECT * FROM groups';
    const results = await executeQuery(query);
    return results.rows.map((row: any) => ({
      id: row.id,
      name: row.name,
      institutionId: row.institution_id
    }));
  }

  static async getById(groupId: number): Promise<Group | null> {
    const query = 'SELECT * FROM groups WHERE id = $1';
    const results = await executeQuery(query, [groupId]);
    if (results.rows.length === 0) {
      return null;
    }
    const row = results.rows[0];
    return {
      id: row.id,
      name: row.name,
      institutionId: row.institution_id
    };
  }

  static async create(name: string, institutionId: number): Promise<Group | null> {
    try {
      let newGroup: Group | null = null;
      await executeTransaction(async (client) => {
        const query = 'INSERT INTO groups (name, institution_id) VALUES ($1, $2) RETURNING *';
        const result = await client.query(query, [name, institutionId]);
        newGroup = {
          id: result.rows[0].id,
          name: result.rows[0].name,
          institutionId: result.rows[0].institution_id
        };
      });
      return newGroup;
    } catch (error) {
      throw error;
    }
  }

  static async update(groupId: number, name: string, institutionId: number): Promise<Group | null> {
    try {
      let updatedGroup: Group | null = null;
      await executeTransaction(async (client) => {
        const query = 'UPDATE groups SET name = $1, institution_id = $2 WHERE id = $3 RETURNING *';
        const result = await client.query(query, [name, institutionId, groupId]);
        updatedGroup = {
          id: result.rows[0].id,
          name: result.rows[0].name,
          institutionId: result.rows[0].institution_id
        };
      });
      return updatedGroup;
    } catch (error) {
      throw error;
    }
  }

  static async delete(groupId: number): Promise<void> {
    const query = 'DELETE FROM groups WHERE id = $1';
    await executeQuery(query, [groupId]);
  }
}

export { GroupModel, Group };
