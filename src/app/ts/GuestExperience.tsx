import React from "react";
import AppRouter from "./containers/app-router";
import { createStore, applyMiddleware } from "redux";
import AllReducers from "./reducers/root-reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

export const rootStore = createStore(
  AllReducers,
  applyMiddleware(thunk, logger)
);
export class GuestExperience extends React.Component {
  public render() {
    return (
      <Provider store={rootStore}>
        <AppRouter />
      </Provider>
    );
  }
}
