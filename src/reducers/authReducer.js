import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast.success("Welcome Back");
      return state;

    case "SIGN_IN_ERR":
      toast.error("Sign In Error");
      return state;
    case "SIGN_OUT":
      toast("Sorry to see you leave");
      return state;
      case "SIGN_UP":
      toast.success("Welcome");
      return state;

    case "SIGN_UP_ERR":
      toast.error("Sign Up Error");
      return state;
    default:
      return state;
  }
};

export default authReducer;
