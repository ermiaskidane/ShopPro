import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import Message from "../components/Message"
import Loader from "../components/Loader"

import { listProducts } from "../store/actions/productActions"

const HomeScreens = () => {



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

