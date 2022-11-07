import { combineReducers } from "redux";
import deviceReducer from "./reducers/deviceReducer";
const rootReducer = combineReducers({
  device: deviceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
