import { combineReducers } from "redux";
import deviceReducer from "./reducers/deviceReducer";
import serviceReducer from "./reducers/serviceReducer";

const rootReducer = combineReducers({
  device: deviceReducer,
  service: serviceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
