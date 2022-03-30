import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const NavMobile = ({ active, showMenu }) => {
  return (
    <ul
      className={
        active
          ? "flex-col fixed inset-0 left-1/4 flex items-center justify-center gap-12 uppercase bg-stone-50/10 backdrop-blur-md z-10000 lg:hidden"
          : "hidden"
      }
    >
      <CloseIcon onClick={showMenu} className="cursor-pointer" />
      <li>
        <Link to="/">Help</Link>
      </li>
      <li>
        <Link to="/login">Sign Up</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
    </ul>
  );
};

export default NavMobile;
