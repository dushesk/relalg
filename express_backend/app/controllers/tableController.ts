import { getTableData } from './tableModel.js';

export const fetchTableData = async (req: any, res: any) => {
  const { schemaName, tableName } = req.params;

  try {
    const data = await getTableData(schemaName, tableName);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching table data' });
  }
};
