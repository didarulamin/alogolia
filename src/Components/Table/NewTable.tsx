import {
  Box,
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Pagination, PaginationItem, TableContainer } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
// import { Pagination } from "@material-ui/lab";
import usePagination from "../../hooks/pagination";
import { Link, useNavigate, useParams } from "react-router-dom";

interface Props {
  data: {}[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function NewTable({ data }: Props) {
  const { pageId } = useParams() as {
    pageId: string;
  };

  const classes = useStyles();
  const navigate = useNavigate();

  const PER_PAGE = 20;

  const count = Math.ceil(data.length / PER_PAGE);
  const { currentPage, currentData, setCurrentPage, jump } = usePagination(
    data,
    PER_PAGE
  );

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setCurrentPage(p);
    jump(p);
  };

  useLayoutEffect(() => {
    if (pageId) {
      setCurrentPage(parseInt(pageId));
      jump(parseInt(pageId));
    }
  }, [pageId, jump, setCurrentPage]);

  return (
    <Box p="20">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Created_at</TableCell>
              <TableCell align="right">Url</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData().map((v: any, index: number) => (
              <TableRow key={v?.title}>
                <TableCell
                  component="th"
                  scope="row"
                  data-testid={`row-${index}`}
                >
                  {v?.title}
                </TableCell>
                <TableCell align="right">{v?.created_at}</TableCell>
                <TableCell align="right">{v?.url}</TableCell>
                <TableCell align="right">{v?.author}</TableCell>
                <TableCell align="right">
                  <Button
                    data-testid="details-button"
                    variant="contained"
                    onClick={() => {
                      /* alert(JSON.stringify(row)); */
                      navigate(`/post/${v?.title}`);
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Pagination
          count={count}
          size="large"
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/page/${item.page}`}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
}
