import express from 'express';
import UserController from './userController.js';

const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);
router.get('/group/:groupName', UserController.getByGroupName);

export default router;
