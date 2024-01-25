import Home from "./Home";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeWithData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = axios.create({
      baseURL: "https://tsenan-tsika-preprod.adaptable.app/",
    });

    client.get("/products").then((res) => setData(res.data));
  }, []);

  return <Home data={data}></Home>;
};

export default HomeWithData;

