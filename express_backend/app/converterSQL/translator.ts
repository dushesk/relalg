import { RelAlgExpression, Select, Project, NaturalJoin, Rename, Union, Difference, CartesianProduct, Table } from './types';

let subqueryCounter = 0;

function getSubqueryAlias(): string {
  subqueryCounter += 1;
  return `subquery_${subqueryCounter}`;
}

export function translateToSQL(expression: RelAlgExpression): string {
  switch (expression.type) {
    case 'select':
      const selectExpr = expression as Select;
      const selectSubqueryAlias = getSubqueryAlias();
      return `SELECT * FROM (${translateToSQL(selectExpr.relation)}) AS ${selectSubqueryAlias} WHERE ${selectExpr.condition}`;
    case 'project':
      const projectExpr = expression as Project;
      const projectSubqueryAlias = getSubqueryAlias();
      return `SELECT ${projectExpr.attributes.join(', ')} FROM (${translateToSQL(projectExpr.relation)}) AS ${projectSubqueryAlias}`;
    case 'naturalJoin':
      const joinExpr = expression as NaturalJoin;
      const joinLeftAlias = getSubqueryAlias();
      const joinRightAlias = getSubqueryAlias();
      return `SELECT * FROM (${translateToSQL(joinExpr.left)}) AS ${joinLeftAlias} NATURAL JOIN (${translateToSQL(joinExpr.right)}) AS ${joinRightAlias}`;
    case 'rename':
      const renameExpr = expression as Rename;
      return `SELECT * FROM (${translateToSQL(renameExpr.relation)}) AS ${renameExpr.newName}`;
    case 'union':
      const unionExpr = expression as Union;
      return `(${translateToSQL(unionExpr.left)}) UNION (${translateToSQL(unionExpr.right)})`;
    case 'difference':
      const differenceExpr = expression as Difference;
      return `(${translateToSQL(differenceExpr.left)}) EXCEPT (${translateToSQL(differenceExpr.right)})`;
    case 'cartesianProduct':
      const cartesianExpr = expression as CartesianProduct;
      const cartesianLeftAlias = getSubqueryAlias();
      const cartesianRightAlias = getSubqueryAlias();
      return `SELECT * FROM (${translateToSQL(cartesianExpr.left)}) AS ${cartesianLeftAlias} CROSS JOIN (${translateToSQL(cartesianExpr.right)}) AS ${cartesianRightAlias}`;
    case 'table':
      const tableExpr = expression as Table;
      return `SELECT * FROM ${tableExpr.name}`;
    default:
      throw new Error('Неизвестный тип выражения: ' + (expression as any).type);
  }
}
