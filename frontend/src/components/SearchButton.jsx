import React from 'react';
import { useGlobalContext } from '../context/context.jsx';

const SearchButton = () => {
  const { handleSubmit } = useGlobalContext();
  return (
    <div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-20 h-12 desktop:w-123 desktop:h-48 bg-5964E0 text-white rounded-md flex items-center justify-center text-body2 transition-colors duration-200 cursor-pointer hover:bg-light-violet"
      >
        Search
      </button>
    </div>
  );
};

export default SearchButton;
