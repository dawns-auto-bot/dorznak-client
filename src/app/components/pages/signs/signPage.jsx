import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Paper,
  Typography,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";
import Item from "@mui/material/Grid";
import { useSnackbar } from "notistack";
import { getCurrentSign } from "../../../../store/signs";
import { getPriceList } from "../../../../store/priceList";
import { ubdateCart, getcartList } from "../../../../store/cart";
import * as signsImage from "../../../assets/img/signs/worning/";
const SignPage = () => {
  const dispatch = useDispatch();
  const { size, film } = useParams();

  const currentSign = useSelector(getCurrentSign());
  console.log(currentSign);
  const priceList = useSelector(getPriceList());
  const cartList = useSelector(getcartList());
  const signsPiceList = priceList.find((item) => item.name === "signs");

  const [counter, setCounter] = useState(1);
  const [data, setData] = useState({ size: size, filmeType: film });
  const [price, setPrice] = useState(
    signsPiceList.form[currentSign.form].size[data.size][data.filmeType]
  );

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const handleInputChange = ({ target }) => {
    if (Number(target.value) >= 0) setCounter(Number(target.value));
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  useEffect(() => {
    setPrice(
      signsPiceList.form[currentSign.form].size[data.size][data.filmeType] *
        counter
    );
  }, [data, counter, currentSign.form, signsPiceList.form]);
  const handleAddCart = () => {
    if (cartList.findIndex((item) => item._id === currentSign._id) !== -1) {
      enqueueSnackbar("Товар уже в корзине", { variant: "warning" });
      return;
    }
    dispatch(
      ubdateCart({
        _id: currentSign._id,
        type: "sign",
        gost: currentSign.gost,
        name: currentSign.name,
        size: data.size,
        filmeType: data.filmeType,
        imgSrc: currentSign.imgSrc,
        price: price / counter,
        quantity: counter,
      })
    );
  };

  return (
    <Paper elevation={3} sx={{ position: "relative" }}>
      <Box p={2}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={4}>
            <Item>
              <img
                src={signsImage[currentSign.imgSrc]}
                alt="1-1"
                className="card-img"
              />
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Typography variant="h6" component={"h4"}>
                Знак {currentSign.gost} ГОСТ 52290-2004
              </Typography>
              <Typography variant="h6" component={"h4"}>
                {currentSign.name}
              </Typography>
              <Typography variant="subtitle1" component={"p"}>
                {currentSign.description}
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Item className="form">
              <FormControl>
                <FormLabel id="size-radio-buttons-group">Типоразмер</FormLabel>
                <RadioGroup
                  aria-labelledby="size-radio-buttons-group"
                  name="size"
                  value={data.size}
                  onChange={handleChange}
                >
                  <div>
                    {Array.isArray(currentSign.sizes)
                      ? currentSign.sizes.map((size) => (
                          <FormControlLabel
                            key={size}
                            value={size}
                            control={<Radio />}
                            label={size}
                          />
                        ))
                      : currentSign.sizes}
                  </div>
                </RadioGroup>
                <FormLabel id="filmeType-radio-buttons-group">
                  Тип пленки
                </FormLabel>
                <RadioGroup
                  aria-labelledby="filmeType-radio-buttons-group"
                  name="filmeType"
                  value={data.filmeType}
                  onChange={handleChange}
                >
                  <div>
                    <FormControlLabel
                      value="aCom"
                      control={<Radio />}
                      label="А ком"
                    />
                    <FormControlLabel
                      value="aIng"
                      control={<Radio />}
                      label="А инж"
                    />
                    <FormControlLabel value="B" control={<Radio />} label="Б" />
                    <FormControlLabel value="C" control={<Radio />} label="В" />
                  </div>
                </RadioGroup>
              </FormControl>
            </Item>
          </Grid>

          <Grid item xs={2}>
            <Item>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "1rem",
                }}
              >
                <button className="count-btn" onClick={decrement}>
                  -
                </button>
                <Typography variant="h6" component={"h4"}>
                  <input
                    className="counter-input"
                    value={counter}
                    onChange={handleInputChange}
                  />
                </Typography>
                <button className="count-btn" onClick={increment}>
                  +
                </button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <Typography variant="h5" component={"h4"}>
                {`цена ${price} р`}
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <button className="card-btn" onClick={handleAddCart}>
                В корзину
              </button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default SignPage;
