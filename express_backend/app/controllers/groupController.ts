import { Request, Response } from 'express';
import { GroupModel, Group } from './groupModel.js';

class GroupController {
  static async getAll(req: Request, res: Response) {
    try {
      const groups = await GroupModel.getAll();
      res.status(200).json(groups);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching groups' });
    }
  }

  static async getById(req: Request, res: Response) {
    const groupId = parseInt(req.params.id);
    try {
      const group = await GroupModel.getById(groupId);
      if (!group) {
        res.status(404).json({ error: 'Group not found' });
      } else {
        res.status(200).json(group);
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the group' });
    }
  }

  static async create(req: Request, res: Response) {
    const { name, institutionId } = req.body;
    try {
      const newGroup = await GroupModel.create(name, institutionId);
      res.status(201).json(newGroup);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the group' });
    }
  }

  static async update(req: Request, res: Response) {
    const groupId = parseInt(req.params.id);
    const { name, institutionId } = req.body;
    try {
      const updatedGroup = await GroupModel.update(groupId, name, institutionId);
      if (!updatedGroup) {
        res.status(404).json({ error: 'Group not found' });
      } else {
        res.status(200).json(updatedGroup);
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the group' });
    }
  }

  static async delete(req: Request, res: Response) {
    const groupId = parseInt(req.params.id);
    try {
      await GroupModel.delete(groupId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the group' });
    }
  }
}

export default GroupController;
