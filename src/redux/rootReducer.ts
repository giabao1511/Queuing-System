import { combineReducers } from "redux";
import deviceReducer from "./reducers/deviceReducer";
import serviceReducer from "./reducers/serviceReducer";
import provideReducer from "./reducers/provideReducer";

const rootReducer = combineReducers({
  device: deviceReducer,
  service: serviceReducer,
  provide: provideReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
