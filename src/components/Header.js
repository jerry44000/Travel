import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavMobile from "./elements/NavMobile.js";
import MenuIcon from "@mui/icons-material/Menu";
import budda from "./assets/buddha.png";
import AnotherCustomsBtn from "../components/elements/AnotherCustomsBtn.js";

const Header = () => {
  const [active, setActive] = useState(false);

  let navigate = useNavigate();

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="w-full absolute lg:flex items-center p-4 flex justify-between">
      <span className="text-4xl font-extrabold uppercase text-white select-none">
        <img src={budda} alt="icon buddha" className="h-20 w-20" />
      </span>

      <nav>
        <ul className="hidden lg:flex gap-8 uppercase p-6 text-white font-medium cursor-pointer">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <AnotherCustomsBtn>
              <Link to="login">
              Login
              </Link>
              </AnotherCustomsBtn>
          </li>
        </ul>

        <NavMobile showMenu={showMenu} active={active} />
      </nav>

      <div className="lg:hidden scale-150">
        <MenuIcon onClick={showMenu} className="cursor-pointer text-white" />
      </div>
    </div>
  );
};

export default Header;
