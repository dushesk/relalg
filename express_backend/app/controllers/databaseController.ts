import { Request, Response } from 'express';
import { DatabaseManager } from './databaseModel.js';

export const getAllDatabases = async (req: Request, res: Response): Promise<void> => {
  try {
    const databases = await DatabaseManager.getAllDatabases();
    res.json(databases);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching databases' });
  }
};

export const getTablesByDatabaseName = async (req: Request, res: Response): Promise<void> => {
  const databaseName = req.params.name;
  try {
    const tables = await DatabaseManager.getTablesByDatabaseName(databaseName);
    res.json(tables);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tables' });
  }
};
