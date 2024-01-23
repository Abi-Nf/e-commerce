import { Box, Button, Typography } from "@mui/material";
import FilterMenu from "./FilterMenu.tsx";

const HelloSection = () => {
  return (
    <Box
      className="gradient-circle-right"
      sx={{
        width: "100%",
        display: "flex",
        height: "25rem",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography color="white" fontSize="1.5rem" textAlign="center">
          Discover our products with fair prices
        </Typography>
        <Button
          sx={{ fontSize: ".95rem", fontWeight: "bolder", color: "yellow" }}
        >
          View recent products
        </Button>
      </Box>

      <Box sx={{ width: "50%", height: "100%" }}></Box>

      <Box
        bottom="0"
        height="0"
        width="100%"
        display="flex"
        position="absolute"
        alignItems="center"
        justifyContent="center"
      >
        <FilterMenu />
      </Box>
    </Box>
  );
};

export default HelloSection;
