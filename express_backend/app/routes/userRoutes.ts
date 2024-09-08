import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.get('/users', UserController.getAll);
router.get('/user/:id', UserController.getById);
router.post('/user', UserController.create);
// router.put('/:id', UserController.update);
router.delete('/user/:id', UserController.delete);
router.get('/users/:groupName', UserController.getByGroupName);

export default router;
