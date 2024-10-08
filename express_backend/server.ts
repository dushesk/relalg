import express, { Request, Response } from 'express';
import { parseRelAlgExpression } from './app/converterSQL/parser.js';
import { RelAlgExpression } from './app/converterSQL/types.js';
import { translateToSQL } from './app/converterSQL/translator.js';
import { executeQuery } from './app/config/db.js';
import databaseRoutes from './app/routes/databaseRoutes.js';
import taskRoutes from './app/routes/taskRoutes.js';
import tableRoutes from './app/routes/tableRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Эквивалент __filename
const __filename = fileURLToPath(import.meta.url);

// Эквивалент __dirname
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.json());

// Подключение маршрутов
app.use('/api', databaseRoutes); 
app.use('/api', taskRoutes);
app.use('/api', tableRoutes);

app.use(express.static(path.join(__dirname, '../client/build')));

// Обработка всех маршрутов, кроме API, для React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react_frontend/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});