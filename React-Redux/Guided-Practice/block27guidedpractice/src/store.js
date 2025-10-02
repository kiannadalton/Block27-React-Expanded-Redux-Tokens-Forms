import { configureStore } from "react-redux";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
