import { action } from "typesafe-actions";
import { RepositoriesDataTypes, RepositoriesActionsTypes } from "./types";

export const loadRequest = () => action(RepositoriesActionsTypes.load_request);

export const loadSuccess = (data: RepositoriesDataTypes) =>
  action(RepositoriesActionsTypes.load_success, { data });

export const loadFailure = () => action(RepositoriesActionsTypes.load_failure);
