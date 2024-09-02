import { Router } from 'express';
import { fetchTableData } from './tableController.js';

const router = Router();

router.get('/tables/:schemaName/:tableName', fetchTableData);

export default router;
