import express from 'express';
import GroupController from '../controllers/groupController.js';

const router = express.Router();

router.get('/groups', GroupController.getAll);
router.get('/group/:id', GroupController.getById);
router.post('/group', GroupController.create);
//router.put('/group/:id', GroupController.update);
router.delete('/group/:id', GroupController.delete);

export default router;
