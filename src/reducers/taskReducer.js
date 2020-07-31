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
    default:
      return state;
  }
};

export default taskReducer;
