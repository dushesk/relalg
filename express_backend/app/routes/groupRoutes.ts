import express from 'express';
import GroupController from './groupController.js';

const router = express.Router();

router.get('/', GroupController.getAll);
router.get('/:id', GroupController.getById);
router.post('/', GroupController.create);
router.put('/:id', GroupController.update);
router.delete('/:id', GroupController.delete);

export default router;
