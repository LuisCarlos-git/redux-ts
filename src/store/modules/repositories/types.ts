// Actions types
export const RepositoriesActionsTypes = {
  load_request: "@repository/load_request",
  load_success: "@repository/load_success",
  load_failure: "@repository/load_failure",
};

// Data types
export interface RepositoriesDataTypes {
  id: number;
  name: string;
}

//State types
export interface RepositoriesStateTypes {
  readonly data: RepositoriesDataTypes[];
  readonly loading: string;
  readonly error: boolean;
}
export interface RepositoriesStateTypes {
  readonly data: RepositoriesDataTypes[];
  readonly loading: string;
  readonly error: boolean;
}
