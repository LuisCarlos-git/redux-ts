import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";

import { loadSuccess, loadFailure } from "./actions";

import { RepositoriesActionsTypes } from "./types";

function* getRepos() {
  try {
    const response = yield call(api.get, "users/LuisCarlos-git/repos");

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export default all([
  takeLatest(RepositoriesActionsTypes.load_request, getRepos),
]);
