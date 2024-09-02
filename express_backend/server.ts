import express, { Request, Response } from 'express';
import { parseRelAlgExpression } from './converterSQL/parser.js';
import { RelAlgExpression } from './converterSQL/types.js';
import { translateToSQL } from './converterSQL/translator.js';
import { executeQuery } from './config/db.js';
import databaseRoutes from './modules/databases/databaseRoutes.js';
import taskRoutes from './modules/tasks/taskRoutes.js';
import tableRoutes from './modules/tables/tableRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Эквивалент __filename
const __filename = fileURLToPath(import.meta.url);

// Эквивалент __dirname
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Подключение маршрутов
app.use('/api', databaseRoutes); 
app.use('/api', taskRoutes);
app.use('/api', tableRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));

// Обработка всех маршрутов, кроме API, для React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});