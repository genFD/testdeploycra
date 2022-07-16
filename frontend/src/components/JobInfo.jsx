import React from 'react';
import { CardHeader, CardContent, CardFooter } from '../components';

import { useGlobalContext } from '../context/context.jsx';

const JobInfo = () => {
  const { jobDetail } = useGlobalContext();
  return (
    <div className="card-detail flex flex-col items-center mt-4 gap-6">
      <CardHeader {...jobDetail[0].content} />
      <CardContent {...jobDetail[0].content} />
      <CardFooter {...jobDetail[0].content} />
    </div>
  );
};

export default JobInfo;
