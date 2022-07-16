import React from 'react';

const CardHeader = ({ logoBackground, logo, company, website }) => {
  return (
    <div className="z-10 -mt-8 tablet:-mt-14 relative bg-white dark:bg-very-dark-blue w-327 h-228 rounded-md flex flex-col justify-center items-center tablet:flex-row tablet:rounded-tl-2xl tablet:rounded-bl-2xl tablet:w-689 tablet:h-140 tablet:justify-start desktop:w-730">
      {/* LOGO */}
      <div
        className="absolute w-50 h-50 left-auto -top-6 rounded-2xl tablet:rounded-none tablet:static tablet:w-140 tablet:h-full flex items-center p-1 tablet:p-7"
        style={{ background: logoBackground }}
      >
        <img src={logo} alt="logo_company" />
      </div>

      {/* COMPANY */}

      <div className="w-78 h-14 tablet:ml-10 flex flex-col items-center tablet:items-start justify-center ">
        <span className="dark:text-white text-19202D">{company}</span>
        <span className="dark:text-6E8098">{website}</span>
      </div>

      {/* BUTTON */}

      <div className="flex items-center mt-6 tablet:mt-0 tablet:ml-244 desktop:ml-282">
        <button className="w-147 h-48 bg-body-bg dark:bg-violet rounded-md grid place-items-center font-bold text-violet dark:text-white dark:hover:bg-6E8098 text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet">
          Company site
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
