import Modal from "./Modal";
import Forgot from "./Forgot";
import React, { Fragment } from "react";
import { useState } from "react";

export default function Registration() {
  const [showModal, setShowModal] = useState(false); 

  // const handleForgotPassword = () => {
  //   setShowModal(true); 
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false); 
  // };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to our plataform
            </h2>
          </div>
          
          <form className="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md  py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="*******"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <Fragment>
              <div className="text-sm">
                <button  onClick={() => setShowModal(true)}>
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
                </button>
              </div>
              <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <Forgot/>
              </Modal>
              </Fragment>
            </div>

            <div>
              <button type="submit"className="w-full text-dark bg-blue-700 hover:bg-blue-800 focus:ring-4 focus: outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text center">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  
                </span> 
                Sign in
              </button>
              <div className="text-sm font-medium text-gray-500">
              Not registered?
                <a href="#" className="font-medium text-indigo-600 hover:text-pink-500">
                  Create account
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
