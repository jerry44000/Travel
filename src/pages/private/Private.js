import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext.js";
import { Outlet, useLocation, Navigate } from "react-router-dom";

export default function Private() {
  const { currentUser } = useContext(UserContext);
  // console.log("private", currentUser);

  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
