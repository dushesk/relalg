import { parseRelAlgExpression } from '../app/converterSQL/parser';
import { translateToSQL } from '../app/converterSQL/translator';

describe('Testing relational algebra parser and SQL translator', () => {
  it('should parse a simple projection expression', () => {
    const expression = 'π[first_name,second_name](employees)';
    const parsed = parseRelAlgExpression(expression);
    expect(parsed).toEqual({
      operation: 'π',
      columns: ['first_name', 'second_name'],
      relation: 'employees',
    });
  });

  it('should translate parsed expression to SQL', () => {
    const parsed = {
      operation: 'π',
      columns: ['first_name', 'second_name'],
      relation: 'employees',
    };
    const sqlQuery = translateToSQL(parsed);
    expect(sqlQuery).toBe('SELECT first_name, second_name FROM employees');
  });

  it('should handle selection with condition', () => {
    const expression = 'σ[age > 30](employees)';
    const parsed = parseRelAlgExpression(expression);
    expect(parsed).toEqual({
      operation: 'σ',
      condition: 'age > 30',
      relation: 'employees',
    });

    const sqlQuery = translateToSQL(parsed);
    expect(sqlQuery).toBe('SELECT * FROM employees WHERE age > 30');
  });

  it('should handle combination of selection and projection', () => {
    const expression = 'π[first_name,second_name](σ[age > 30](employees))';
    const parsed = parseRelAlgExpression(expression);
    expect(parsed).toEqual({
      operation: 'π',
      columns: ['first_name', 'second_name'],
      relation: {
        operation: 'σ',
        condition: 'age > 30',
        relation: 'employees',
      },
    });

    const sqlQuery = translateToSQL(parsed);
    expect(sqlQuery).toBe('SELECT first_name, second_name FROM employees WHERE age > 30');
  });
});
