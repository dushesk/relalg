// index.ts

import { parseRelAlgExpression } from './app/converterSQL/parser.js';
import { translateToSQL } from './app/converterSQL/translator.js';

// Пример использования
const expression = 'σ[age > 30](employees)';
const parsedExpression = parseRelAlgExpression(expression);
const sqlQuery = translateToSQL(parsedExpression);

// console.log(sqlQuery);
