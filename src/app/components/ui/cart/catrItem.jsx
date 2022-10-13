import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, deleteCartItem } from "../../../../store/cart";
import * as signsImage from "../../../assets/img/signs/worning";
const CartItem = ({ row, index }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(row.quantity);
  const [totalPrice, setTotalPrice] = useState(counter * row.price);
  const getName = (item) => {
    switch (item.type) {
      case "sign":
        return `Дорожный знак ${item.gost} ${item.name} типоразмер ${item.size}, тип пленки ${item.filmeType}`;

      default:
        return "";
    }
  };
  useEffect(() => {
    setTotalPrice(counter * row.price);
    dispatch(updateQuantity(row._id, counter));
  }, [counter, dispatch, row._id, row.price]);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const handleDelite = () => {
    dispatch(deleteCartItem(row._id));
  };

  return (
    <TableRow>
      <TableCell align="left">{index + 1}</TableCell>
      <TableCell align="left">
        <img src={signsImage[row.imgSrc]} alt="1-1" className="cart-img" />
      </TableCell>
      <TableCell align="left">{getName(row)}</TableCell>
      <TableCell align="center">
        <div>
          <button className="cart-count-btn" onClick={decrement}>
            -
          </button>
          {counter}
          <button className="cart-count-btn" onClick={increment}>
            +
          </button>
        </div>
      </TableCell>
      <TableCell align="center">{row.price}</TableCell>

      <TableCell align="center">{totalPrice}</TableCell>
      <TableCell align="center">
        <IconButton onClick={handleDelite}>
          <DeleteForeverIcon color="error" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
export default CartItem;
