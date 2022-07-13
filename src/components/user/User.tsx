import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useQueryContext } from "hooks/useQueryContext";
import { useRandomUser } from "hooks/useRandomUser";
import { TableHeaders } from "components/table/Table.interface";
import { Table } from "components/table/Table";
import format from "date-fns/format";

const tableHeaders: TableHeaders[] = [
  {
    title: "Username",
    enableSorting: false,
    sortKey: "username",
    render: (data: any) => data.login.username,
  },
  {
    title: "Name",
    enableSorting: true,
    sortKey: "name",
    render: (data: any) => `${data.name.first} ${data.name.last}`,
  },
  {
    title: "Email",
    enableSorting: true,
    sortKey: "email",
    render: (data: any) => data.email,
  },
  {
    title: "Gender",
    enableSorting: true,
    sortKey: "gender",
    render: (data: any) => data.gender,
  },
  {
    title: "Registered Date",
    enableSorting: true,
    sortKey: "registerDate",
    render: (data: any) =>
      format(new Date(data.registered.date), "dd-MM-yyyy HH:mm"),
  },
];
export const User = () => {
  const { query } = useQueryContext();
  const { data, isLoading, isError } = useRandomUser(query);
  const [dataTable, setDataTable] = useState([]);

  //to avoid glimps
  useEffect(() => {
    if (data) {
      setDataTable(data.results);
    }
  }, [data]);
  if (isError)
    return <div>Something wrong with the server, please refresh the page</div>;
  return (
    <Box>
      {dataTable.length > 0 && (
        <Table headers={tableHeaders} dataTable={dataTable}></Table>
      )}

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
