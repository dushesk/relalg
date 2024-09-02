import pg from 'pg';
const { Pool } = pg;

import dotenv from 'dotenv';

// Загрузка параметров подключения из .env файла
dotenv.config();

// Конфигурация подключения к базе данных PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'), // По умолчанию используем порт 5432
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Перегрузка функции executeQuery
async function executeQuery(query: string): Promise<any>;
async function executeQuery(query: string, params: any[]): Promise<any>;

// Реализация функции executeQuery
async function executeQuery(query: string, params?: any[]): Promise<any> {
  let client;
  try {
    client = await pool.connect();
    const result = params ? await client.query(query, params) : await client.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  } finally {
    if (client) client.release();
  }
}

// Функция для выполнения транзакции
async function executeTransaction(operations: (client: pg.PoolClient) => Promise<any>) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await operations(client);
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export { executeQuery, executeTransaction };
