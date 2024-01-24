import Header from "./Header.tsx";
import HelloSection from "./HelloSection.tsx";
import { Box, Typography } from "@mui/material";
import CardProduct, { ItemData } from "./CardProduct.tsx";

const Home = () => {
  return (
    <div className="full-view">
      <Header />
      <HelloSection />

      <Box marginTop="1rem" padding="1rem">
        <Typography fontSize="1.3rem" fontWeight="bolder">
          Our Products
        </Typography>

        <Box className="flex justify-center flex-wrap gap-14">{Array(10).fill(<CardProduct item={{} as ItemData} />)}</Box>
      </Box>
    </div>
  );
};

export default Home;