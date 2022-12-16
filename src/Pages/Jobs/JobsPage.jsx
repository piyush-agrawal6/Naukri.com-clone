import React, { useEffect, useState } from 'react'
import "./JobsPage.css"
import data from "../../data/jobs.json"
import { Link, useParams } from 'react-router-dom'
import {BsBagPlus} from "react-icons/bs"
import {TfiWallet} from "react-icons/tfi"
import {CiLocationOn} from "react-icons/ci"
import { Button } from '@chakra-ui/react'
import {BsPin} from "react-icons/bs"
 
const JobsPage = ( ) => {
  const [currentjobs,Setcurrentjobs]=useState({})

   
   const {id}=useParams()
  
   useEffect(()=>{
      if(id){
        const jobs=data.find((item)=>item.id===Number(id))
         Setcurrentjobs(jobs)
        
          console.log(currentjobs)
          
      } 
   },[id,currentjobs])
  return (
    <div  >
      <div className='jbpages'>
          
      </div>
         <div className='main-container'>
           <div className='cont-1'>
            {/* Top container */}
            <div className='job-detail'>
              
              <h2>{currentjobs.title}</h2>
              <div className='job-review'>
              <ul>{currentjobs.company}</ul>
              <Link className='review'>{currentjobs.review}</Link>
              </div>
               <div className='save'>
                 <div className='part-1'>
                 <div className='experience'>
                <BsBagPlus className='exper-bag'/>
                <ul>{currentjobs.experience}</ul>
               </div>
              <div className='salary'>
                <TfiWallet className='salary-icon'/>
                <ul>{currentjobs.salary}</ul>
              </div>

              <div className='salary'>
                <CiLocationOn className='salary-icon'/>
                <ul>{currentjobs.location}</ul>
              </div>
              <div className='salary'>
                <BsPin className='salary-icon'/>
                <ul>Hired</ul>
              </div>
                 </div>

                 <div className='part-2'>
                    <div className='Apply-btn'>
                    <button   className='save-btn' >save</button>
                   <button   className='btn-aply'>Apply</button>
                    </div>
                 </div>
                 
               </div>
                
                <div className='applicants'>
                  <div className='posted'>
                    <ul className='post-text'>Posted:</ul>
                    <ul className='post-day'>{currentjobs.posted}</ul>
                  </div>
                  <div className='posted-totalapplicant'>
                  <ul className='post-total'>Job Applicants:</ul>
                    <ul className='post-job'>{currentjobs.Applicants}</ul>
                  </div>
                </div>


            </div>
                  {/* Top container */}

                  <div className='description-container'>
                       <div className='job-describe'>
                        <ul className='role'>Role</ul>
                          {/* <ul className='desc-job'>{currentjobs?.jobDescription.Role}</ul>
                          <ul className='role'>Industry Type</ul>
                          <ul className='desc-job'>{currentjobs?.jobDescription.industryType}</ul>
                          <ul className='role'>Functional Area</ul>
                          <ul className='desc-job'>{currentjobs?.jobDescription.functionalArea}</ul>
                          <ul className='role'>Employment Type</ul>
                          <ul className='desc-job'>{currentjobs?.jobDescription.employmentType}</ul>
                          <ul className='role'>Role Category</ul>
                          <ul className='desc-job'>{currentjobs?.jobDescription.roleCategory}</ul> */}
                          <ul className='Ed-tech'>Education</ul>
                       </div>
                  </div>
           </div>
            {/* left container ending */}
           <div className='cont-2'>
               <div className='skill-suggest'>
                  <div className='naukri-learn'>
                    <img src="https://static.naukimg.com/s/7/1290/i/elearning-logo.ff8a74da.svg" width="100%" alt="logo" />
                  </div>
                  <div className='course-suggest'>
                      <h2>Suggested Skills for you</h2>
                      <ul>Get Better Jobs & Higher Salaries.Suggested Course</ul>
                       <h3>Administration</h3>
                       <ul>1040+ Courses from top platforms</ul>
                  </div>

                  <div className='data-analyst'>
                     <h3>Data Analysis</h3>
                       <ul>8540+ Courses and certifications</ul>
                  </div>

                  <div className='data-analyst'>
                     <h3>General Management</h3>
                       <ul>9200+ top rated corses for career growth</ul>
                  </div>
                   <ul className='paid'>May include paid service </ul>
               </div>
             </div>
         </div>
      
    </div>
  )
}


export default JobsPage