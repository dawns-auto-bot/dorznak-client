import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteSign } from "../../../../store/signs";
import * as signsImage from "../../../assets/img/signs/worning";

import { useNavigate, useParams } from "react-router-dom";
const AdminItem = ({ row, index, onDelete }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelite = () => {
    dispatch(deleteSign(row._id)).then(onDelete(row._id));
  };
  const handleEdit = () => {
    navigate(`/edit/${row._id}`);
    return;
  };
  return (
    <TableRow>
      <TableCell align="left">{index + 1}</TableCell>
      <TableCell align="left">
        <img src={signsImage[row.imgSrc]} alt="1-1" className="cart-img" />
      </TableCell>
      <TableCell align="left">
        {`${row.gost} 
        ${row.name}`}
      </TableCell>

      <TableCell align="right">
        <Button variant="contained" onClick={handleEdit}>
          Редактировать
        </Button>
      </TableCell>

      <TableCell align="center">
        <IconButton onClick={handleDelite}>
          <DeleteForeverIcon color="error" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default AdminItem;
