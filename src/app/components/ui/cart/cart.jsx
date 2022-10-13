import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getcartList, getcartTotalPrice } from "../../../../store/cart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Item from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CartItem from "./catrItem";
import { Typography } from "@mui/material";
import jsPDF from "jspdf";
const Cart = () => {
  const cartList = useSelector(getcartList());
  const PdfRef = useRef();
  const noop = () => {};
  const savePDF = () => {
    // See https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "a4",
    });
    // HTML element to render, using React's API for accessing DOM elements:
    // https://reactjs.org/docs/refs-and-the-dom.html
    const element = PdfRef.current;
    const margins = {
      left: 40,
      top: 40,
      bottom: 40,
    };
    const options = {
      width: 522,
    };
    // See example usage from repo: https://github.com/MrRio/jsPDF/blob/b9f932cd2e22c82db0a39f0225521945a2568809/examples/basic.html#L357
    // DOM element, x pos to render on page, y pos to render on page, callback, options
    doc.fromHTML(element, margins.left, margins.top, options, noop, margins);

    doc.save("hmw.pdf");
  };

  const total = useSelector(getcartTotalPrice());
  if (cartList.length === 0) {
    return (
      <Typography variant="h5" component={"h3"} align={"center"}>
        Корзина пуста
      </Typography>
    );
  } else
    return (
      <>
        <TableContainer component={Paper} ref={PdfRef}>
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
                  Количество
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                  Цена
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, fontSize: 18 }}>
                  Стоимость
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
              {cartList.map((row, index) => (
                <CartItem row={row} index={index} key={row._id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          mt={2}
        >
          <Item>
            <Button variant="contained" onClick={savePDF}>
              Получить КП
            </Button>
          </Item>
          <Item>
            <Button variant="outlined">Заявка менеджеру</Button>
          </Item>
          <Item>
            <Typography variant="h5" component={"h3"} align={"right"}>
              ИТОГО: {total}р
            </Typography>
          </Item>
        </Stack>
      </>
    );
};
export default Cart;
