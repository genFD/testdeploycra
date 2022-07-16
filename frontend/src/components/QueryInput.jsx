import React from 'react';
import { useGlobalContext } from '../context/context.jsx';

const QueryInput = () => {
  const { setQuery, query, clearQueryInput, placeholder } = useGlobalContext();
  return (
    <div className="relative">
      {/* space */}

      {/* 1 ------------ ICON------------------------ */}
      <div className="absolute flex items-center h-full">
        <svg width={23} height={23} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>
      </div>

      {/* 2------------ INPUT------------------------ */}
      <input
        id="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="focus:outline-none caret-violet text-19202D dark:text-white dark:bg-19202D w-full h-full flex items-center px-12 text-body cursor-pointer"
        placeholder={
          placeholder === true
            ? 'Filter by title, companies, expertise…'
            : 'Filter by title…'
        }
      />

      {/* 3 ------------ CLEAR BUTTON------------------------ */}
      {query && (
        <div>
          <svg
            onClick={clearQueryInput}
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

export default QueryInput;
