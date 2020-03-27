import React from "react";
import "./App.css";
import { Row, Col, Modal, Button, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  //Navigating to admin page
  submitLoginForm = () => {
    if (document.getElementById("user").value != '' && document.getElementById("pass").value != '') {
      window.location.href = '/admin';
    }

  };

  render() {
    const { visible, loading } = this.state;
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
              <a href="/#events"> EVENTS</a>
            </Col>
            <Col md={2} xs={4}>
              <Link to="/about"> ABOUT</Link>
            </Col>
            <Col md={2} xs={12}>
              <a onClick={this.showModal}>LOGIN</a>
              <div>
                <Modal
                  visible={visible}
                  title="Login"
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <Form>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules="required"
                    >
                      <Input required id="user" />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password required id="pass" />
                    </Form.Item>
                    <Form.Item >
                      <Button type="primary" htmlType="submit" onClick={this.submitLoginForm}>
                        Submit
                     </Button>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </Col>
          </div>
        </Row>
      </div>

    );
  }
}


export default Header;
