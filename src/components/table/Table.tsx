import { useQueryContext } from "hooks/useQueryContext";
import {
  Grid,
  Pagination,
  Paper,
  Table as MUITable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ChangeEvent } from "react";
import { TableProps } from "./Table.interface";

export const Table = ({ headers, dataTable }: TableProps) => {
  const { query, setQuery } = useQueryContext();
  const changePage = (e: ChangeEvent<unknown>, pageNumber: number) => {
    setQuery((cur) => ({ ...cur, page: pageNumber }));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <MUITable>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>{header.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((data, dataIdx) => (
              <TableRow key={dataIdx}>
                {headers.map((header, index) => (
                  <TableCell key={index}>{header.render(data)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
      <Grid container justifyContent={"flex-end"} mt={2} mb={2}>
        <Grid item>
          <Pagination count={10} page={query.page} onChange={changePage} />
        </Grid>
      </Grid>
    </>
  );
};
