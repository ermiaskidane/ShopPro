import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import Message from "../components/Message"
import Loader from "../components/Loader"


const HomeScreens = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    const { data} = await axios.get("/api/products")

    setProducts(data)
  }

  fetchProducts()
}, [])
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreens;

