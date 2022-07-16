import { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = '/v1/devjobs/jobs'

function Home() {
const [jobs, setJobs] = useState([])

 const getJobs = async () =>{
  const {data} = await axios.get(API_URL)
  setJobs(data)
 }
useEffect(()=>{
getJobs()
}, [])

  return (
    <div className="App">
      <header>
        <picture>
        <source
          srcSet="assets/desktop/bg-pattern-header.svg"
          media="(min-width:1024px)"
        />
        <source
          srcSet="assets/tablet/bg-pattern-header.svg"
          media="(min-width:768px)"
        />
        <img src="assets/mobile/bg-pattern-header.svg" alt="" />
      </picture>
      </header>
      <h1>test</h1>
       {
          jobs.map((job) => {
            return <div key={job.id} className="bg-black">
             <Link to={`/detail/${job.id}`}>
     <p>{job.content.company}</p> 

             </Link>
        <img src={job.content.logo} alt="" />
            </div>
          }  
          )
        }
    </div>
  );
}

export default Home;
