import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, getIsLoggedIn, getAuthError } from "../../../../store/users";
import { Paper } from "@mui/material";
import { Box, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import IconButton from "@mui/material/IconButton";
import TextInput from "../../common/table/textInput";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate, useParams } from "react-router-dom";
import { getSignsList, updeteSign, addSign } from "../../../../store/signs";
import SelectUnstyled from "@mui/base/SelectUnstyled";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
const EditSign = ({}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let signsList = useSelector(getSignsList());
    const { id } = useParams();
    const sign = id
        ? signsList.find(item => item._id === id)
        : {
              gost: "",
              name: "",
              form: "",
              description: "",
              imgSrc: "",
          };

    const [data, setData] = useState({
        gost: sign.gost,
        name: sign.name,
        type: sign.type,
        form: sign.form,
        description: sign.description,
        imgSrc: sign.imgSrc,
    });

    const isLoggedIn = useSelector(getIsLoggedIn());

    const handleChange = ({ target }) => {
        setData(prevState => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };
    const handleBack = () => {
        navigate(-1);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (id) {
            dispatch(updeteSign(id, data)).then(() => {
                navigate(-1);
            });
        } else {
            dispatch(addSign(data));
        }
    };
    if (!isLoggedIn)
        return (
            <Typography variant="h6" mt={2}>
                ?????? ???????????????? ???????????? ?????? ???????????????????????????????????? ??????????????????????????
            </Typography>
        );
    return (
        <Paper elevation={3} sx={{ padding: "1rem", mt: "5.2rem", px: 3 }}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <TextInput
                        name="gost"
                        type="text"
                        value={data.gost}
                        help="?????????? ?????????? ???? ????????"
                        onChange={handleChange}
                        required={true}
                        label="?????????? ?????????? ???? ????????"
                    />
                    <TextInput
                        name="name"
                        type="text"
                        value={data.name}
                        help="??????????????????????"
                        onChange={handleChange}
                        required={true}
                        label="???????????????????????? ?????????? ???? ????????"
                    />
                    <textarea
                        className="edit-area"
                        rows="5"
                        name="description"
                        defaultValue={data.description}
                        onChange={handleChange}
                    ></textarea>
                    <SelectUnstyled>
                        <OptionUnstyled>??????????????????????</OptionUnstyled>
                        <OptionUnstyled>{/* option two */}</OptionUnstyled>
                    </SelectUnstyled>
                    <TextInput
                        name="imgSrc"
                        type="text"
                        value={data.imgSrc}
                        help="???????? ?? ??????????????????????"
                        onChange={handleChange}
                    />
                    <FormControl fullWidth sx={{ marginTop: "1rem" }}>
                        <InputLabel id="form">?????????? ??????????</InputLabel>
                        <Select
                            labelId="form"
                            id="demo-simple-select"
                            value={data.form}
                            label="form"
                            onChange={handleChange}
                            name="form"
                        >
                            <MenuItem value="triangle">??????????????????????</MenuItem>
                            <MenuItem value="square">??????????????</MenuItem>
                            <MenuItem value="round">????????</MenuItem>
                            <MenuItem value="rectangle">??????????????????????????</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="flex-end"
                        my={3}
                    >
                        {id ? (
                            <Button variant="contained" type="submit">
                                ????????????????
                            </Button>
                        ) : (
                            <Button variant="contained" type="submit">
                                ????????????????
                            </Button>
                        )}
                        <Button variant="outlined" onClick={handleBack}>
                            ????????????
                        </Button>
                    </Stack>
                </Box>
            </form>
        </Paper>
    );
};

export default EditSign;
