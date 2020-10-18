import { Reducer } from "redux";

import { RepositoriesStateTypes, RepositoriesActionsTypes } from "./types";

const initial_state: RepositoriesStateTypes = {
  data: [],
  loading: "false",
  error: false,
};

const repositories: Reducer<RepositoriesStateTypes> = (
  state = initial_state,
  actions
) => {
  switch (actions.type) {
    case RepositoriesActionsTypes.load_request: {
      return { ...state, loading: "true" };
    }
    case RepositoriesActionsTypes.load_success: {
      return {
        ...state,
        loading: "false",
        data: actions.payload.data,
        error: false,
      };
    }
    case RepositoriesActionsTypes.load_failure: {
      return { ...state, loading: "false", data: [], error: true };
    }

    default:
      return { ...state };
  }
};

export default repositories;
