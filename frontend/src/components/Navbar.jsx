import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Toggle } from '../components';

const Navbar = () => {
  const { id } = useParams();
  return (
    <nav
      id="nav"
      className="max-h-[136px] min-w-[375px] relative overflow-hidden tablet:max-h-fit tablet:overflow-visible"
    >
      {/* background pattern */}
      <picture>
        <source
          srcSet="/assets/desktop/bg-pattern-header.svg"
          media="(min-width:1024px)"
        />
        <source
          srcSet="/assets/tablet/bg-pattern-header.svg"
          media="(min-width:768px)"
        />
        <img src="/assets/mobile/bg-pattern-header.svg" alt="" />
      </picture>

      {/* CONTAINER FOR  LOGO AND TOGGLE */}
      <div className="absolute top-8 flex items-center justify-between w-full px-6 tablet:px-10 laptop:px-24 desktop:px-156">
        {/* LOGO */}
        <Link to="/">
          {id ? (
            <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-body2">
              Back
            </button>
          ) : (
            <img
              src="/assets/desktop/logo.svg"
              className="w-115 h-8"
              alt="devjobs_logo"
            />
          )}
        </Link>
        {/* TOGGLE BUTTON */}
        <Toggle />
      </div>
    </nav>
  );
};

export default Navbar;
