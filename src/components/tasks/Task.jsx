import React from "react";
import moment from "moment";
import Check from "./Check.jsx";
import { removeTask, toggleChecked } from "../../actions/taskActions";
import { connect } from "react-redux";

const Task = ({ task, removeTask, toggleChecked }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };
  const handleCheck = (task) => {
    toggleChecked(task);
  };
  return (
    <>
      <tr>
        <th>{task.task}</th>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
          <Check onClick={() => handleCheck(task)} checked={task.checked} />
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
