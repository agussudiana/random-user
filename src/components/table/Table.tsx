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
  TableSortLabel,
} from "@mui/material";
import { ChangeEvent } from "react";
import { TableProps } from "./Table.interface";

const toggleSortDirection = (currentDirection: string) => {
  if (currentDirection === "asc") return "desc";
  else return "asc";
};

export const Table = ({ headers, dataTable }: TableProps) => {
  const { query, setQuery } = useQueryContext();
  const changePage = (e: ChangeEvent<unknown>, pageNumber: number) => {
    setQuery((cur) => ({ ...cur, page: pageNumber }));
  };

  const selectOrder = (sortKey: string | undefined) => {
    if (sortKey === query.sortBy) {
      setQuery((cur) => ({
        ...cur,
        sortBy: sortKey,
        sortDirection: toggleSortDirection(query.sortDirection),
      }));
    } else {
      setQuery((cur) => ({ ...cur, sortBy: sortKey, sortDirection: "desc" }));
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <MUITable>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>
                  {header.enableSorting && (
                    <TableSortLabel
                      active={query.sortBy === header.sortKey}
                      direction={
                        query.sortBy === header.sortKey
                          ? query.sortDirection
                          : "asc"
                      }
                      onClick={() => selectOrder(header.sortKey)}
                    >
                      {header.title}
                    </TableSortLabel>
                  )}

                  {!header.enableSorting && header.title}
                </TableCell>
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
