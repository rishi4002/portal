import './Jobpage.css'
import { Link, useParams } from 'react-router';
import Jobcard from './Jobcard';
import Alldata from './Dummy';
import { useEffect, useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";

function Jobpage() {
  
  const [Data, setData]= useState([]);

  let place= useParams().place;
  let qualification= useParams().qualification;

  
  let newData= [];

 for (let i = 0; i < Alldata.length; i++) {
    if (Alldata[i].District === place && Alldata[i]['Education Level'] === qualification) {
       newData= [...newData, Alldata[i]];
    }
    }
    

    useEffect(()=> {
          setData(newData);
    },[]);


  return (
    <div className='jobsdiv'>
      <Link to='/' className='backButton'><IoArrowBackOutline/></Link>
    {(Data.length === 0) ? <h1>Sorry! no job found.</h1>: Data.map((item)=> <Jobcard place={item.District} company= {item["Company Name"]} address={item.Address} phone={item["Phone No."]} whatsapp={item["WA No."]} opening={item["No. of Openings"]} roles={item.Roles} key={item.key}/>)}
   </div>
 )
}

export default Jobpage