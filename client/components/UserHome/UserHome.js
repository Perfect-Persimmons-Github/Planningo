import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./UserHome.css";
import { fetchUserTasksThunk } from "../../store/tasks";
import { format } from "date-fns";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.props.fetchUserTasks();
  }
  render() {
    const { firstName } = this.props;
    const { tasks } = this.props;
    const month = format(new Date(), "M");
    const date = format(new Date(), "d");
    const year = format(new Date(), "y");
    const today = `${year}-${month}-${date}`;

    return (
      <div className="userhome-wrapper">
        <h3>{`Hello, ${firstName}`}</h3>
        <p>{`On your dashboard for today...`}</p>
        {tasks && tasks.length > 0 ? (
          <ul>
            {tasks
              .filter((task) => {
                return task.start === today;
              })
              .map((task) => {
                return <li>{task.name}</li>;
              })}
          </ul>
        ) : (
          <Link to="/tasks">Add a new task!</Link>
        )}
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    firstName: state.user.firstName,
    tasks: state.tasks,
  };
};
const mapDispatch = (dispatch) => ({
  fetchUserTasks: () => dispatch(fetchUserTasksThunk()),
});
export default connect(mapState, mapDispatch)(UserHome);

UserHome.propTypes = {
  firstName: PropTypes.string,
};
