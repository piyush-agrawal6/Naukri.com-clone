import React, { useEffect, useState } from 'react'
import "./JobsPage.css"
import data from "../../data/jobs.json"
import { useParams } from 'react-router-dom'
const JobsPage = ( ) => {
  const [currentjobs,Setcurrentjobs]=useState({})
   const {id}=useParams()
   console.log(id)
   useEffect(()=>{
      if(id){
        const jobs=data.find((item)=>item.id===Number(id))
         Setcurrentjobs(jobs)
         console.log(currentjobs)
      } 
   },[id])
  return (
    <div  >
      <div className='jbpages'>
       
      </div>
        <div>{currentjobs.Applicants}
  </div>
    </div>
  )
}


export default JobsPage