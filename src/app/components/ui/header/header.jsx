import React from "react";
import logo from "./logo.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIcon from "@mui/icons-material/Phone";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartLegnth } from "../../../../store/cart";
const Header = () => {
    const cattLength = useSelector(getCartLegnth()) || 0;
    return (
        <Box sx={{ p: 2, backgroundColor: "#f0f0f0" }}>
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Grid item xs={3}>
                        <Item>
                            <img src={logo} alt="logo" className="logo"></img>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Grid
                                container
                                spacing={2}
                                alignItems="center"
                                mb={2}
                            >
                                <PhoneIcon color="primary" />
                                <Typography
                                    variant="subtitle1"
                                    component="div"
                                    ml={1}
                                >
                                    Телефон: +79423266915
                                </Typography>
                            </Grid>
                            <Grid container spacing={2} alignItems="center">
                                <MailIcon color="primary" />
                                <Typography
                                    variant="subtitle1"
                                    component="div"
                                    ml={1}
                                >
                                    e-mail: medkov77@mail.ru
                                </Typography>
                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Grid container spacing={2} alignItems="center">
                                <MenuBookIcon color="primary" />
                                <Typography variant="h6" component="div" ml={1}>
                                    Скачать прайслист
                                </Typography>
                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={1}>
                        <Link to="/kart">
                            <Item>
                                <Badge
                                    badgeContent={cattLength}
                                    color="primary"
                                >
                                    <ShoppingCartIcon
                                        color="action"
                                        fontSize="large"
                                    />
                                </Badge>
                            </Item>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Header;
