import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { iteratorSymbol } from "immer/dist/internal";

const TableComponent = ({ head, body }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead
          sx={{
            maxWidth: 400,
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          <TableRow>
            <TableCell sx={{ fontWeight: 700, fontSize: 18 }}>№</TableCell>
            {head.map((item) => (
              <TableCell
                key={item}
                align="right"
                sx={{ fontWeight: 700, fontSize: 18 }}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          }}
        >
          {body.map((item) => {
            <TableRow></TableRow>;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableComponent;
