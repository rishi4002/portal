import React from 'react';
import './Jobcard.css';
import { RiWhatsappFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

function Jobcard({place,company,address,phone,whatsapp,opening,roles}) {
 
  return(
    <div className='jobcarddiv'>
    <div className='detaildiv'>
    <h1>{company}</h1>
    <p>{address}</p>
    <p>{opening} Openings</p>
    <p>{roles}</p>
    </div>
    <div className='contactdiv'>
      <a href={'https://wa.me/91'+ whatsapp} target='_blanck' className='iconw'><RiWhatsappFill/></a>
      <a href={'tel:' + phone} className='iconc'> <FaPhoneAlt/></a>
    </div>
    </div>
  )
  
}

export default Jobcard