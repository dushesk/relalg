import { executeQuery } from '../../config/db.js';

interface Database {
  id: number;
  name: string;
}

interface DBTable {
  id: number;
  name: string;
  database: Database;
}

class DatabaseManager {
  static async getAllDatabases(): Promise<Database[]> {
    const query = 'SELECT id, name FROM app.databases;';
    const results = await executeQuery(query);
    console.log(results);
    return results.map((row: any) => ({
      id: row.id,
      name: row.name,
    }));
  }

  static async getTablesByDatabaseName(databaseName: string): Promise<DBTable[]> {
    const query = `
      SELECT t.id, t.name, t.database_id, d.name as database_name
      FROM app.tables t
      JOIN app.databases d ON t.database_id = d.id
      WHERE d.name = $1
    `;
    const results = await executeQuery(query, [databaseName]);
    return results.map((row: any) => ({
      id: row.id,
      name: row.name,
      database: {
        id: row.database_id,
        name: row.database_name
      }
    }));
  }
}

export { DatabaseManager, Database, DBTable };
