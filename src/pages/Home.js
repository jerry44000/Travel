import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavMobile from "../components/elements/NavMobile.js";
import MenuIcon from "@mui/icons-material/Menu";
import budda from "../components/assets/buddha.png";
import AnotherCustomsBtn from "../components/elements/AnotherCustomsBtn.js";
import Section from "../components/elements/Section.js";
import Destination from "../components/Destinations.js";
import Informations from "../components/elements/Informations.js";
import Footer from "../components/elements/Footer.js";

const Home = () => {
  const [active, setActive] = useState(false);

  let navigate = useNavigate();

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="w-full absolute lg:flex items-center p-4 flex justify-between">
        <span className="text-4xl font-extrabold uppercase text-white select-none">
          <img src={budda} alt="icon buddha" className="h-20 w-20" />
        </span>

        <nav>
          <ul className="hidden lg:flex gap-8 uppercase p-6 text-white font-medium cursor-pointer">
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/signin">
                <AnotherCustomsBtn>Sign In</AnotherCustomsBtn>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <AnotherCustomsBtn>Sign Up</AnotherCustomsBtn>
              </Link>
            </li>
          </ul>

          <NavMobile showMenu={showMenu} active={active} />
        </nav>

        <div className="lg:hidden scale-150">
          <MenuIcon onClick={showMenu} className="cursor-pointer text-white" />
        </div>
      </div>
      <Section />
      <Destination />
      <Informations />
      <Footer />
    </div>
  );
};

export default Home;
