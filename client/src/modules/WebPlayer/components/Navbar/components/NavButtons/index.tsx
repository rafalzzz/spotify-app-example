import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { NavButtonsLayout } from "./layout";

export const NavButtons = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname.split("/")[2] === "search")
      setShowSearchBar(true);
    else setShowSearchBar(false);
  }, [history.location.pathname]);

  const handleOnClick = useCallback((e: React.MouseEvent) => {
    history.push("/");
  }, []);

  const handleLeftArrow = useCallback((e: React.MouseEvent) => {
    history.goBack();
  }, []);

  const handleRightArrow = useCallback((e: React.MouseEvent) => {
    history.goForward();
  }, []);
  
  return (
    <NavButtonsLayout
      showSearchBar={showSearchBar}
      handleOnClick={handleOnClick}
      handleLeftArrow={handleLeftArrow}
      handleRightArrow={handleRightArrow}
    />
  );
};;
