import React from 'react';
import { Row, Col, Button } from 'antd';
import Header from '../Header';
import Footer from '../landing/Footer'

class AdminPage extends React.Component {
    render() {
        return (
            <div className="about-container">
                <div className="head-about">
                    <Header />
                </div>
                <div className="about-content">
                    <Row>
                        <Col md={12} xs={12}>
                            <h3>My Events</h3>
                        </Col>
                        <Col md={12} xs={12}>
                            <div className="new-events">
                                <Button>New Event</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className="admin-col blueish">
                        <Col md={18} xs={24} >
                            <div className="position-events">
                                <div className="new-events-image">
                                    <img src={require('../../assets/car.jpg')} />
                                </div>
                                <div className="new-events-text">
                                    <h4>Kijiji Motor Racing Club Mtwapa Circuit</h4>
                                    <div className="edit-sec">
                                        <p style={{ color: "#FD2E24" }}>organizer</p>
                                        <p>23 people attending</p>
                                        <p>Edit</p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col md={6} xs={24}>
                            <div className="new-events-right">

                                <div className="orange-box">
                                    <div style={{ fontSize: '20px', lineHeight: 1.05 }}>20</div>
                                    <div>APR</div>
                                </div>
                                <div>
                                    <p>6am 6pm</p>
                                </div>

                            </div>
                        </Col>
                        </Row>
                        <Row  className="admin-col blueish">
                        <Col md={18} xs={24} >
                            <div className="position-events">
                                <div className="new-events-image">
                                    <img src={require('../../assets/poster.jpg')} />
                                </div>
                                <div className="new-events-text">
                                    <h4>Grow The Business Interviews Brend Nyango from Do It Now Inc</h4>
                                    <div className="edit-sec">
                                        <p>Organized by Sono</p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col md={6} xs={24}>
                            <div className="new-events-right">

                                <div className="orange-box">
                                    <div style={{ fontSize: '20px', lineHeight: 1.05 }}>04</div>
                                    <div>FEB</div>
                                </div>
                                <div>
                                    <p>6am 6pm</p>
                                </div>

                            </div>
                        </Col>
                        </Row>
                        <Row  className="admin-col blueish">
                        <Col md={18} xs={24} >
                            <div className="position-events">
                                <div className="new-events-image">
                                    <img src={require('../../assets/art.jpg')} />
                                </div>
                                <div className="new-events-text">
                                    <h4>Daisy's VIRTUAL Fun Run - a 3K run benefiting Chain of Hope</h4>
                                    <div className="edit-sec">
                                        <p>Organized by BGH</p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col md={6} xs={24}>
                            <div className="new-events-right">

                                <div className="orange-box">
                                    <div style={{ fontSize: '20px', lineHeight: 1.05 }}>21</div>
                                    <div>JAN</div>
                                </div>
                                <div>
                                    <p>6am 6pm</p>
                                </div>

                            </div>
                        </Col>
                        </Row>
            </div>
            <Footer />

            </div>
        );
    }
}
export default AdminPage;