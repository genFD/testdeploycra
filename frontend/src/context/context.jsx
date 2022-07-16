import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
const AppContext = React.createContext();

// const API_URL = '/v1/devjobs/jobs/';
const API_URL = 'https://testdeploycra.herokuapp.com/v1/devjobs/jobs/';

const AppProvider = ({ children }) => {
  /* ------------------- */
  /* APP STATE */
  /* ------------------- */
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);
  const [modal, setModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [jobDetail, setJobDetail] = useState(null);
  const [placeholder, setplaceholder] = useState(
    JSON.parse(localStorage.getItem('placeholder'))
  );

  /* -------------------------------- */
  /* CORE FILTER FUNCTIONNALITIES */
  /* -------------------------------- */

  //get all the data if query state is empty string or get a set of data that matches query and populate results state.
  const getJobs = async () => {
    setLoading(true);
    //1---- constructing url to hit server endpoint.
    let url;
    const urlQuery = `&position=${query}&company=${query}&expertise=${query}`;
    //if query input contains a value then url is different and so is the controller in the backend
    if (query) {
      url = `${API_URL}/search?${urlQuery}`;
    } else {
      url = API_URL;
    }
    //2------ fetching data using url in the first step
    try {
      const { data } = await axios.get(`${url}`);
      if (data) {
        setResults(data);
      } else {
        setResults([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get a set of data that matches location and populate results state.
  const getJobsByLocation = async () => {
    setLoading(true);
    let url;
    const urlQuery = `location=${location}`;
    if (location) {
      url = `${API_URL}/search/location?${urlQuery}`;
    } else {
      url = API_URL;
    }
    try {
      const { data } = await axios.get(`${url}`);
      if (data) {
        setResults(data);
      } else {
        setResults([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Toggle checked state
  const handleCheckbox = () => {
    setChecked(!checked);
  };

  // get a set of data that matches Full-time contract when checked state is true and populate results state.
  const getJobsByContract = async () => {
    setLoading(true);
    const fullTime = 'Full Time';
    let url;
    const urlQuery = `contract=${fullTime}`;
    if (checked) {
      url = `${API_URL}/search/contract?${urlQuery}`;
    } else {
      url = API_URL;
    }

    try {
      const { data } = await axios.get(`${url}`);
      if (data) {
        setResults(data);
      } else {
        setResults([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get job info to populate detail page
  const getJobDetail = async (id) => {
    try {
      const { data } = await axios.get(`${API_URL}${id}`);
      if (data) {
        setJobDetail(data);
      } else {
        setJobDetail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  // clear query input
  const clearQueryInput = () => {
    setQuery('');
  };

  // clear location input
  const clearLocationInput = () => {
    setLocation('');
  };

  // invoke getjobs or getjobsbylocation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      getJobs();
      clearQueryInput();
    }
    if (location) {
      getJobsByLocation();
      clearLocationInput();
    }
    closeModal();
  };

  // handle submit for location modal on mobile
  const handleSubmitModal = (e) => {
    e.preventDefault();
    getJobsByLocation();
    clearLocationInput();
    closeModal();
  };

  // invoke get jobs to get all the jobs back/ useful for loadmore button
  const handleLoadMore = () => {
    getJobs();
  };

  useEffect(() => {
    // rerender list of jobs component when ckecked state is true
    getJobsByContract();

    // eslint-disable-next-line
  }, [checked]);

  /* ---------------------------------- */
  /* MANAGING LOCATION MODAL ON MOBILE */
  /* --------------------------------- */

  // utility functions to show and hide modal
  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);

  // hide modal on large screenss
  const modalFixer = () => {
    if (window.innerWidth >= 768) {
      closeModal();
    }
  };

  /* ----------------------------------- */
  /* MANAGING QUERY INPUT PLACEHOLDER */
  /* ---------------------------------- */
  // query input placeholder changes on large screens
  // storing  local storage placeholder state value in local storage so that value stays consistent
  localStorage.setItem('placeholder', placeholder);

  // Swap placeholder on large screen
  const swapPlaceholder = () => {
    if (window.innerWidth >= 1440) {
      setplaceholder(true);
    } else if (window.innerWidth < 1440) {
      setplaceholder(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        modal,
        modalFixer,
        swapPlaceholder,
        placeholder,
        showModal,
        closeModal,
        results,
        query,
        setQuery,
        setLocation,
        location,
        checked,
        handleCheckbox,
        handleSubmit,
        handleSubmitModal,
        handleLoadMore,
        clearLocationInput,
        clearQueryInput,
        getJobDetail,
        jobDetail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
