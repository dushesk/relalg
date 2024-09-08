import express from 'express';
import InstitutionController from '../controllers/institutionController.js';

const router = express.Router();

router.get('/institutions', InstitutionController.getAll);
router.get('/institution/:id', InstitutionController.getById);
router.post('/institution', InstitutionController.create);
// router.put('/institution/:id', InstitutionController.update);
router.delete('/institution/:id', InstitutionController.delete);

export default router;
