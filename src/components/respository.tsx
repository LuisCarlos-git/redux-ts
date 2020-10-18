import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationState } from "../store";
import { loadRequest } from "../store/modules/repositories/actions";

const Repository: React.FC = () => {
  const repositories = useSelector(
    (state: ApplicationState) => state.repositories.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <ul>
      {repositories.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default Repository;
