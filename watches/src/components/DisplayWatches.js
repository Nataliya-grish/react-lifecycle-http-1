import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export default function DisplayWatches({ time, name, id, deleteWatch }) {
  debugger;
  const secondStyle = {
    transform: `rotate(${
      (1 / 60) * time.format("ss")
    }turn) translate(-50%, -50%)`
  };
  const minuteStyle = {
    transform: `rotate(${
      (1 / 60) * time.format("mm")
    }turn) translate(-50%, -50%)`
  };
  const hoursStyle = {
    transform: `rotate(${
      (1 / 12) * time.format("HH")
    }turn) translate(-50%, -50%)`
  };

  return (
    <div className="DisplayWatches">
      <h5 className="titleWatches">{name}</h5>
      <div className="Watch">
        <div className="Watch-item">
          <div className="time second" style={secondStyle}></div>
          <div className="time minute" style={minuteStyle}>
            <div className="arrow"></div>
          </div>
          <div className="time hours" style={hoursStyle}>
            <div className="arrow"></div>
          </div>
        </div>
        <div onClick={() => deleteWatch(id)} className="delete">
          x
        </div>
      </div>
    </div>
  );
}

DisplayWatches.propTypes = {
  time: PropTypes.instanceOf(moment),
  name: PropTypes.string,
  id: PropTypes.string,
  deleteWatch: PropTypes.func.isRequired
};
