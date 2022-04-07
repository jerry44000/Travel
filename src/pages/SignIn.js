import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/UserContext.js";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import angkor from "../components/assets/angkor.jpg";
import budda from "../components/assets/buddha.png";

const SignIn = () => {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();
  const handleForm = async (e) => {
    e.preventDefault();
    // console.log(inputs)

    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      // console.log(cred);
      navigate("/private/private-home");
    } catch {
      setValidation("Email or password incorrect");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign in" />
        <link rel="canonical" href="/signin" />
      </Helmet>
      <div className="min-h-[845px] h-screen flex bg-slate-900">
        <Link to="/">
          <span className="text-4xl font-extrabold uppercase text-white select-none mt-5 ml-5">
            <img src={budda} alt="icon buddha" className="h-20 w-20" />
          </span>
        </Link>
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 lg:flex-none xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <h2 className="mt-6 text-2xl font-extrabold text-white md:text-3xl">
              Sign here.
            </h2>
            <p className="mt-2 text-sm text-white hover:text-cyan-600">
              <Link to="/login">No account ? Sign up here</Link>
            </p>
            <form className="mt-4" ref={formRef} onClick={handleForm}>
              <div className="space-y-4 mt-6">
                <div>
                  <label
                    htmlFor="signinemail"
                    className="block text-sm font-medium text-white"
                  >
                    Email address
                  </label>
                  <input
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                    type="email"
                    id="signinemail"
                    ref={addInputs}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="signinpassword"
                    className="block text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    className="mt-1 appearance-none block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-600 focus:border-cyan-600 sm:text-sm"
                    type="password"
                    id="signinpassword"
                    ref={addInputs}
                    required
                  />
                  <p className="text-red-700">{validation}</p>
                </div>
                <button
                  className="w-full animate-pulse inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden sm:block relative flex-1">
          <img
            src={angkor}
            alt="angkor vat"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
