import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { RegisterReferenceLayout } from "./layout";

export const RegisterReference = () => {
  const history = useHistory();

  const handleOnClick = useCallback(
    (location: string) => (e: React.MouseEvent) => {
      history.push(location);
    },
    []
  );

  return <RegisterReferenceLayout handleOnClick={handleOnClick} />;
};
