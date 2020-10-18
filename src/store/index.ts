import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/config/rootReducer";
import rootSaga from "./modules/config/rootSaga";

import { RepositoriesStateTypes } from "./modules/repositories/types";

export interface ApplicationState {
  repositories: RepositoriesStateTypes;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
