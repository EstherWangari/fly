import React from 'react';
import { Input } from 'antd';
import { Row, Col, Button, Comment, Tooltip } from 'antd';
import moment from 'moment'

const { TextArea } = Input;

class SingleEvent extends React.Component {
    render() {
        return (
            <div>
                <div className="wrapp">
                    <Row>
                        <Col md={8} xs={24} className="slider-image">
                            <img src={this.props.image} />
                        </Col>
                        <Col md={16} xs={24} className="slider-text ">
                            <h3>{this.props.heading}</h3>
                            <p>{this.props.content}</p>
                            <div style={{ display: "flex" }}>
                                <div className="orange-box">
                                    <div style={{ fontSize: '20px', lineHeight: 1.05 }}>{this.props.date} </div>
                                    <div>{this.props.month} </div>
                                </div>
                                <div>
                                    <span><i class="fa fa-map-marker" aria-hidden="true"></i>{' '}{this.props.location} </span><br />
                                    <span><i class="fa fa-clock-o" aria-hidden="true"></i>{' '}{this.props.time} </span>
                                </div>
                            </div>
                            <Button >
                                ATTEND EVENT
                             </Button>
                            <hr />
                            <Row style={{ paddingTop: 10 }}>
                                <Col md={12}>
                                    <h4>Organized By:</h4>
                                    <div className="organizer-side">
                                        <div className="organizer">FW</div>
                                        <p>{this.props.organizer} </p>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <h4>Share Event</h4>
                                    <div className="organizer-side-share">
                                        <a href="https://twitter.com/explore">
                                            <div className="organizer">
                                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <a href="https://www.facebook.com/">
                                            <div className="organizer">
                                                <i class="fa fa-facebook" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        <div className="organizer">
                                            <i class="fa fa-paperclip" aria-hidden="true"></i>
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <div className="comment-container">
                    <h4>Comments</h4>
                    <TextArea
                        rows={8}
                        placeholder="Say something..."
                    />
                    <Button>
                        LOGIN TO POST A COMMENT
                    </Button>
                    <div className="comment-section">
                        <Comment
                            author={<a>{this.props.author}</a>}
                            avatar={
                                <div className="organizer">WG</div>
                            }
                            content={
                                <p>
                                    {this.props.comment}
                                </p>
                            }
                            datetime={
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().fromNow()}</span>
                                </Tooltip>
                            }
                        >
                            {/* {children} */}
                        </Comment>

                    </div>
                </div>


            </div>

        );
    }
}
export default SingleEvent;