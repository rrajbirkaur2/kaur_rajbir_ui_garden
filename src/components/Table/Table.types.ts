export interface TableProps {
  headers: string[];
  data: string[][];
  footer?: string[];
}

export interface TableHeaderProps {
  headers: string[];
}

export interface TableRowProps {
  cells: string[];
}

export interface TableCellProps {
  children: React.ReactNode;
}

export interface TableFooterProps {
  footer: string[];
}