import AppLogo from "../../assets/app-logo.svg";
import { BiSearch } from "react-icons/bi";
import { Box, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import SearchInput from "../../components/SearchInput.tsx";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-1">
      <Box display="flex" gap=".5rem" alignItems="center">
        <Img src={AppLogo} alt="app logo" />
        <p className="text-xl text-nowrap select-none font-bold">E-Commerce</p>
      </Box>

      <form className="flex items-center w-1/3 gap-2 shadow-md rounded-lg">
        <SearchInput name="q" placeholder="Enter keywords" />

        <Button sx={BUTTON_SEARCH_STYLE}>
          <BiSearch fontSize="1.6rem" />
        </Button>
      </form>

      <Box display="flex" gap=".8rem" px="1rem">
        <UserLink to="/user/..." color="#aeafa8">
          <FaRegUser fontSize="1.2rem" />
        </UserLink>
      </Box>
    </header>
  );
};

const BUTTON_SEARCH_STYLE = {
  minWidth: 0,
  padding: ".4rem .8rem",
  borderRadius: ".8rem",
  flexShrink: 0,
};

const UserLink = styled(Link)(({ color, theme }) => ({
  padding: ".6rem",
  borderRadius: "50%",
  backgroundColor: color || theme.palette.primary.main,
}));

const Img = styled("img")({
  width: "2.6rem",
  height: "2.6rem",
});

export default Header;
