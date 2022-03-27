import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavMobile from "./elements/NavMobile.js";
import MenuIcon from "@mui/icons-material/Menu";
import budda from "./assets/buddha.svg";


const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="w-full absolute lg:flex items-center p-4 lg:justify-between flex justify-between">
      <span>
        <img src={budda} alt="icon buddha" className="h-20 w-20" />
      </span>
      
      <nav >
        <ul className="hidden lg:flex gap-8 uppercase p-6 text-white font-medium">
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Link to="/">Clients</Link>
          </li>
          <li>
            <Link to="/">Works</Link>
          </li>
          <li>
            <Link to="/">Testimonials</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <NavMobile showMenu={showMenu} active={active} />
      </nav>
      <div className="lg:hidden scale-150">
        <MenuIcon onClick={showMenu} className="cursor-pointer text-black" />
      </div>
    </div>
  );
};

export default Header;
