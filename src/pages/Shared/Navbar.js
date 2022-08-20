import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  if (loading) {
    return <Loading />;
  }
  const myMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Our Courses</Link>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {myMenu}
          </ul>
        </div>
        <Link to="/" className="text-2xl text-primary font-bold block">
          <span className="text-6xl text-secondary">e</span>Think
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex mr-24">
        <ul className="menu menu-horizontal p-0">{myMenu}</ul>
      </div>
      <div className="navbar-end ">
        <div className="flex justify-around items-center">
          {user && (
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          )}
          {user && (
            <p className="text-primary font-bold mx-2">{user?.displayName} </p>
          )}
        </div>
        {user ? (
          <button onClick={logout} class="btn btn-primary">
            Log Out
          </button>
        ) : (
          <Link to="/login" class="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
