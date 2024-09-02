import express from 'express';
import InstitutionController from './institutionController.js';

const router = express.Router();

router.get('/', InstitutionController.getAll);
router.get('/:id', InstitutionController.getById);
router.post('/', InstitutionController.create);
router.put('/:id', InstitutionController.update);
router.delete('/:id', InstitutionController.delete);

export default router;
