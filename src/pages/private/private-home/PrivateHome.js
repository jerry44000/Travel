import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import MenuIcon from "@mui/icons-material/Menu";
import budda from "../../../components/assets/buddha.png";
import AnotherCustomsBtn from "../../../components/elements/AnotherCustomsBtn.js";
import NavMobile from "../../../components/elements/NavMobile.js";
import Footer from "../../../components/elements/Footer.js";
import { auth } from "../../../firebase-config.js";

const PrivateHome = () => {
  const [active, setActive] = useState(false);

  let navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch {
      alert(
        "For some reasons we can't disconnect, please check your internet connection and retry"
      );
    }
  };

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
            <li onClick={logout}>
              <AnotherCustomsBtn>Log Out</AnotherCustomsBtn>
            </li>
          </ul>

          <NavMobile showMenu={showMenu} active={active} />
        </nav>

        <div className="lg:hidden scale-150">
          <MenuIcon onClick={showMenu} className="cursor-pointer text-white" />
        </div>
      </div>
      <div className="w-full h-screen bg-private-bg bg-cover bg-center bg-fixed  flex items-center justify-center">
        <div className="text-white text-center absolute uppercase sm:w-3/4 lg:w-2/4 bg-black/50 p-8 rounded-lg">
          <h1 className="res-font-sm font-bold">Asia trips</h1>
          <p className="res-font font-extrabold py-2">
            Welcome and choose your trip
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateHome;
