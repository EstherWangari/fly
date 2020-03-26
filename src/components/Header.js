import React from "react";
import "./App.css";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
    <Row>
      <Col md={18} xs={24}>
        <Link to="/">
          <img src={require('../assets/logo.png')} />
        </Link>
      </Col>
      <div className="left-nav">
      <Col md={2} xs={4}>
        <Link to="/events"> EVENTS</Link>
      </Col>
      <Col md={2} xs={4}>
        <Link to="/about"> ABOUT</Link>
      </Col>
      <Col md={2} xs={12}>LOGIN</Col>
      </div>
    </Row>
    </div>
  );
}

export default Header;
