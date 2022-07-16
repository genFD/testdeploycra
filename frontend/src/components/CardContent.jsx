import React from 'react';

const CardContent = ({
  postedAt,
  contract,
  position,
  location,
  description,
  requirements,
  role,
}) => {
  return (
    <article className="bg-white rounded-md dark:bg-very-dark-blue w-327 px-6 tablet:px-12 py-10 tablet:w-689 desktop:w-730 desktop:mt-0">
      {/* HEADER :  */}
      <div className="tablet:flex tablet:justify-between tablet:items-center">
        <header className="flex flex-col">
          <div className="flex items-center gap-3 text-dark-grey text-body">
            <span>{postedAt}</span>
            <span className="w-1 h-1 rounded-full bg-dark-grey"></span>
            <span>{contract}</span>
          </div>
          <h2 className="text-very-dark-blue dark:text-white text-heading-3 font-bold mt-2">
            {position}
          </h2>
          <h3 className="text-violet text-heading-4 font-bold mt-3">
            {location}
          </h3>
        </header>

        <div className="mt-54 tablet:mt-0 tablet:w-141">
          <button className="w-full h-48 bg-violet rounded-md grid place-items-center font-bold text-white text-body transition-colors duration-200 cursor-pointer hover:bg-light-violet ">
            Apply now
          </button>
        </div>
      </div>
      {/* HEADER : ENDS */}

      {/* JOB DESCRIPTION :  */}

      <div className="mt-8">
        <p className="text-body2 text-6E8098 dark:text-9DAEC2">{description}</p>
      </div>

      {/* JOB DESCRIPTION : ENDS  */}

      {/* REQUIREMENTS:  */}
      <div className="mt-8">
        <h3 className="text-19202D dark:text-white font-bold text-heading-3">
          Requirements
        </h3>
        <p className="mt-7 text-body2 text-6E8098 dark:text-9DAEC2">
          {requirements.content}
        </p>
      </div>

      <div className="mt-8">
        <div>
          <ul className="text-6E8098 unreqlist  items-center justify-center dark:text-9DAEC2 text-body2 font-normal">
            {requirements.items.map((item, index) => {
              return (
                <li key={index} className="flex gap-4 items-center">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* REQUIREMENTS: ENDS */}

      {/* WHAT WILL YOU DO:  */}
      <div className="mt-10">
        <h3 className="text-19202D dark:text-white font-bold text-heading-3 ">
          What You Will Do
        </h3>
        <p className="mt-7 text-body2 text-6E8098 dark:text-9DAEC2">
          {role.content}
        </p>
      </div>

      <div className="mt-8">
        <div>
          <ol className="text-6E8098 dark:text-9DAEC2 text-body2 flex flex-col gap-2 font-normal req-list">
            {role.items.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ol>
        </div>
      </div>
      {/* WHAT WILL YOU DO:  */}
    </article>
  );
};

export default CardContent;
