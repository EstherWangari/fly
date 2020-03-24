import React from "react";
import "./App.css";
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

function Header() {
  return (
    <div className="header-container">
    <Row>
      <Col span={18}>
      <img src={require('../assets/logo.png')} />
      </Col>
      <div className="left-nav">
      <Col span={2}>EVENTS</Col>
      <Col span={2}>ABOUT</Col>
      <Col span={2}>LOGIN</Col>
      </div>
    </Row>
    </div>
  );
}

export default Header;
