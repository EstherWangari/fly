import React from 'react';
import { Carousel, Row, Col, Button } from 'antd';
class Features extends React.Component {
    render() {
        return (
            <Carousel autoplay>
                <div className="slider-cont">
                    <Row>
                        <Col span={8} className="slider-image">
                            <img src={require('../../assets/fashion.jpg')} />
                        </Col>
                        <Col span={16} className="slider-text ">
                            <h4>Featured Events</h4>
                            <h3>Nairobi Fashion Week 20th Edition</h3>
                            <p>Join Nairobi Fashion Club on a crash-course through the history of
                            fashion in Nairobi, from the revolutionary impact of its ready-to-wear
                            garment industry in the 1990s, to its current role as a global fashion
                            capital.
                  </p>
                            <div style={{ display: "flex" }}>
                                <div className="orange-box">
                                    <div style={{ fontSize: '20px', lineHeight: 1.05 }}>20</div>
                                    <div>APR</div>
                                </div>
                                <div>
                                    <span><i class="fa fa-map-marker" aria-hidden="true"></i>{' '}Prestige Cinemas Ngong rd</span><br />
                                    <span><i class="fa fa-clock-o" aria-hidden="true"></i>{' '}9am-6pm</span>
                                </div>
                            </div>
                            <Button >
                                ATTEND EVENT
                  </Button>
                        </Col>
                    </Row>
                </div>
                <div className="slider-cont">
                    <Row>
                        <Col span={8} className="slider-image">
                            <img src={require('../../assets/car.jpg')} />
                        </Col>
                        <Col span={16} className="slider-text ">
                            <h4>Featured Events</h4>
                            <h3>Kijiji Motor Racing Club Mtwapa Circuit</h3>
                            <p>The Kijiji Motor Racing Club Mtwapa Circuit is open for most motor-racing events held on the Grand Prix or National Circuits and there's always a friendly welcome when you come to the SRC. Take a look at the many benefits of membership by clicking here, or you could pop in next time you visit Silverstone.
                  </p>
                            <div style={{ display: "flex" }}>
                                <div className="orange-box">
                                    <div style={{ fontSize: '20px', lineHeight: 1.05 }}>21</div>
                                    <div>APR</div>
                                </div>
                                <div>
                                    <span><i class="fa fa-map-marker" aria-hidden="true"></i>{' '}Mtwapa</span><br />
                                    <span><i class="fa fa-clock-o" aria-hidden="true"></i>{' '}1pm-6pm</span>
                                </div>

                            </div>
                            <Button >
                                ATTEND EVENT
                  </Button>
                        </Col>
                    </Row>
                </div>
                <div className="slider-cont">
                    <Row>
                        <Col span={8} className="slider-image">
                            <img src={require('../../assets/car.jpg')} />
                        </Col>
                        <Col span={16} className="slider-text ">
                            <h4>Featured Events</h4>
                            <h3>Grow The Business
                            Interviews Brend Nyango
                            from Do It Now Inc
                            </h3>
                            <p>Come and Interact with Brend Nyango as he explains Both interviewing an expert or being interviewed present exceptional opportunities to expand your credibility, authority & respect to grow your business.



                  </p>
                            <div style={{ display: "flex" }}>
                                <div className="orange-box">
                                    <div style={{ fontSize: '20px', lineHeight: 1.05 }}>04</div>
                                    <div>MAY</div>
                                </div>
                                <div>
                                    <span><i class="fa fa-map-marker" aria-hidden="true"></i>{' '}Nairobi</span><br />
                                    <span><i class="fa fa-clock-o" aria-hidden="true"></i>{' '}8am-1pm</span>
                                </div>

                            </div>
                            <Button >
                                ATTEND EVENT
                  </Button>
                        </Col>
                    </Row>
                </div>
            </Carousel>
        );
    }
}
export default Features