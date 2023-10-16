import React from "react";
import { SetStateAction } from "react";
import { useContext } from "react";

import styled from "styled-components";

import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button/Button";
import TableContainer from "@mui/material/TableContainer";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination/TablePagination";

import SiteTitle from "./SiteTitle";

import { useNavigate } from "react-router-dom";
import { TableContext, UserContext } from "../context/LevelContext";

//FUNCTION

const styleTableHeader: React.CSSProperties = {
  backgroundColor: "#8287fd",
  color: "#0c1462",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "900",
  fontSize: "20px",
};

const centerTable: React.CSSProperties = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  margin: "2em 0",
};

const styleForPagination: React.CSSProperties = {
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  padding: "10px",
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    ...styleTableHeader,
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "transparent",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

//FUNCTION COMPONENT
export default function Tables() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const user = useContext(UserContext);
  const userData = useContext(TableContext);
  const jsonData = JSON.parse(userData);

  function formatKey(str: string) {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, " $&")
    );
  }

  const columns =
    jsonData.length > 0
      ? Object.keys(jsonData[0]).map((key) => ({
          id: key,
          label: formatKey(key),
        }))
      : [];

  const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: {
    target: { value: string | number };
  }) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <SiteTitle title={user} color="#0FA564" />
      <div style={centerTable}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer
            component={Paper}
            sx={{
              width: "100%",
              height: "500px",
            }}
          >
            <Table
              sx={{ minWidth: 700 }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <React.Fragment key={index}>
                      <StyledTableCell>{column.label}</StyledTableCell>
                    </React.Fragment>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {jsonData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(
                    (
                      userDates: { [x: string]: any },
                      index: React.Key | null | undefined
                    ) => {
                      return (
                        <StyledTableRow hover tabIndex={-1} key={index}>
                          <React.Fragment key={index}>
                            {columns.map((column) => {
                              const value = userDates[column.id];
                              return (
                                <StyledTableCell key={column.id}>
                                  {value}
                                </StyledTableCell>
                              );
                            })}
                          </React.Fragment>
                        </StyledTableRow>
                      );
                    }
                  )}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={styleForPagination}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={userData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              style={styleTableHeader}
            />
            <Button
              sx={{
                color: "#0c1462",
                fontFamily: "Poppins",
                fontWeight: "600",
                border: "1px solid",

                "&:hover": {
                  backgroundColor: "#8287fd",
                  borderColor: "#0062cc",
                  boxShadow: "none",
                },
              }}
              disabled={false}
              size="medium"
              variant="outlined"
              onClick={handleHomeButtonClick}
            >
              BACK TO HOME
            </Button>
          </div>
        </Paper>
      </div>
    </>
  );
}
