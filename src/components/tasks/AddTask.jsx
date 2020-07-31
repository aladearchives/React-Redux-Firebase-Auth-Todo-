import React, { Component } from "react";
import { addTask } from "../../actions/taskActions";
import { connect } from "react-redux";

class AddTask extends Component {
  state = {
    task: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
  };

  render() {
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "38px" }}
          onSubmit={this.handleSubmit}
        >
          <legend></legend>
          <div className="form-group">
            <label htmlFor="task">Add a Task</label>
            <input
              type="text"
              className="form-control"
              id="task"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);
