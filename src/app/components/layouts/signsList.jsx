import SignsPage from "../pages/signs/signsPage";
import React, { useEffect, useState } from "react";
import Item from "@mui/material/Grid";
import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useDispatch, useSelector } from "react-redux";
import {
    getSignsList,
    getSignsLoadingStatus,
    loadSigns,
    getListSize,
} from "../../../store/signs";
import configFile from "../../../config.json";
import Search from "../ui/seasch";
import Loader from "../common/table/loader";
import SelectedField from "../common/table/selectedUield";
const SignsList = () => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState("_id");
    const [direction, setDirection] = useState(1);
    const [filter, setFilter] = useState("all");
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(loadSigns(page, sort, direction, filter));
    }, [dispatch, page, sort, direction, filter]);
    const limit = configFile.limit;
    const loading = useSelector(getSignsLoadingStatus());
    const signsList = useSelector(getSignsList());
    const listSize = Math.floor(useSelector(getListSize()) / limit) + 1;

    const handleChangePage = (a, value) => {
        console.log(a);
        setPage(value);
    };
    const handleSort = target => {
        setSort(target.value);
    };
    const handDirection = ({ target }) => {
        setDirection(prevState => prevState * -1);
    };
    const handleFiltre = target => {
        setFilter(target.value);
    };
    if (loading) return <Loader />;
    return (
        <>
            <Typography
                variant="h4"
                component={"h2"}
                mb={2}
                sx={{ textAlign: "center" }}
            >
                Знаки дорожные ГОСТ 52290-2004
            </Typography>
            <Search />
            <Stack
                spacing={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                my={3}
                sx={{ width: "100%" }}
            >
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    mr={5}
                >
                    <SelectedField
                        items={[
                            { name: "По госту", value: "_id" },
                            { name: "По названию", value: "name" },
                        ]}
                        label="Сортировка"
                        onSelect={handleSort}
                        name="sort"
                        value={sort}
                    />
                    <IconButton onClick={handDirection}>
                        {direction === 1 ? (
                            <ArrowUpwardIcon />
                        ) : (
                            <ArrowDownwardIcon />
                        )}
                    </IconButton>
                </Stack>

                <SelectedField
                    items={[
                        { name: "Треугольник", value: "triangle" },
                        { name: "Круг", value: "round" },
                        { name: "Квадрат", value: "square" },
                    ]}
                    label="Фильтр по форме"
                    onSelect={handleFiltre}
                    name="sort"
                    value={sort}
                />
            </Stack>
            <Grid container spacing={3} mt={2}>
                {signsList.map(sign => (
                    <Grid key={sign._id} item xs={4}>
                        <Item>
                            <SignsPage
                                id={sign._id}
                                gost={sign.gost}
                                name={sign.name}
                                form={sign.form}
                                sizes={sign.sizes}
                                films={sign.films}
                                description={sign.description}
                                imgSrc={sign.imgSrc}
                            />
                        </Item>
                    </Grid>
                ))}
            </Grid>
            <Stack spacing={2} my={5}>
                <Pagination
                    count={listSize}
                    variant="outlined"
                    shape="rounded"
                    page={page}
                    onChange={handleChangePage}
                />
            </Stack>
        </>
    );
};
export default SignsList;
