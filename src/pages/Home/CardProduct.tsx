import { Box, Button } from "@mui/material";
import { CgShoppingCart } from "react-icons/cg";
import { FaMoneyBill } from "react-icons/fa";

interface ItemData {
  date: Date;
  price: number;
  description: string;
}

interface Props {
  item: ItemData;
}

const CardProduct = ({ item: { description } }: Props) => {
  return (
    <Box>
      <Box></Box>
      <Box>
        <span className="line-clamp-2 w-full">{description}</span>
        <Box>
          <span></span>
          <Button>
            <span>Buy</span>
            <FaMoneyBill />
          </Button>
          <Button>
            <span>Add to chart</span>
            <CgShoppingCart />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { type ItemData };
export default CardProduct;
