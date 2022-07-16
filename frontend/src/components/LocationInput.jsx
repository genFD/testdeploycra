import React from 'react';
import { useGlobalContext } from '../context/context.jsx';

const LocationInput = () => {
  const { location, setLocation, clearLocationInput } = useGlobalContext();
  return (
    <div className="relative border-x border-5964E0">
      {/* SPACE */}

      {/* 1 ------------ ICON------------------------ */}
      <div className="absolute flex items-center tablet:ml-4 desktop:ml-6 h-full">
        <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
      </div>

      {/* 2------------ INPUT------------------------ */}
      <input
        id="location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className="focus:outline-none caret-violet text-19202D dark:text-white dark:bg-19202D font-normal w-full h-full flex items-center tablet:px-10 desktop:pl-14 desktop:pr-10 text-body cursor-pointer"
        placeholder="Filter by location…"
      />

      {/* 3 ------------ CLEAR BUTTON------------------------ */}
      {location && (
        <div>
          <svg
            onClick={clearLocationInput}
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Close"
            className="icon icon-tabler icon-tabler-x absolute top-0 right-4 tablet:bg-5964E0 tablet:stroke-white desktop:hover:bg-5964E0 desktop:hover:stroke-white rounded-md transition-colors ease-in-out duration-150 cursor-pointer"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="#6E8098"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </div>
      )}
    </div>
  );
};

export default LocationInput;
