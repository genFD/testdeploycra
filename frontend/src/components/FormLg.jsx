import React from 'react';
import { QueryInput, LocationInput, ContractInput, SearchButton } from '.';
import { useGlobalContext } from '../context/context.jsx';

const FormLg = () => {
  const { handleSubmit } = useGlobalContext();
  return (
    <div className="hidden tablet:flex tablet:justify-center h-full bg-white dark:bg-19202D">
      <form
        onSubmit={handleSubmit}
        className="w-full px-4 grid tablet:grid-cols-[1fr_1fr_0.5fr_82px] desktop:grid-cols-[1fr_1fr_0.5fr_126px] items-center"
      >
        {/* FOUR GRID ITEMS : QUERY, LOCATION CONTRACT, SEARCHBUTTON */}

        {/* 1FR */}
        <QueryInput />

        {/* 1FR */}
        <LocationInput />

        {/* 0.5FR */}
        <ContractInput />

        {/* tablet:82px  desktop:126PX */}
        <SearchButton />
      </form>
    </div>
  );
};

export default FormLg;
