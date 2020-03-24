import React from 'react';

class Event extends React.Component {
    render(){
        return(
            <div  className="bottom-landing">
              <div className='event-box'>
                <div className="event-image">
                  <img src={this.props.image} />
                </div>
                <div className="orange">
                  <div className="orange-box">
                      <div style={{ fontSize: '20px', lineHeight: 1.05 }}>{this.props.date}</div>
                      <div>{this.props.month}</div>
                  </div>
                  <div className="event-content">
                      <p>{this.props.title}</p>
                  </div>
                </div>
              </div>
           </div>
      
        );
    }
}
export default Event;