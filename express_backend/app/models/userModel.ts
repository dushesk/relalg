import { executeQuery, executeTransaction } from '../../config/db.js';

interface User {
  id: number;
  lastName: string;
  firstName: string;
  middleName: string;
  email: string;
  roleName: string;
  groupName: string;
  institutionName: string;
}

class UserManager {
  static async getAll(): Promise<User[]> {
    const query = 'SELECT * FROM user_info';
    const results = await executeQuery(query);
    return results.map((row: any) => ({
      id: row.user_id,
      lastName: row.user_lastname,
      firstName: row.user_firstname,
      middleName: row.user_middlename,
      email: row.user_email,
      roleName: row.role_name,
      groupName: row.group_name,
      institutionName: row.institution_name
    }));
  }

  static async getById(userId: number): Promise<User | null> {
    const query = 'SELECT * FROM user_info WHERE user_id = $1';
    const results = await executeQuery(query, [userId]);
    if (results.length === 0) {
      return null;
    }
    const row = results[0];
    return {
      id: row.user_id,
      lastName: row.user_lastname,
      firstName: row.user_firstname,
      middleName: row.user_middlename,
      email: row.user_email,
      roleName: row.role_name,
      groupName: row.group_name,
      institutionName: row.institution_name
    };
  }

  static async create(lastName: string, firstName: string, middleName: string, email: string, password: string, roleName: string, groupName: string, institutionName: string): Promise<User | null> {
    try {
      let newUser: User | null = null;
      await executeTransaction(async (client) => {
        const roleQuery = 'SELECT id FROM roles WHERE name = $1';
        const roleResult = await client.query(roleQuery, [roleName]);
        const roleId = roleResult.rows[0]?.id;

        const groupQuery = 'SELECT id FROM groups WHERE name = $1';
        const groupResult = await client.query(groupQuery, [groupName]);
        const groupId = groupResult.rows[0]?.id;

        const institutionQuery = 'SELECT id FROM institutions WHERE name = $1';
        const institutionResult = await client.query(institutionQuery, [institutionName]);
        const institutionId = institutionResult.rows[0]?.id;

        const userQuery = 'INSERT INTO users (last_name, first_name, middle_name, email, password, role_id, group_id, institution_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
        const userResult = await client.query(userQuery, [lastName, firstName, middleName, email, password, roleId, groupId, institutionId]);
        newUser = {
          id: userResult.rows[0].id,
          lastName,
          firstName,
          middleName,
          email,
          roleName,
          groupName,
          institutionName
        };
      });
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  static async update(userId: number, lastName: string, firstName: string, middleName: string, email: string, groupName: string, institutionName: string): Promise<User | null> {
    try {
      let updatedUser: User | null = null;
      await executeTransaction(async (client) => {
        const groupQuery = 'SELECT id FROM groups WHERE name = $1';
        const groupResult = await client.query(groupQuery, [groupName]);
        const groupId = groupResult.rows[0]?.id;

        const institutionQuery = 'SELECT id FROM institutions WHERE name = $1';
        const institutionResult = await client.query(institutionQuery, [institutionName]);
        const institutionId = institutionResult.rows[0]?.id;

        const userQuery = 'UPDATE users SET last_name = $1, first_name = $2, middle_name = $3, email = $4, group_id = $5, institution_id = $6 WHERE id = $7 RETURNING *';
        const userResult = await client.query(userQuery, [lastName, firstName, middleName, email, groupId, institutionId, userId]);
        updatedUser = {
          id: userResult.rows[0].id,
          lastName,
          firstName,
          middleName,
          email,
          roleName: userResult.rows[0].role_name,
          groupName,
          institutionName
        };
      });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  static async delete(userId: number): Promise<void> {
    const query = 'DELETE FROM users WHERE id = $1';
    await executeQuery(query, [userId]);
  }

  static async getByGroupName(groupName: string): Promise<User[]> {
    try {
      // Находим id группы по её названию
      const groupQuery = 'SELECT id FROM groups WHERE name = $1';
      const groupResult = await executeQuery(groupQuery, [groupName]);
      const groupId = groupResult.rows[0]?.id;

      if (!groupId) {
        throw new Error('Group not found');
      }

      // Запрос пользователей по найденному id группы
      const userQuery = `
        SELECT 
          user_id,
          user_lastname,
          user_firstname,
          user_middlename,
          user_email,
          role_name,
          group_name,
          institution_name
        FROM 
          user_info
        WHERE 
          group_name = $1`;

      const userResult = await executeQuery(userQuery, [groupId]);
      return userResult.rows.map((row: any) => ({
        id: row.user_id,
        lastName: row.user_lastname,
        firstName: row.user_firstname,
        middleName: row.user_middlename,
        email: row.user_email,
        roleName: row.role_name,
        groupName: row.group_name,
        institutionName: row.institution_name
      }));
    } catch (error) {
      throw error;
    }
  }

  static async getGroupsByInstitutionName(institutionName: string): Promise<string[]> {
    try {
      // Находим id института по его названию
      const institutionQuery = 'SELECT id FROM institutions WHERE name = $1';
      const institutionResult = await executeQuery(institutionQuery, [institutionName]);
      const institutionId = institutionResult.rows[0]?.id;

      if (!institutionId) {
        throw new Error('Institution not found');
      }

      // Запрос названий групп по найденному id института
      const groupQuery = 'SELECT name FROM groups WHERE institution_id = $1';
      const groupResult = await executeQuery(groupQuery, [institutionId]);
      return groupResult.rows.map((row: any) => row.name);
    } catch (error) {
      throw error;
    }
  }
}

export { UserManager as UserModel, User };
