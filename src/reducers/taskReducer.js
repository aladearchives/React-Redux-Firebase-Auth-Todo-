import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Task Added");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("Something Went Wrong, please try again");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Task Deleted");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("An Error occured while Removing Task");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("Task Status Updated");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("An Error occured during Status Update");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
