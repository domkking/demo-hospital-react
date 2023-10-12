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

import doctorList from "../json/DoctorList.json";

import SiteTitle from "./SiteTitle";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/LevelContext";

//FUNCTION

const styleTableHeader = {
  backgroundColor: "#8287fd ",
  color: "#0c1462",
  fontFamily: "Poppins, sans-serif",
  fontWeight: "900",
  fontSize: "20px",
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

//FUNCTION COMPONENT
export default function DoctorTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const user = useContext(UserContext);

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
                  <StyledTableCell>Code (ID)</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">
                    Last&nbsp;Name
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {doctorList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((doctor, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {doctor.doctorCode}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {doctor.doctorName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {doctor.doctorLastname}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div style={styleForPagination}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={doctorList.length}
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
