import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props {
  data: [];
}

export default function SimpleTable({ data }: Props) {
  const navigate = useNavigate();

  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  /*  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  }; */

  /*   const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; */

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data?.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Created_at</TableCell>
            <TableCell align="right">Url</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Button</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row: any) => (
              <TableRow key={row?.title}>
                <TableCell component="th" scope="row">
                  {row?.title}
                </TableCell>
                <TableCell align="right">{row?.created_at}</TableCell>
                <TableCell align="right">{row?.url}</TableCell>
                <TableCell align="right">{row?.author}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => {
                      /* alert(JSON.stringify(row)); */
                      navigate(`/post/${row?.title}`);
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </TableContainer>
  );
}
