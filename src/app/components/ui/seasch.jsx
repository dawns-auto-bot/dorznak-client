import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import signsService from "../../services/signs.service";
import { Link } from "react-router-dom";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const handleChange = async ({ target }) => {
    setSearchText(target.value);
    if (target.value.trim().length > 0) {
      const { content } = await signsService.search(target.value);
      setSearchData(content);
    } else {
      setSearchData([]);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          position: "relative",
        }}
      >
        <TextField
          id="password"
          label="Введите название знака"
          variant="standard"
          fullWidth
          type="text"
          value={searchText}
          name="search"
          margin="dense"
          onChange={(event) => handleChange(event)}
          helperText="Поиск по названию"
        />
        <SearchRoundedIcon />
        {searchData.length !== 0 && (
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              top: "100%",
              zIndex: "5",
            }}
          >
            <Paper elevation={3} sx={{ padding: "1rem", px: 3 }}>
              <ul className="search-li">
                {searchData.map((item) => (
                  <li key={`serch${item._id}`}>
                    <Link to={`/signs/${item._id}/2/aCom`}>
                      <Typography
                        variant="subtitle1"
                        component={"h3"}
                        color={"primary"}
                        align={"left"}
                      >
                        {`Знак дорожный ${item.gost} "${item.name}"`}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </Paper>
          </Box>
        )}
      </Box>
    </>
  );
};
export default Search;
