import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "../../../../store/users";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import {
  getSignsList,
  loadSigns,
  getSignsLoadingStatus,
} from "../../../../store/signs";
import AdminItem from "./adminItem";
import Loader from "../../common/table/loader";
import { useNavigate } from "react-router-dom";
const AdminPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn());
  const [signsList, setSignList] = useState([]);

  const init = useSelector(getSignsList());
  useEffect(() => {
    setSignList(init);
  }, [init]);

  const handleDelete = (_id) => {
    setSignList(signsList.filter((sign) => sign._id !== _id));
  };
  const handleAdd = () => {
    navigate("/edit");
  };
  if (!isLoggedIn)
    return (
      <Typography variant="h6" mt={2}>
        Эта страница только для зарегистрированных пользователей
      </Typography>
    );
  if (signsList.length === 0) {
    return <Loader />;
  } else {
    return (
      <>
        <Button variant="contained" onClick={handleAdd}>
          Добавить
        </Button>
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
                <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                  Изображение
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    maxWidth: 400,
                    fontWeight: 700,
                    fontSize: 18,
                  }}
                >
                  Наименование
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                  Редактировать
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                  Удалить
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              {signsList.map((row, index) => (
                <AdminItem
                  row={row}
                  onDelete={handleDelete}
                  index={index}
                  key={"Admin" + row._id}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default AdminPage;
