const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return state;
    }
    case "ADD_TASK_ERR": {
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
