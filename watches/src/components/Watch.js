import React from "react";
import moment from "moment";
import DisplayWatches from "./DisplayWatches";
import PropTypes from "prop-types";

export default class Watch extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.timeZone = props.timeZone;
    this.nameZone = props.nameZone;
    this.deleteWatch = props.deleteWatch;
    this.id = props.id;
    this.state = {
      date: moment().utcOffset(Number(this.timeZone))
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(id) {
    clearInterval(this.timerID);
    this.deleteWatch(id);
  }

  tick() {
    this.setState({
      date: moment().utcOffset(Number(this.timeZone))
    });
  }

  delete = this.componentWillUnmount.bind(this);

  render() {
    return (
      <DisplayWatches
        time={this.state.date}
        name={this.nameZone}
        id={this.id}
        deleteWatch={this.delete}
      />
    );
  }
}

Watch.propTypes = {
  timeZone: PropTypes.string,
  nameZone: PropTypes.string,
  id: PropTypes.string,
  deleteWatch: PropTypes.func.isRequired
};

Watch.defaultProps = {
  timeZone: "",
  nameZone: "",
  id: ""
};
