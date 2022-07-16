import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { JobInfo, Navbar, Loading, NoResults } from '../components';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context.jsx';

function Detail() {
  const { jobDetail, getJobDetail, loading } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    getJobDetail(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <Navbar id={id} />
      <Transition
        appear
        show={!loading}
        as='div'
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {loading ? <Loading /> : !jobDetail ? <NoResults /> : <JobInfo />}
      </Transition>
    </>
  );
}

export default Detail;
