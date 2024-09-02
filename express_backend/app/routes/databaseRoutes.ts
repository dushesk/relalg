import { Router } from 'express';
import { getAllDatabases, getTablesByDatabaseName } from './databaseController.js';

const router = Router();

router.get('/databases', getAllDatabases);
router.get('/databases/:name/tables', getTablesByDatabaseName);

export default router;
