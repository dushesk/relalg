import { Request, Response } from 'express';
import { UserModel, User } from '../models/userModel.js';

class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const users = await UserModel.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  }

  static async getById(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    try {
      const user = await UserModel.getById(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the user' });
    }
  }

  static async create(req: Request, res: Response) {
    const { lastName, firstName, middleName, email, password, roleName, groupName, institutionName } = req.body;
    try {
      const newUser = await UserModel.create(lastName, firstName, middleName, email, password, roleName, groupName, institutionName);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the user' });
    }
  }

  static async update(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    const { lastName, firstName, middleName, email, groupName, institutionName } = req.body;
    try {
      const updatedUser = await UserModel.update(userId, lastName, firstName, middleName, email, groupName, institutionName);
      if (!updatedUser) {
        res.status(404).json({ error: 'User not found' });
      } else {
        res.status(200).json(updatedUser);
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the user' });
    }
  }

  static async delete(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    try {
      await UserModel.delete(userId);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the user' });
    }
  }

  static async getByGroupName(req: Request, res: Response) {
    const groupName = req.params.groupName;
    try {
      const users = await UserModel.getByGroupName(groupName);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  }
}

export default UserController;
