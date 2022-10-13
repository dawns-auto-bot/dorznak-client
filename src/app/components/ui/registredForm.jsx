import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp, getIsLoggedIn, getAuthError } from "../../../store/users";
import { validator } from "../../utils/validator";
import { Paper } from "@mui/material";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate, Link } from "react-router-dom";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(getIsLoggedIn());

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        company: "",
        showPassword: false,
    });
    const loginError = useSelector(getAuthError());
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleClickShowPassword = () => {
        setData(prevState => ({
            ...prevState,
            showPassword: !prevState.showPassword,
        }));
    };
    const handleBack = () => {
        navigate(-1);
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения",
            },
            isEmail: {
                message: "Email введен некорректно",
            },
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения",
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3,
            },
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения",
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву",
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число",
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8,
            },
        },
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp(data));
    };

    return (
        <Paper elevation={3} sx={{ padding: "1rem", mt: "5.2rem", px: 3 }}>
            <Typography
                variant="h5"
                component={"h3"}
                color={"primary"}
                align={"center"}
            >
                Для регистрации заполните форму ниже:
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <TextField
                        required
                        id="name"
                        label="Имя"
                        variant="standard"
                        type="text"
                        value={data.name}
                        name="name"
                        margin="dense"
                        onChange={event => handleChange(event)}
                        error={!(errors.name === undefined)}
                        helperText={errors.name}
                        fullWidth
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        variant="standard"
                        fullWidth
                        type="email"
                        value={data.email}
                        name="email"
                        margin="dense"
                        onChange={event => handleChange(event)}
                        error={!(errors.email === undefined)}
                        helperText={errors.email}
                    />

                    <Box sx={{ display: "flex", width: "100%" }}>
                        <TextField
                            required
                            id="password"
                            label="Пароль"
                            variant="standard"
                            fullWidth
                            type={data.showPassword ? "text" : "password"}
                            value={data.password}
                            name="password"
                            margin="dense"
                            onChange={event => handleChange(event)}
                            error={!(errors.password === undefined)}
                            helperText={errors.password}
                            className="password-field"
                        />
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            className="passwod-icon"
                        >
                            {data.showPassword ? (
                                <VisibilityOff />
                            ) : (
                                <Visibility />
                            )}
                        </IconButton>
                    </Box>
                    <TextField
                        id="company"
                        label="Компания"
                        variant="standard"
                        type="text"
                        margin="dense"
                        name="company"
                        value={data.company}
                        onChange={event => handleChange(event)}
                        fullWidth
                    />
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="flex-end"
                        my={3}
                    >
                        <Button
                            variant="contained"
                            disabled={!isValid}
                            type="submit"
                        >
                            Регистрация
                        </Button>
                        <Button variant="outlined" onClick={handleBack}>
                            Отмена
                        </Button>
                    </Stack>
                </Box>
            </form>
            <Typography variant="subtitle" color={"primary"} mr={2}>
                Уже зарегистрированы?
            </Typography>
            <Typography variant="subtitle" color={"primary"} mr={2}>
                <Link to="/login">Войдите</Link>
            </Typography>
            {loginError && (
                <Typography variant="subtitle" color={"red"}>
                    {loginError}
                </Typography>
            )}
        </Paper>
    );
};
export default RegisterForm;
