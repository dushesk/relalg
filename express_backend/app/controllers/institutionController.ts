import { Request, Response } from 'express';
import { InstitutionModel, Institution } from '../models/institutionModel';

class InstitutionController {
  static async getAll(req: Request, res: Response) {
    try {
      const institutions = await InstitutionModel.getAll();
      res.status(200).json(institutions);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching institutions' });
    }
  }

  static async getById(req: Request, res: Response) {
    const institutionId = parseInt(req.params.id);
    try {
      const institution = await InstitutionModel.getById(institutionId);
      if (!institution) {
        res.status(404).json({ error: 'Institution not found' });
      } else {
        res.status(200).json(institution);
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the institution' });
    }
  }

  static async create(req: Request, res: Response) {
    const { name } = req.body;
    try {
      const newInstitution = await InstitutionModel.create(name);
      res.status(201).json(newInstitution);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the institution' });
    }
  }

  static async update(req: Request, res: Response) {
    const institutionId = parseInt(req.params.id);
    const { name } = req.body;
    try {
      const updatedInstitution = await InstitutionModel.update(institutionId, name);
      if (!updatedInstitution) {
        res.status(404).json({ error: 'Institution not found' });
      } else {
        res.status(200).json(updatedInstitution);
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the institution' });
    }
  }

  static async delete(req: Request, res: Response) {
    const institutionId = parseInt(req.params.id);
    try {
      await InstitutionModel.delete(institutionId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the institution' });
    }
  }
}

export default InstitutionController;
