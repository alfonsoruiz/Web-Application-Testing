import React from 'react';

export const addStrike = strikes => {
  return strikes + 1;
};

export const addBall = balls => {
  return balls + 1;
};

const Dashboard = props => {
  const addFoul = () => {
    if (props.strikes === 0) {
      props.setStrikes(props.strikes + 1);
    }

    if (props.strikes === 1) {
      props.setStrikes(props.strikes + 2);
    }
  };

  const hit = () => {
    clearBoard();
  };

  const clearBoard = () => {
    props.setStrikes(0);
    props.setBalls(0);
  };

  return (
    <div className="dashboard">
      <div className="controls">
        <button onClick={() => props.setStrikes(addStrike(props.strikes))}>
          Strike
        </button>
        <button onClick={() => props.setBalls(addBall(props.balls))}>
          Ball
        </button>
        <button onClick={addFoul}>Foul</button>
        <button onClick={hit}>Hit</button>
      </div>
    </div>
  );
};

export default Dashboard;
