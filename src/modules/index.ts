import { combineReducers } from "@reduxjs/toolkit";

import profileStore from "./authentication/profileStore";

const appReducer = combineReducers({
  profile: profileStore,
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;
