import { Box, Button as Btn, Divider, styled } from "@mui/material";

const FilterMenu = () => {
  return (
    <Box
      px=".8rem"
      py=".2rem"
      display="flex"
      bgcolor="white"
      borderRadius=".4rem"
      className="shadow-lg"
      justifyContent="center"
    >
      <Box display="flex" gap=".3rem" alignItems="center">
        <Button>Recent Products</Button>
        <CustomDivider />
        <Button>Daily trends</Button>
        <CustomDivider />
        <Button>Bestsellers</Button>
        <CustomDivider />
        <Button>Discounts</Button>
      </Box>
    </Box>
  );
};

const Button = styled(Btn)({
  fontWeight: "bolder",
});

const CustomDivider = styled(Divider)({
  width: 0,
  height: "80%",
  display: "block",
  border: "solid .05rem #8f8f8f",
});

export default FilterMenu;
