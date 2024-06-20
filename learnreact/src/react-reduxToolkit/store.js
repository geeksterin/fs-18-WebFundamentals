import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice";

const store = configureStore({
  reducer: {
    cr: counterReducer,
  },
});
export default store;



// In react-redux, store had the initialState as well as reducer functions defined

// In redux toolkit, store only has reference to the reducer functions, the actual functions and the initialState are defined in a separate place called "SLICE"
