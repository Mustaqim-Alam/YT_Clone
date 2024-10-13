import React, { useDebugValue, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu,  } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div>WatchPage</div>;
};

export default WatchPage;
