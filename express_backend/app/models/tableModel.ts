import { executeQuery } from '../config/db.js';

export const getTableData = async (schemaName: string, tableName: string) => {
  const query = `
    SELECT *
    FROM ${schemaName}.${tableName};
  `;
  const result = await executeQuery(query);
  return result;
};
