import React from 'react';

const Display = props => {
  return (
    <div className="display">
      <div className="point-box">
        <p>Strikes</p>
        <h2> {props.strikes}</h2>
      </div>
      <div className="point-box">
        <p>Balls</p>
        <h2>{props.balls}</h2>
      </div>
    </div>
  );
};

export default Display;
