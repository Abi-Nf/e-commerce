import Header from "./Header.tsx";
import HelloSection from "./HelloSection.tsx";
import { Box, Typography } from "@mui/material";
import CardProduct, { ItemData } from "./CardProduct.tsx";
import { FC } from "react";

type HomeProps = {
  data: ItemData[];
};

const Home: FC<HomeProps> = ({ data }) => {
  return (
    <div className="full-view">
      <Header />
      <HelloSection />

      <Box marginTop="1rem" padding="1rem">
        <Typography fontSize="1.3rem" fontWeight="bolder">
          Our Products
        </Typography>

        <Box className="flex justify-center flex-wrap gap-14">
          {data.map((x) => (
            <CardProduct item={x as ItemData} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
