import React from 'react';
import { Link } from 'react-router-dom';
import angkor from '../components/assets/angkor.jpg'

const SignIn = () => {
    return (
        <div>
           <div className="min-h-[845px] h-screen flex bg-slate-900">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 lg:flex-none xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="mt-6 text-2xl font-extrabold text-white md:text-3xl">
            Sign here.
          </h2>
          <p className="mt-2 text-sm text-white hover:text-cyan-600">
            <Link to="/login">No account ? Sign up here</Link>
          </p>
          <form className="mt-4"  >
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
                  
                  required
                />
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