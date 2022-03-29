import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
import mekong from "../components/assets/mekong.jpg";

const Login = () => {
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();

  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();
  const handleForm = async (e) => {
    e.preventDefault();
    // console.log(inputs)
    if (
      (inputs.current[1].value.length || inputs.current[2].value.length) < 6
    ) {
      setValidation("6 characters min");
      return;
    } else if (inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Passwords do not match");
      return;
    }

    try {
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      // console.log(cred);
      navigate("/private/private-home");
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setValidation("Email format invalid");
      }
      if (err.code === "auth/email-already-in-use") {
        setValidation("Email already used");
      }
    }
  };
  return (
    <div className="min-h-[845px] h-screen flex bg-slate-900">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 lg:flex-none xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="mt-6 text-2xl font-extrabold text-white md:text-3xl">
            Take a breath, sign up.
          </h2>
          <p className="mt-2 text-sm text-white hover:text-cyan-600">
            <Link to="/signin">Already have account ? Sign in.</Link>
          </p>
          <form className="mt-4" onSubmit={handleForm} ref={formRef}>
            <div className="space-y-4 mt-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email address
                </label>
                <input
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                  type="email"
                  id="email"
                  ref={addInputs}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                  type="password"
                  id="password"
                  ref={addInputs}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="repeatPassword"
                  className="block text-sm font-medium text-white"
                >
                  Repeat Password
                </label>
                <input
                  className="mt-1 appearance-none block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                  type="password"
                  id="repeatPassword"
                  ref={addInputs}
                  required
                />
                <p className="text-red-700">{validation}</p>
              </div>
              <button
                className="w-full animate-pulse inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden sm:block relative flex-1">
        <img
          src={mekong}
          alt="mekong river"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
