import React from 'react';
import { useGlobalContext } from '../context/context.jsx';

const ContractInput = () => {
  const { checked, handleCheckbox } = useGlobalContext();
  return (
    <div className="relative tablet:ml-5 desktop:ml-8">
      <div className="h-full flex items-center gap-x-3">
        {/* space */}

        {/* TWO FLEX ITEMS : CHECKBOX, TEXT FULL_TIME */}

        {/* 1 ------------ CHECKBOX ------------------------ */}
        <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckbox}
            className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
          />
          {/* check icon */}
          <div className="check-icon hidden bg-violet text-white rounded-sm">
            <svg
              className="icon icon-tabler icon-tabler-check"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
        </div>

        {/* 2 ------------ TEXT FULL_TIME ------------------------ */}
        <p className="text-body w-20 flex text-very-dark-blue desktop:w-2/3 dark:text-white font-bold">
          <span>Full Time</span>
          <span className="hidden desktop:block desktop:ml-1">Only</span>
        </p>
      </div>

      <style>
        {`  .checkbox:checked + .check-icon {
                            display: flex;
                        }`}
      </style>
    </div>
  );
};

export default ContractInput;
