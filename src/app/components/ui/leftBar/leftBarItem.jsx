import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const LeftBarItem = ({ title, src, link }) => {
  return (
    <Link to={link} className="link">
      <Box
        sx={{ display: "flex", marginBottom: "0.5rem", alignItems: "center" }}
      >
        <img src={src} alt="signs" className="left-menu-img" />
        <Typography
          variant="subtitle1"
          component={"h3"}
          color={"primary"}
          sx={{
            "&:hover": {
              color: "#ef7f1a",
            },
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
};
export default LeftBarItem;
