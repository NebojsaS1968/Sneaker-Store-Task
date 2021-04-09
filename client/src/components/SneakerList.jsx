import React, { useEffect } from "react";
import SneakerAPI from "../apis/SneakerAPI";

const SneakerList = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SneakerAPI.get("/");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return <div>Sneakers</div>;
};

export default SneakerList;
