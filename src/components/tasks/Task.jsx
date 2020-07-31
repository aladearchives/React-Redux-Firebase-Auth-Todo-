import React from "react";
import moment from "moment";

const Task = (task) => {
  return (
    <>
      <tr>
        <th>{task.task}</th>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
          <span className="material-icons" style={{ cursor: "pointer" }}>
            check_circle
          </span>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default Task;
