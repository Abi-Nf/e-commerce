import { InputHTMLAttributes } from "react";
import { styled } from "@mui/material";

const SearchInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <CustomInput {...props} />;
};

const CustomInput = styled("input")({
  width: "100%",
  border: "none",
  outline: "none",
  fontSize: "1.1rem",
  background: "none",
  marginLeft: ".7rem",
  "::placeholder": {
    color: "black",
  },
});

export default SearchInput;
