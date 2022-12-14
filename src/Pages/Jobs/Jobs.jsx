import React from 'react'
import "./Jobs.css"
// import {BsBagPlus} from "react-icons/bs"
import {IoBagAddSharp} from "react-icons/io5"
import {   Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from "react-icons/ai"
 import Data from "../../data/jobs.json"
const Jobs = () => {
  console.log(Data)
  return (
    <div > 
      <div className='jobs-1' >
         <div style={{display:"flex", marginTop:"40px", }}>
         <IoBagAddSharp className='Icons-bag'/>
          <h2 className='job-text'>Recommended Jobs for You</h2>
         </div>
           <div className='select'>
           <span>You can select upto 5 jobs to apply</span>
            <Button  >Apply</Button>
           </div>
        </div>


      <div className='posting-jobs'>
         {/* SECTION1 */}
         <div className='section-1'>
          <div className='manage-jobs'>
             <div className='cyber' >
               <img src="https://images.squarespace-cdn.com/content/v1/576a6006f5e23175ba4e41d8/1595066134418-O7DO7A6F7FZATW78PAI4/Cyber+Security+Boot+Camp?format=500w" alt="alt" style={{width:"100%"}} />
             </div>
               <div style={{marginTop:"12px"}}>
               <h2 className='job-prefence'>We could not find any jobs matching your preferences</h2>
              <ul>
                <li>. We will notify you as soon as a new job is posted matching your criteria</li>
                 <li>. <Link className='Link'>Manage Your Preferences</Link>    to ensure you receive the most relevant jobs</li>
              </ul>
               </div>
          </div>

            {/* {Data.length>0 && Data.map((item)=>{
               return <div>{item.title}</div>
            })} */}
                 
         </div>
           {/* SECTION2 */}
         <div className='section-2'>
             
             <div className='job-criteria'>
               <div className='add-prefer'>
                 <h2>Get jobs matching your criteria by adding below preferences</h2>
                 <div className='email-market'>
                      <img src="https://image.freepik.com/free-vector/landing-page-send-message-illustration_126608-31.jpg" alt="" style={{width:"100%"}}/>
                 </div>
               </div>
                <div>
                   <span className='outline'><AiOutlinePlus className='add-icons'/>
                        <a  >Add Your Preferred Job Role</a>
                       </span>
                   <span className='outline'><AiOutlinePlus className='add-icons'/> <Link className='Link'>Add Your Preferred Work Location </Link> </span>
                   <span className='outline'><AiOutlinePlus className='add-icons'/><Link className='Link'>Add Your Preferred Salary</Link>    </span>
                </div>
             </div>
         </div>
          {/* SECTION2 */}
      </div>
         
    </div>
  )
}


export default Jobs;
