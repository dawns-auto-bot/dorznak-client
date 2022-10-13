import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getcartList } from "../../../store/cart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as signsImage from "../../assets/img/signs/worning";
const Cart = () => {
    const cartList = useSelector(getcartList());
    let initTotal = 0;
    cartList.map(item => {
        initTotal += item.quantity * item.price;
        return initTotal;
    });
    const [total, setTotal] = useState(initTotal);
    const getName = item => {
        switch (item.type) {
            case "sign":
                return `Дорожный знак ${item.gost} ${item.name} типоразмер ${item.size}, тип пленки ${item.filmeType}`;

            default:
                return "";
        }
    };
    console.log(cartList);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>№</TableCell>
                        <TableCell align="right">Изображение</TableCell>
                        <TableCell align="left" sx={{ maxWidth: 400 }}>
                            Наименование
                        </TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Стоимость</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartList.map((row, index) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="left">{index + 1}</TableCell>
                            <TableCell align="left">
                                <img
                                    src={signsImage[row.imgSrc]}
                                    alt="1-1"
                                    className="cart-img"
                                />
                            </TableCell>
                            <TableCell align="left">{getName(row)}</TableCell>
                            <TableCell align="center">{row.quantity}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">
                                {row.quantity * row.price}
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow>{total}</TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default Cart;
