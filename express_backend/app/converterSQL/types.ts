export type RelAlgExpression =
  | Select
  | Project
  | NaturalJoin
  | Rename
  | Union
  | Difference
  | CartesianProduct
  | Table;

export interface Select {
  type: 'select';
  condition: string;
  relation: RelAlgExpression;
}

export interface Project {
  type: 'project';
  attributes: string[];
  relation: RelAlgExpression;
}

export interface NaturalJoin {
  type: 'naturalJoin';
  left: RelAlgExpression;
  right: RelAlgExpression;
  condition: string;
}

export interface Rename {
  type: 'rename';
  newName: string;
  relation: RelAlgExpression;
}

export interface Union {
  type: 'union';
  left: RelAlgExpression;
  right: RelAlgExpression;
}

export interface Difference {
  type: 'difference';
  left: RelAlgExpression;
  right: RelAlgExpression;
}

export interface CartesianProduct {
  type: 'cartesianProduct';
  left: RelAlgExpression;
  right: RelAlgExpression;
}

export interface Table {
  type: 'table';
  name: string;
}
