import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const getData = () => {
      try {
        const resp = axios.get("https://dummyjson.com/products");
        console.log("res", resp.products);
        const data = resp.data;
        setProduct(data);
      } catch (e) {
        console.log("error", e);
      }
    };
    getData();
  }, []);

  return <div>Fetch DAta</div>;
};

export default Test;
