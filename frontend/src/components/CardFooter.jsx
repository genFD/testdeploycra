import React from 'react';

const CardFooter = ({ position, company }) => {
  return (
    <div className="w-375 h-24 tablet:w-768 desktop:w-full desktop:px-355 tablet:h-24 bg-white dark:bg-very-dark-blue flex items-center justify-center tablet:justify-between tablet:px-10">
      <div className="hidden tablet:flex tablet:flex-col">
        <h3 className="text-19202D dark:text-white font-bold text-heading-3 ">
          {position}
        </h3>
        <span className="text-6E8098 dark:text-9DAEC2">{company}</span>
      </div>
      <button className="w-327 h-48 tablet:w-141 bg-violet rounded-md grid place-items-center font-bold text-white text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
        Apply now
      </button>
    </div>
  );
};

export default CardFooter;
