export interface TableHeaders {
  title: string;
  enableSorting?: boolean;
  sortKey?: string;
  render: (data: any) => string;
}
export interface TableProps {
  headers: TableHeaders[];
  dataTable: any[];
}
